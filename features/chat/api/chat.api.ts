import { emptyResponse, http } from "@/lib/http/http-client";
import {
    conversationDetailSchema,
    conversationRefSchema,
    findConversationResultSchema,
    messageSchema,
    messagesPageSchema,
    type SendMessageInput,
} from "../schemas/chat.schema";

const conversationPath = (id: string) =>
    `/api/conversations/${encodeURIComponent(id)}`;
const chatPath = (userId: string) => `/api/chat/${encodeURIComponent(userId)}`;

export function fetchConversation(
    conversationId: string,
    signal?: AbortSignal,
) {
    return http.get(conversationPath(conversationId), {
        schema: conversationDetailSchema,
        signal,
    });
}

export function fetchMessagesPage(
    conversationId: string,
    params: { cursor?: string; limit?: number } = {},
    signal?: AbortSignal,
) {
    return http.get(`${conversationPath(conversationId)}/messages`, {
        schema: messagesPageSchema,
        query: { ...params },
        signal,
    });
}

export function sendMessage(conversationId: string, input: SendMessageInput) {
    return http.post(`${conversationPath(conversationId)}/messages`, {
        schema: messageSchema,
        body: input,
    });
}

export function markConversationRead(conversationId: string) {
    return http.post(`${conversationPath(conversationId)}/read`, {
        schema: emptyResponse,
    });
}

export function findConversationWithUser(userId: string, signal?: AbortSignal) {
    return http.get(chatPath(userId), {
        schema: findConversationResultSchema,
        signal,
    });
}

export function openConversationWithUser(userId: string) {
    return http.post(chatPath(userId), { schema: conversationRefSchema });
}
