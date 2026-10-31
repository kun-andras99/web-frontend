import { z } from "zod";

export const CHAT_DEFAULT_PAGE_SIZE = 30;
export const CHAT_MAX_PAGE_SIZE = 100;
export const MESSAGE_MAX_LENGTH = 5000;

export const participantSchema = z.object({
    userId: z.string(),
    nickname: z.string().nullable(),
    avatarUrl: z.string().nullable(),
});

export const messageSchema = z.object({
    id: z.string(),
    conversationId: z.string(),
    senderId: z.string(),
    type: z.string(),
    /** visszavont üzenetnél null */
    content: z.string().nullable(),
    sentAt: z.string(),
    revokedAt: z.string().nullable(),
    isMine: z.boolean(),
    /** saját üzenetnél: elolvasta-e a másik fél; másiknál: elolvastam-e én */
    isRead: z.boolean(),
});

export const messagesPageSchema = z.object({
    items: z.array(messageSchema),
    nextCursor: z.string().nullable(),
});

export const conversationDetailSchema = z.object({
    id: z.string(),
    participant: participantSchema,
});

export const conversationRefSchema = z.object({ conversationId: z.string() });
export const findConversationResultSchema = z.object({
    conversationId: z.string().nullable(),
});

// ---- request sémák ----

export const messagesQuerySchema = z.object({
    cursor: z.string().min(1).max(200).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(CHAT_MAX_PAGE_SIZE)
        .default(CHAT_DEFAULT_PAGE_SIZE),
});

export const sendMessageInputSchema = z.object({
    content: z.string().trim().min(1).max(MESSAGE_MAX_LENGTH),
});

export type ParticipantDTO = z.infer<typeof participantSchema>;
export type MessageDTO = z.infer<typeof messageSchema>;
export type MessagesPageDTO = z.infer<typeof messagesPageSchema>;
export type ConversationDetailDTO = z.infer<typeof conversationDetailSchema>;
export type MessagesQuery = z.output<typeof messagesQuerySchema>;
export type SendMessageInput = z.output<typeof sendMessageInputSchema>;
