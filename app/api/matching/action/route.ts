import { unauthorizedResponse } from "@/lib/api/route-handler";
import { getCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
    MatchActionType,
    NotificationType,
} from "../../../../prisma/generated/prisma";

const matchActionSchema = z.object({
    targetUserId: z.string().min(1),
    type: z.nativeEnum(MatchActionType),
});

function createPairKey(userA: string, userB: string): string {
    return [userA, userB].sort().join(":");
}

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return unauthorizedResponse();
    }

    const body = await request.json();

    const parsed = matchActionSchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json(
            {
                message: "Invalid request",
                errors: parsed.error.flatten(),
            },
            { status: 400 },
        );
    }

    const { targetUserId, type } = parsed.data;

    if (targetUserId === currentUser.id) {
        return NextResponse.json(
            { message: "You cannot match yourself." },
            { status: 400 },
        );
    }

    const targetUser = await prisma.users.findUnique({
        where: {
            id: targetUserId,
        },
        select: {
            id: true,
            username: true,
            userData: {
                select: {
                    nickname: true,
                    avatarUrl: true,
                },
            },
        },
    });

    if (!targetUser) {
        return NextResponse.json(
            { message: "User not found." },
            { status: 404 },
        );
    }

    const existingAction = await prisma.matchAction.findUnique({
        where: {
            fromUserId_toUserId: {
                fromUserId: currentUser.id,
                toUserId: targetUserId,
            },
        },
    });

    if (existingAction) {
        return NextResponse.json({
            success: true,
            alreadyHandled: true,
            matched: false,
        });
    }

    if (type === MatchActionType.PASS) {
        await prisma.matchAction.create({
            data: {
                fromUserId: currentUser.id,
                toUserId: targetUserId,
                type: MatchActionType.PASS,
            },
        });

        return NextResponse.json({
            success: true,
            matched: false,
        });
    }

    const result = await prisma.$transaction(async (tx) => {
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
            return {
                matched: false,
            };
        }

        const pairKey = createPairKey(currentUser.id, targetUserId);

        const match = await tx.match.upsert({
            where: {
                pairKey,
            },
            create: {
                user1Id: currentUser.id,
                user2Id: targetUserId,
                pairKey,
                status: "ACTIVE",
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
                    message: "Összeillettetek.",
                    entityId: match.id,
                    entityType: "MATCH",
                },
                {
                    recipientId: targetUserId,
                    actorId: currentUser.id,
                    type: NotificationType.MATCH,
                    title: "Új match!",
                    message: "Összeillettetek.",
                    entityId: match.id,
                    entityType: "MATCH",
                },
            ],
        });

        return {
            matched: true,
            matchId: match.id,
        };
    });

    return NextResponse.json({
        success: true,
        matched: result.matched,
        matchId: result.matched ? result.matchId : null,
        user: result.matched
            ? {
                  id: targetUser.id,
                  username: targetUser.username,
                  nickname: targetUser.userData?.nickname,
                  avatarUrl: targetUser.userData?.avatarUrl,
              }
            : null,
    });
}
