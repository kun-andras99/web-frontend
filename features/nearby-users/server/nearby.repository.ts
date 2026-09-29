import "server-only";

import { prisma } from "@/lib/prisma";

export function findViewerLocation(userId: string) {
    return prisma.users.findUnique({
        where: { id: userId },
        select: { lat: true, lng: true, locationEnabled: true },
    });
}

/** Mindkét irányú blokkolás: akit én blokkoltam, és aki engem. */
export async function findBlockedUserIds(userId: string): Promise<string[]> {
    const rows = await prisma.userBlock.findMany({
        where: { OR: [{ blockerId: userId }, { blockedId: userId }] },
        select: { blockerId: true, blockedId: true },
    });

    const ids = new Set(rows.flatMap((row) => [row.blockerId, row.blockedId]));
    ids.delete(userId);
    return [...ids];
}

export interface NearbyCandidate {
    id: string;
    lat: number;
    lng: number;
}

/** Csak a távolságszámításhoz szükséges mezők: a profiladatok később, csak az aktuális oldalra jönnek. */
export async function findNearbyCandidates(params: {
    viewerId: string;
    excludeIds: string[];
}): Promise<NearbyCandidate[]> {
    const { viewerId, excludeIds } = params;

    const rows = await prisma.users.findMany({
        where: {
            id: { notIn: [viewerId, ...excludeIds] },
            locationEnabled: true,
            status: "ACTIVE",
            lat: { not: null },
            lng: { not: null },
        },
        select: { id: true, lat: true, lng: true },
    });

    // a where miatt nem null, de a típus nullable
    return rows.flatMap((row) =>
        row.lat !== null && row.lng !== null
            ? [{ id: row.id, lat: row.lat, lng: row.lng }]
            : [],
    );
}

export function findNearbyProfiles(ids: string[]) {
    return prisma.users.findMany({
        where: { id: { in: ids } },
        select: {
            id: true,
            userData: {
                select: {
                    avatarUrl: true,
                    nickname: true,
                    birth: true,
                    gender: true,
                },
            },
        },
    });
}

export type NearbyProfileData = Awaited<
    ReturnType<typeof findNearbyProfiles>
>[number];
