import "server-only";

import { HttpError } from "@/lib/api/route-handler";
import {
    publishMessageCreated,
    publishMessagesRead,
} from "@/lib/realtime/publisher";
import { findBlockedUserIds, isBlockedBetween } from "@/lib/server/blocks";
import { after } from "next/server";
import { toConversationDetailDTO, toMessageDTO } from "../chat.mapper";
import type {
    ConversationDetailDTO,
    MessageDTO,
    MessagesPageDTO,
    MessagesQuery,
    SendMessageInput,
} from "../schemas/chat.schema";
import {
    findConversationWithParticipant,
    findExistingConversationId,
    findMessagesPage,
    findMessagingTarget,
    findOrCreateConversation,
    findOtherParticipants,
    findParticipant,
    insertMessage,
    markMessagesRead,
} from "./chat.repository";

/** Nem résztvevőnek 404 jár (nem 403), hogy ne derüljön ki, létezik-e a beszélgetés. */
async function assertParticipant(conversationId: string, userId: string) {
    if (!(await findParticipant(conversationId, userId))) {
        throw new HttpError(
            404,
            "Conversation not found",
            "CONVERSATION_NOT_FOUND",
        );
    }
}

function assertNotSelf(viewerId: string, targetUserId: string) {
    if (viewerId === targetUserId) {
        throw new HttpError(
            400,
            "You cannot message yourself",
            "CANNOT_MESSAGE_SELF",
        );
    }
}

// ---- beszélgetés keresése / indítása ----

export async function findConversationWithUser(
    viewerId: string,
    targetUserId: string,
): Promise<{ conversationId: string | null }> {
    assertNotSelf(viewerId, targetUserId);
    const existing = await findExistingConversationId(viewerId, targetUserId);
    return { conversationId: existing?.id ?? null };
}

export async function openConversationWithUser(
    viewerId: string,
    targetUserId: string,
): Promise<{ conversationId: string; created: boolean }> {
    assertNotSelf(viewerId, targetUserId);

    const target = await findMessagingTarget(targetUserId);
    if (!target) throw new HttpError(404, "User not found", "USER_NOT_FOUND");

    // a blokkolást és az inaktív fiókot ugyanaz a hiba jelzi: nem derül ki, melyik az ok
    if (
        target.status !== "ACTIVE" ||
        (await isBlockedBetween(viewerId, targetUserId))
    ) {
        throw new HttpError(
            403,
            "Messaging is not allowed",
            "MESSAGING_NOT_ALLOWED",
        );
    }

    const { id, created } = await findOrCreateConversation(
        viewerId,
        targetUserId,
    );
    return { conversationId: id, created };
}

// ---- beszélgetés, üzenetek ----

export async function getConversation(
    conversationId: string,
    viewerId: string,
): Promise<ConversationDetailDTO> {
    const row = await findConversationWithParticipant(conversationId, viewerId);
    const dto = row ? toConversationDetailDTO(row) : null;
    if (!dto)
        throw new HttpError(
            404,
            "Conversation not found",
            "CONVERSATION_NOT_FOUND",
        );
    return dto;
}

export async function listMessages(
    conversationId: string,
    viewerId: string,
    query: MessagesQuery,
): Promise<MessagesPageDTO> {
    await assertParticipant(conversationId, viewerId);

    const { items, nextCursor } = await findMessagesPage({
        conversationId,
        ...query,
    });
    return {
        items: items.map((row) => toMessageDTO(row, viewerId)),
        nextCursor,
    };
}

export async function sendMessage(
    conversationId: string,
    viewerId: string,
    input: SendMessageInput,
): Promise<MessageDTO> {
    await assertParticipant(conversationId, viewerId);

    const recipients = await findOtherParticipants(conversationId, viewerId);
    const blockedIds = new Set(await findBlockedUserIds(viewerId));
    const allowed =
        recipients.length > 0 &&
        recipients.every(
            (r) => r.user.status === "ACTIVE" && !blockedIds.has(r.userId),
        );

    if (!allowed)
        throw new HttpError(
            403,
            "Messaging is not allowed",
            "MESSAGING_NOT_ALLOWED",
        );

    const message = await insertMessage({
        conversationId,
        senderId: viewerId,
        content: input.content,
    });

    // A válasz után fut, így a küldő nem várja meg a broadcastot.
    after(() =>
        publishMessageCreated({
            conversationId,
            messageId: message.id,
            senderId: viewerId,
            recipientIds: recipients.map((r) => r.userId),
        }),
    );

    return toMessageDTO(message, viewerId);
}

export async function markConversationRead(
    conversationId: string,
    viewerId: string,
): Promise<void> {
    await assertParticipant(conversationId, viewerId);

    const count = await markMessagesRead(conversationId, viewerId);
    if (count > 0) {
        after(() =>
            publishMessagesRead({ conversationId, readerId: viewerId }),
        );
    }
}
