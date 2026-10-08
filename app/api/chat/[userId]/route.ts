import { unauthorizedResponse } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";

interface RouteContext {
    params: Promise<{
        userId: string;
    }>;
}

export async function GET(_request: Request, context: RouteContext) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return unauthorizedResponse();
        }

        const { userId } = await context.params;

        if (userId === currentUser.id) {
            return NextResponse.json(
                {
                    message: "Saját magaddal nem indíthatsz beszélgetést.",
                },
                {
                    status: 400,
                },
            );
        }

        const conversation = await prisma.conversation.findFirst({
            where: {
                participants: {
                    every: {
                        userId: {
                            in: [currentUser.id, userId],
                        },
                    },
                },
            },

            select: {
                id: true,
            },
        });

        if (!conversation) {
            return NextResponse.json({
                conversation: null,
            });
        }

        return NextResponse.json({
            conversationId: conversation.id,
        });
    } catch (error) {
        console.error("GET /api/chat/[userId] failed:", error);

        return NextResponse.json(
            {
                message: "A beszélgetés betöltése sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}

export async function POST(_request: Request, context: RouteContext) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return unauthorizedResponse();
        }

        const { userId } = await context.params;

        if (userId === currentUser.id) {
            return NextResponse.json(
                {
                    message: "Saját magaddal nem beszélhetsz.",
                },
                {
                    status: 400,
                },
            );
        }

        const targetUser = await prisma.users.findUnique({
            where: {
                id: userId,
            },

            select: {
                id: true,
                status: true,
            },
        });

        if (!targetUser) {
            return NextResponse.json(
                {
                    message: "A felhasználó nem található.",
                },
                {
                    status: 404,
                },
            );
        }

        const existing = await prisma.conversation.findFirst({
            where: {
                participants: {
                    some: {
                        userId: currentUser.id,
                    },
                },

                AND: {
                    participants: {
                        some: {
                            userId,
                        },
                    },
                },
            },

            select: {
                id: true,
            },
        });

        if (existing) {
            return NextResponse.json({
                conversationId: existing.id,
            });
        }

        const conversation = await prisma.conversation.create({
            data: {
                participants: {
                    create: [
                        {
                            userId: currentUser.id,
                        },
                        {
                            userId,
                        },
                    ],
                },
            },

            select: {
                id: true,
            },
        });

        return NextResponse.json(
            {
                conversationId: conversation.id,
            },
            {
                status: 201,
            },
        );
    } catch (error) {
        console.error("POST /api/chat/[userId] failed:", error);

        return NextResponse.json(
            {
                message: "A beszélgetés létrehozása sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}
