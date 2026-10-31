"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
    MatchActionType,
    NotificationType,
} from "../../../prisma/generated/prisma";
import { requireCurrentUser } from "@/features/auth/lib/session";

function createPairKey(userA: string, userB: string) {
    return [userA, userB].sort().join(":");
}

export async function handleMatchAction(
    targetUserId: string,
    type: MatchActionType,
): Promise<void> {
    const currentUser = await requireCurrentUser();
    if (currentUser.id === targetUserId) throw new Error("Nem matchelhetsz saját magaddal.");

    const [targetUser, currentUserData] = await Promise.all([
        prisma.users.findUnique({
            where: {
                id: targetUserId,
            },
            select: {
                id: true,
                userData: {
                    select: {
                        nickname: true,
                    },
                },
            },
        }),
        prisma.users.findUnique({
            where: {
                id: currentUser.id,
            },
            select: {
                userData: {
                    select: {
                        nickname: true,
                    },
                },
            },
        }),
    ]);
    if (!targetUser) throw new Error("A felhasználó nem található.");

    const existingAction = await prisma.matchAction.findUnique({
        where: {
            fromUserId_toUserId: {
                fromUserId: currentUser.id,
                toUserId: targetUserId,
            },
        },
    });
    if (existingAction) return;
    

    if (type === MatchActionType.PASS) {
        await prisma.matchAction.create({
            data: {
                fromUserId: currentUser.id,
                toUserId: targetUserId,
                type: MatchActionType.PASS,
            },
        });

        revalidatePath("/love/match");

        return;
    }

    await prisma.$transaction(async (tx) => {
        await tx.matchAction.create({
            data: {
                fromUserId: currentUser.id,
                toUserId: targetUserId,
                type: MatchActionType.LIKE,
            },
        });

        const reciprocalAction = await tx.matchAction.findUnique({
            where: {
                fromUserId_toUserId: {
                    fromUserId: targetUserId,
                    toUserId: currentUser.id,
                },
            },
            select: {
                type: true,
            },
        });

        if (reciprocalAction?.type !== MatchActionType.LIKE) {
            return;
        }

        const pairKey = createPairKey(currentUser.id, targetUserId);

        const match = await tx.match.upsert({
            where: {
                pairKey,
            },
            create: {
                user1Id: currentUser.id,
                user2Id: targetUserId,
                status: "ACTIVE",
                pairKey,
            },
            update: {
                status: "ACTIVE",
                unmatchedAt: null,
            },
        });

        await tx.notification.createMany({
            data: [
                {
                    recipientId: currentUser.id,
                    actorId: targetUserId,
                    type: NotificationType.MATCH,
                    title: "Új match!",
                    message: `Te és ${targetUser.userData?.nickname} matcheltetek.`,
                    entityId: match.id,
                    entityType: "MATCH",
                },
                {
                    recipientId: targetUserId,
                    actorId: currentUser.id,
                    type: NotificationType.MATCH,
                    title: "Új match!",
                    message: `Te és ${currentUserData?.userData?.nickname} matcheltetek.`,
                    entityId: match.id,
                    entityType: "MATCH",
                },
            ],
        });
    });

    revalidatePath("/love/match");
    revalidatePath("/inbox/notifications");
}
