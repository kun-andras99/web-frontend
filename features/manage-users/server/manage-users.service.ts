import "server-only";

import { HttpError } from "@/lib/api/route-handler";
import { z } from "zod";
import { toManagedUserDTO, toStatuses } from "../manage-users.mapper";
import {
    deleteBlock,
    deleteFavorite,
    endFriendship,
    findProfiles,
    findRelationIds,
    findRelationship,
    insertBlock,
    insertFavorite,
    runInTransaction,
    userExists,
} from "./manage-users.repository";
import {
    ManagedUsersPageDTO,
    ManagedUsersQuery,
    RelationshipChanges,
    RelationshipResultDTO,
    RelationStatus,
} from "@/features/manage-users/schemas/manage-users.schema";

// ---- rendezés: magyar betűrend, a névtelenek a végén ----

const collator = new Intl.Collator("hu", {
    sensitivity: "base",
    numeric: true,
});

interface SortKey {
    id: string;
    nickname: string | null;
}

function compareUsers(a: SortKey, b: SortKey): number {
    if (a.nickname === null && b.nickname !== null) return 1;
    if (a.nickname !== null && b.nickname === null) return -1;

    return (
        collator.compare(a.nickname ?? "", b.nickname ?? "") ||
        (a.id < b.id ? -1 : a.id > b.id ? 1 : 0) // azonos névnél az id dönt: stabil sorrend
    );
}

// ---- kurzor: a (becenév, id) pár, base64url ----

const cursorSchema = z.object({ n: z.string().nullable(), i: z.string() });

function encodeCursor(user: SortKey): string {
    return Buffer.from(
        JSON.stringify({ n: user.nickname, i: user.id }),
    ).toString("base64url");
}

function decodeCursor(cursor: string): SortKey {
    try {
        const parsed = cursorSchema.parse(
            JSON.parse(Buffer.from(cursor, "base64url").toString()),
        );
        return { id: parsed.i, nickname: parsed.n };
    } catch {
        throw new HttpError(400, "Invalid cursor", "INVALID_CURSOR");
    }
}

// ---- lista ----

export async function listManagedUsers(
    viewerId: string, 
    query: ManagedUsersQuery,
): Promise<ManagedUsersPageDTO> {
    const { friendIds, favoriteIds, blockedIds } =
        await findRelationIds(viewerId);

    const statusesById = new Map<string, RelationStatus[]>();
    const add = (ids: Set<string>, status: RelationStatus) => {
        for (const id of ids) {
            const list = statusesById.get(id);
            if (list) list.push(status);
            else statusesById.set(id, [status]);
        }
    };
    add(friendIds, "FRIEND");
    add(favoriteIds, "FAVORITE");
    add(blockedIds, "BLOCKED");
    statusesById.delete(viewerId);

    const counts = {
        all: statusesById.size,
        friends: friendIds.size,
        favorites: favoriteIds.size,
        blocked: blockedIds.size,
    };

    const candidateIds =
        query.filter === "all"
            ? [...statusesById.keys()]
            : [
                  ...{
                      friends: friendIds,
                      favorites: favoriteIds,
                      blocked: blockedIds,
                  }[query.filter],
              ];

    const profiles =
        candidateIds.length > 0 ? await findProfiles(candidateIds) : [];
    const after = query.cursor ? decodeCursor(query.cursor) : undefined;

    const sorted = profiles
        .map((profile) =>
            toManagedUserDTO(profile, statusesById.get(profile.id) ?? []),
        )
        .sort(compareUsers)
        .filter((user) => !after || compareUsers(user, after) > 0);

    const hasMore = sorted.length > query.limit;
    const items = hasMore ? sorted.slice(0, query.limit) : sorted;
    const last = items.at(-1);

    return {
        items,
        nextCursor: hasMore && last ? encodeCursor(last) : null,
        counts,
    };
}

// ---- módosítás ----

export async function updateRelationship(
    viewerId: string,
    targetId: string,
    changes: RelationshipChanges,
): Promise<RelationshipResultDTO> {
    if (viewerId === targetId) {
        throw new HttpError(
            400,
            "You cannot manage yourself",
            "CANNOT_MANAGE_SELF",
        );
    }
    if (!(await userExists(targetId))) {
        throw new HttpError(404, "User not found", "USER_NOT_FOUND");
    }

    // Egy tranzakció: a hibánál (pl. 409) az addigi módosítások visszagördülnek.
    const flags = await runInTransaction(async (tx) => {
        const current = await findRelationship(viewerId, targetId, tx);
        const blockedAfter = changes.blocked ?? current.blocked;

        if (changes.blocked === true && !current.blocked) {
            // a tiltás megszünteti a barátságot, és kiveszi a kedvencek közül
            await insertBlock(viewerId, targetId, tx);
            await deleteFavorite(viewerId, targetId, tx);
            await endFriendship(viewerId, targetId, tx);
        } else if (changes.blocked === false && current.blocked) {
            await deleteBlock(viewerId, targetId, tx);
        }

        if (changes.favorite === true) {
            if (blockedAfter) {
                throw new HttpError(
                    409,
                    "Blocked users cannot be favorited",
                    "FAVORITE_BLOCKED",
                );
            }
            await insertFavorite(viewerId, targetId, tx);
        } else if (changes.favorite === false) {
            await deleteFavorite(viewerId, targetId, tx);
        }

        if (changes.friend === false) {
            await endFriendship(viewerId, targetId, tx);
        }

        return findRelationship(viewerId, targetId, tx);
    });

    return { statuses: toStatuses(flags) };
}
