import {
    conversationsPageSchema,
    inboxChannelSchema,
} from "@/features/messages/schemas/messages.schema";
import { http } from "@/lib/http/http-client";

export function fetchConversationsPage(
    params: { cursor?: string; limit?: number } = {},
    signal?: AbortSignal,
) {
    return http.get("/api/conversations", {
        schema: conversationsPageSchema,
        query: { ...params },
        signal,
    });
}

export function fetchInboxChannel(signal?: AbortSignal) {
    return http.get("/api/realtime/inbox", {
        schema: inboxChannelSchema,
        signal,
    });
}
