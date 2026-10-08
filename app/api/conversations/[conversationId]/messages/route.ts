import { unauthorizedResponse } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { toMessageDTO } from "@/features/chat/mapper/message.mapper";
import { getConversationMessages } from "@/features/chat/repository/message";
import { prisma } from "@/lib/prisma";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;

interface RouteContext {
    params: Promise<{
        conversationId: string;
    }>;
}

export async function GET(request: Request, context: RouteContext) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return unauthorizedResponse();
        }

        const { conversationId } = await context.params;

        const { searchParams } = new URL(request.url);

        const requestedLimit = Number(
            searchParams.get("limit") ?? DEFAULT_LIMIT,
        );

        const limit = Math.min(Math.max(requestedLimit, 1), MAX_LIMIT);

        const cursor = searchParams.get("cursor") ?? undefined;

        const messages = await getConversationMessages({
            conversationId,
            userId: currentUser.id,
            limit,
            cursor,
        });

        const hasNextPage = messages.length > limit;

        const page = hasNextPage ? messages.slice(0, limit) : messages;

        const nextCursor = hasNextPage
            ? (page[page.length - 1]?.id ?? null)
            : null;

        return NextResponse.json({
            messages: page.map(toMessageDTO).reverse(),
            nextCursor,
            hasNextPage,
        });
    } catch (error) {
        if (
            error instanceof Error &&
            error.message === "CONVERSATION_NOT_FOUND"
        ) {
            return NextResponse.json(
                {
                    message: "A beszélgetés nem található.",
                },
                {
                    status: 404,
                },
            );
        }

        console.error("GET conversation messages failed:", error);

        return NextResponse.json(
            {
                message: "Az üzenetek betöltése sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}

export async function POST(request: Request, context: RouteContext) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return unauthorizedResponse();
        }

        const { conversationId } = await context.params;

        const body = await request.json();

        const content =
            typeof body.content === "string" ? body.content.trim() : "";

        if (!content) {
            return NextResponse.json(
                {
                    message: "Az üzenet nem lehet üres.",
                },
                {
                    status: 400,
                },
            );
        }

        if (content.length > 5000) {
            return NextResponse.json(
                {
                    message: "Az üzenet maximum 5000 karakter lehet.",
                },
                {
                    status: 400,
                },
            );
        }

        const participant = await prisma.conversationParticipant.findUnique({
            where: {
                conversationId_userId: {
                    conversationId,
                    userId: currentUser.id,
                },
            },

            select: {
                id: true,
                deletedAt: true,
            },
        });

        if (!participant) {
            return NextResponse.json(
                {
                    message: "Nem vagy résztvevője ennek a beszélgetésnek.",
                },
                {
                    status: 403,
                },
            );
        }

        const message = await prisma.$transaction(async (tx) => {
            const created = await tx.message.create({
                data: {
                    conversationId,
                    senderId: currentUser.id,
                    type: "TEXT",
                    content,
                },

                select: {
                    id: true,
                    conversationId: true,
                    senderId: true,
                    type: true,
                    content: true,
                    sentAt: true,
                    revokedAt: true,
                },
            });

            await tx.conversation.update({
                where: {
                    id: conversationId,
                },

                data: {
                    updatedAt: new Date(),
                },
            });

            return created;
        });

        const supabase = getSupabaseServerClient();

        const payload = {
            messageId: message.id,
            conversationId: message.conversationId,
            senderId: message.senderId,
        };

        /*
         * 1. Realtime esemény az adott beszélgetéshez.
         *
         * Ezt a ChatScreen/useChatRealtime figyeli.
         */
        const conversationChannel = supabase.channel(
            `conversation:${conversationId}`,
        );

        const conversationBroadcastResult = await conversationChannel.send({
            type: "broadcast",
            event: "message:new",
            payload,
        });

        if (conversationBroadcastResult !== "ok") {
            console.error(
                "Conversation realtime broadcast failed:",
                conversationBroadcastResult,
            );
        }

        /*
         * 2. Realtime esemény a teljes beszélgetéslistához.
         *
         * Ezt a MessagesScreen/useConversationsRealtime figyeli.
         */
        const messagesChannel = supabase.channel("messages");

        const messagesBroadcastResult = await messagesChannel.send({
            type: "broadcast",
            event: "message:new",
            payload,
        });

        if (messagesBroadcastResult !== "ok") {
            console.error(
                "Messages realtime broadcast failed:",
                messagesBroadcastResult,
            );
        }

        return NextResponse.json(
            {
                message: {
                    ...message,
                    sentAt: message.sentAt.toISOString(),
                    revokedAt: message.revokedAt?.toISOString() ?? null,
                    isRead: false,
                },
            },
            {
                status: 201,
            },
        );
    } catch (error) {
        console.error("POST conversation message failed:", error);

        return NextResponse.json(
            {
                message: "Az üzenet elküldése sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}
