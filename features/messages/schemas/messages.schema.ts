import { participantSchema } from "@/features/chat/schemas/chat.schema";
import { z } from "zod";

export const CONVERSATIONS_DEFAULT_PAGE_SIZE = 30;
export const CONVERSATIONS_MAX_PAGE_SIZE = 50;

export const lastMessageSchema = z.object({
    senderId: z.string(),
    type: z.string(),
    /** rövidített előnézet; visszavont üzenetnél null */
    content: z.string().nullable(),
    sentAt: z.string(),
    revokedAt: z.string().nullable(),
    isMine: z.boolean(),
});

export const conversationItemSchema = z.object({
    id: z.string(),
    updatedAt: z.string(),
    participant: participantSchema,
    lastMessage: lastMessageSchema.nullable(),
    unreadCount: z.number().int().nonnegative(),
});

export const conversationsPageSchema = z.object({
    items: z.array(conversationItemSchema),
    nextCursor: z.string().nullable(),
});

export const inboxChannelSchema = z.object({ channel: z.string() });

export const conversationsQuerySchema = z.object({
    cursor: z.string().min(1).max(200).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(CONVERSATIONS_MAX_PAGE_SIZE)
        .default(CONVERSATIONS_DEFAULT_PAGE_SIZE),
});

export type ConversationItemDTO = z.infer<typeof conversationItemSchema>;
export type ConversationsPageDTO = z.infer<typeof conversationsPageSchema>;
export type ConversationsQuery = z.output<typeof conversationsQuerySchema>;
