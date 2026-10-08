import { apiFetch } from "@/lib/http/auth-fetch";
import { ConversationMessagesDTO } from "@/features/chat/repository/chatDTO";

interface GetConversationParams {
    conversationId: string;
    cursor?: string;
    limit?: number;
}

export async function getConversation({
    conversationId,
    cursor,
    limit = 50,
}: GetConversationParams): Promise<ConversationMessagesDTO> {
    const searchParams = new URLSearchParams();

    searchParams.set("limit", String(limit));

    if (cursor) {
        searchParams.set("cursor", cursor);
    }

    const response = await apiFetch(
        `/api/conversations/${conversationId}/messages?${searchParams}`,
        {
            credentials: "include",
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message ?? "Az üzenetek betöltése sikertelen.");
    }

    return result;
}
