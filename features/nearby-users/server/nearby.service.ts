import "server-only";

import { toNearbyUserDTO } from "@/features/nearby-users/nearby-users.mapper";
import type {
    NearbyPageDTO,
    NearbyQuery,
} from "@/features/nearby-users/schemas/nearby.schema";
import {
    findBlockedUserIds,
    findNearbyCandidates,
    findNearbyProfiles,
    findViewerLocation,
} from "@/features/nearby-users/server/nearby.repository";
import { HttpError } from "@/lib/api/route-handler";
import { calculateDistanceKm } from "@/lib/utils/calculateDistanceMKm";

interface NearbyEntry {
    id: string;
    distanceKm: number;
}

function encodeCursor(entry: NearbyEntry): string {
    return Buffer.from(`${entry.distanceKm}|${entry.id}`).toString("base64url");
}

function decodeCursor(cursor: string): NearbyEntry {
    const invalid = () =>
        new HttpError(400, "Invalid cursor", "INVALID_CURSOR");

    const decoded = Buffer.from(cursor, "base64url").toString();
    const separator = decoded.indexOf("|");
    if (separator === -1) throw invalid();

    const distanceKm = Number(decoded.slice(0, separator));
    const id = decoded.slice(separator + 1);
    if (!Number.isFinite(distanceKm) || distanceKm < 0 || !id) throw invalid();

    return { distanceKm, id };
}

/** Egyenlő távolságnál az id dönt, így a sorrend és a lapozás stabil. */
const compareEntries = (a: NearbyEntry, b: NearbyEntry) =>
    a.distanceKm - b.distanceKm || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);

/** A page ezzel dönt, hogy a listát vagy a "kapcsold be a helymeghatározást" üzenetet mutassa. */
export async function getNearbyAvailability(userId: string): Promise<boolean> {
    const viewer = await findViewerLocation(userId);
    return Boolean(
        viewer?.locationEnabled && viewer.lat !== null && viewer.lng !== null,
    );
}

export async function listNearbyUsers(
    viewerId: string,
    query: NearbyQuery,
): Promise<NearbyPageDTO> {
    const viewer = await findViewerLocation(viewerId);
    if (!viewer) throw new HttpError(404, "User not found", "USER_NOT_FOUND");

    if (!viewer.locationEnabled) {
        throw new HttpError(
            409,
            "Location sharing is disabled",
            "LOCATION_DISABLED",
        );
    }
    if (viewer.lat === null || viewer.lng === null) {
        throw new HttpError(
            409,
            "Location has not been shared yet",
            "LOCATION_REQUIRED",
        );
    }

    const { lat, lng } = viewer;
    const after = query.cursor ? decodeCursor(query.cursor) : undefined;

    const candidates = await findNearbyCandidates({
        viewerId,
        excludeIds: await findBlockedUserIds(viewerId),
    });

    const entries = candidates
        .map((candidate): NearbyEntry => ({
            id: candidate.id,
            distanceKm: calculateDistanceKm(
                lat,
                lng,
                candidate.lat,
                candidate.lng,
            ),
        }))
        .sort(compareEntries)
        .filter((entry) => !after || compareEntries(entry, after) > 0);

    const hasMore = entries.length > query.limit;
    const page = hasMore ? entries.slice(0, query.limit) : entries;

    const profiles = await findNearbyProfiles(page.map((entry) => entry.id));
    const profileById = new Map(
        profiles.map((profile) => [profile.id, profile]),
    );

    // a sorrendet a `page` adja; a közben eltűnt (pl. törölt) usereket kihagyjuk
    const items = page.flatMap((entry) => {
        const profile = profileById.get(entry.id);
        return profile ? [toNearbyUserDTO(entry, profile)] : [];
    });

    const last = page.at(-1);
    return { items, nextCursor: hasMore && last ? encodeCursor(last) : null };
}
