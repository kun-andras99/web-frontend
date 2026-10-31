import "server-only";

import { HttpError } from "@/lib/api/route-handler";
import { prisma } from "@/lib/prisma";
import { findBlockedUserIds } from "@/lib/server/blocks";
import {
    MatchActionType,
    NotificationType,
} from "../../../prisma/generated/prisma";
import type {
    MatchActionInput,
    MatchActionResultDTO,
    MatchCandidatesPageDTO,
    MatchCandidatesQuery,
} from "../schemas/matching.schema";

function createPairKey(userA: string, userB: string): string {
    return [userA, userB].sort().join(":");
}

/**
 * Lapozott jelöltlista. A már elbírált (LIKE / PASS) és a blokkolt felhasználókat az
 * adatbázis szűri ki (nem töltjük be az összes korábbi akciót a memóriába).
 */
export async function listMatchCandidates(
    viewerId: string,
    { cursor, limit }: MatchCandidatesQuery,
): Promise<MatchCandidatesPageDTO> {
    const blockedIds = await findBlockedUserIds(viewerId);

    const rows = await prisma.users.findMany({
        where: {
            id: { notIn: [viewerId, ...blockedIds] },
            status: "ACTIVE",
            userData: { isNot: null },
            matchActionsReceived: { none: { fromUserId: viewerId } },
        },
        select: {
            id: true,
            username: true,
            userData: {
                select: {
                    nickname: true,
                    avatarUrl: true,
                    birth: true,
                    gender: true,
                    sexuality: true,
                    description: true,
                },
            },
        },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        take: limit + 1,
        ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });

    const hasMore = rows.length > limit;
    const page = hasMore ? rows.slice(0, limit) : rows;

    return {
        items: page.map((row) => ({
            id: row.id,
            username: row.username,
            nickname: row.userData?.nickname ?? null,
            avatarUrl: row.userData?.avatarUrl ?? null,
            birth: row.userData?.birth?.toISOString() ?? null,
            gender: row.userData?.gender ?? null,
            sexuality: row.userData?.sexuality ?? null,
            description: row.userData?.description ?? null,
        })),
        nextCursor: hasMore ? (page.at(-1)?.id ?? null) : null,
    };
}

export async function recordMatchAction(
    viewerId: string,
    { targetUserId, type }: MatchActionInput,
): Promise<MatchActionResultDTO> {
    if (targetUserId === viewerId) {
        throw new HttpError(400, "You cannot match yourself.", "INVALID_TARGET");
    }

    const [targetUser, existingAction] = await Promise.all([
        prisma.users.findUnique({
            where: { id: targetUserId },
            select: {
                id: true,
                username: true,
                userData: { select: { nickname: true, avatarUrl: true } },
            },
        }),
        prisma.matchAction.findUnique({
            where: {
                fromUserId_toUserId: {
                    fromUserId: viewerId,
                    toUserId: targetUserId,
                },
            },
            select: { id: true },
        }),
    ]);

    if (!targetUser) {
        throw new HttpError(404, "User not found.", "NOT_FOUND");
    }
    if (existingAction) {
        return {
            success: true,
            alreadyHandled: true,
            matched: false,
        };
    }

    if (type === "PASS") {
        await prisma.matchAction.create({
            data: {
                fromUserId: viewerId,
                toUserId: targetUserId,
                type: MatchActionType.PASS,
            },
        });
        return { success: true, matched: false };
    }

    const matchId = await prisma.$transaction(async (tx) => {
        await tx.matchAction.create({
            data: {
                fromUserId: viewerId,
                toUserId: targetUserId,
                type: MatchActionType.LIKE,
            },
        });

        const reciprocal = await tx.matchAction.findUnique({
            where: {
                fromUserId_toUserId: {
                    fromUserId: targetUserId,
                    toUserId: viewerId,
                },
            },
            select: { type: true },
        });
        if (reciprocal?.type !== MatchActionType.LIKE) return null;

        const pairKey = createPairKey(viewerId, targetUserId);
        const match = await tx.match.upsert({
            where: { pairKey },
            create: {
                user1Id: viewerId,
                user2Id: targetUserId,
                pairKey,
                status: "ACTIVE",
            },
            update: { status: "ACTIVE", unmatchedAt: null },
        });

        await tx.notification.createMany({
            data: [viewerId, targetUserId].map((recipientId) => ({
                recipientId,
                actorId: recipientId === viewerId ? targetUserId : viewerId,
                type: NotificationType.MATCH,
                title: "Új match!",
                message: "Összeillettetek.",
                entityId: match.id,
                entityType: "MATCH",
            })),
        });

        return match.id;
    });

    return {
        success: true,
        matched: matchId !== null,
        matchId,
        user:
            matchId !== null
                ? {
                      id: targetUser.id,
                      username: targetUser.username,
                      nickname: targetUser.userData?.nickname ?? null,
                      avatarUrl: targetUser.userData?.avatarUrl ?? null,
                  }
                : null,
    };
}
