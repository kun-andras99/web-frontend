import "server-only";

import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../prisma/generated/prisma";

type Db = Prisma.TransactionClient | typeof prisma;

export interface RelationFlags {
    friend: boolean;
    favorite: boolean;
    blocked: boolean;
}

/** A saját kapcsolataid azonosítói: három indexelt, egyszerű lekérdezés. */
export async function findRelationIds(viewerId: string, db: Db = prisma) {
    const [friendships, favorites, blocks] = await Promise.all([
        db.friendship.findMany({
            where: {
                status: "ACTIVE",
                OR: [{ user1Id: viewerId }, { user2Id: viewerId }],
            },
            select: { user1Id: true, user2Id: true },
        }),
        db.userFavorite.findMany({
            where: { fromUserId: viewerId },
            select: { toUserId: true },
        }),
        db.userBlock.findMany({
            where: { blockerId: viewerId },
            select: { blockedId: true },
        }),
    ]);

    return {
        friendIds: new Set(
            friendships.map((f) =>
                f.user1Id === viewerId ? f.user2Id : f.user1Id,
            ),
        ),
        favoriteIds: new Set(favorites.map((f) => f.toUserId)),
        blockedIds: new Set(blocks.map((b) => b.blockedId)),
    };
}

export function findProfiles(ids: string[]) {
    return prisma.users.findMany({
        where: { id: { in: ids } },
        select: {
            id: true,
            userData: { select: { nickname: true, avatarUrl: true } },
        },
    });
}
export type ManagedProfileData = Awaited<
    ReturnType<typeof findProfiles>
>[number];

export async function userExists(userId: string): Promise<boolean> {
    return (await prisma.users.count({ where: { id: userId } })) > 0;
}

const friendshipBetween = (
    a: string,
    b: string,
): Prisma.FriendshipWhereInput => ({
    status: "ACTIVE",
    OR: [
        { user1Id: a, user2Id: b },
        { user1Id: b, user2Id: a },
    ],
});

export async function findRelationship(
    viewerId: string,
    targetId: string,
    db: Db = prisma,
): Promise<RelationFlags> {
    const friend = await db.friendship.count({
        where: friendshipBetween(viewerId, targetId),
    });
    const favorite = await db.userFavorite.count({
        where: { fromUserId: viewerId, toUserId: targetId },
    });
    const blocked = await db.userBlock.count({
        where: { blockerId: viewerId, blockedId: targetId },
    });

    return { friend: friend > 0, favorite: favorite > 0, blocked: blocked > 0 };
}

// A createMany + skipDuplicates idempotens (egyedi kulcs kell hozzá), a deleteMany nem dob hibát hiányzó sornál.
export const insertFavorite = (fromId: string, toId: string, db: Db = prisma) =>
    db.userFavorite.createMany({
        data: [{ fromUserId: fromId, toUserId: toId }],
        skipDuplicates: true,
    });

export const deleteFavorite = (fromId: string, toId: string, db: Db = prisma) =>
    db.userFavorite.deleteMany({
        where: { fromUserId: fromId, toUserId: toId },
    });

export const insertBlock = (
    blockerId: string,
    blockedId: string,
    db: Db = prisma,
) =>
    db.userBlock.createMany({
        data: [{ blockerId, blockedId }],
        skipDuplicates: true,
    });

export const deleteBlock = (
    blockerId: string,
    blockedId: string,
    db: Db = prisma,
) => db.userBlock.deleteMany({ where: { blockerId, blockedId } });

export const endFriendship = (a: string, b: string, db: Db = prisma) =>
    db.friendship.updateMany({
        where: friendshipBetween(a, b),
        data: { status: "ENDED", endedAt: new Date() },
    });
    

export function runInTransaction<T>(
    work: (tx: Prisma.TransactionClient) => Promise<T>,
): Promise<T> {
    return prisma.$transaction(work);
}
