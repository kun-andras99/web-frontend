import { getCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const actions = await prisma.matchAction.findMany({
        where: {
            fromUserId: currentUser.id,
        },
        select: {
            toUserId: true,
        },
    });

    const excludedUserIds = actions.map((action) => action.toUserId);

    const users = await prisma.users.findMany({
        where: {
            id: {
                not: currentUser.id,
                notIn: excludedUserIds,
            },
            userData: {
                isNot: null,
            },
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
        orderBy: {
            createdAt: "desc",
        },
    });

    return NextResponse.json(users);
}
