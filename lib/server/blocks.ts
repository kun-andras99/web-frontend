import "server-only";

import { prisma } from "@/lib/prisma";

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

export async function isBlockedBetween(a: string, b: string): Promise<boolean> {
    const count = await prisma.userBlock.count({
        where: {
            OR: [
                { blockerId: a, blockedId: b },
                { blockerId: b, blockedId: a },
            ],
        },
    });
    return count > 0;
}
