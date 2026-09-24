import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";

interface RouteContext {
    params: Promise<{
        conversationId: string;
    }>;
}

export async function POST(_request: Request, context: RouteContext) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.json(
                {
                    message: "Unauthorized",
                },
                {
                    status: 401,
                },
            );
        }

        const { conversationId } = await context.params;

        /*
         * Ellenőrizzük, hogy a user résztvevője-e
         * a conversationnek.
         */
        const participant = await prisma.conversationParticipant.findUnique({
            where: {
                conversationId_userId: {
                    conversationId,
                    userId: currentUser.id,
                },
            },

            select: {
                id: true,
            },
        });

        if (!participant) {
            return NextResponse.json(
                {
                    message: "A beszélgetés nem található.",
                },
                {
                    status: 404,
                },
            );
        }

        const readAt = new Date();

        /*
         * A conversationt eddig a pillanatig olvasottnak
         * tekintjük.
         */
        await prisma.conversationParticipant.update({
            where: {
                conversationId_userId: {
                    conversationId,
                    userId: currentUser.id,
                },
            },

            data: {
                lastReadAt: readAt,
            },
        });

        /*
         * Az egyes MessageRead rekordokat is létrehozzuk.
         *
         * Így az üzenetszintű read státusz is helyes marad.
         */
        const unreadMessages = await prisma.message.findMany({
            where: {
                conversationId,

                senderId: {
                    not: currentUser.id,
                },

                sentAt: {
                    lte: readAt,
                },

                reads: {
                    none: {
                        userId: currentUser.id,
                    },
                },
            },

            select: {
                id: true,
            },
        });

        if (unreadMessages.length > 0) {
            await prisma.messageRead.createMany({
                data: unreadMessages.map((message) => ({
                    messageId: message.id,
                    userId: currentUser.id,
                    readAt,
                })),

                skipDuplicates: true,
            });
        }

        return NextResponse.json({
            success: true,
            markedAsRead: unreadMessages.length,
            readAt: readAt.toISOString(),
        });
    } catch (error) {
        console.error(
            "POST /api/conversations/[conversationId]/read failed:",
            error,
        );

        return NextResponse.json(
            {
                message: "Az üzenetek olvasottként jelölése sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}
