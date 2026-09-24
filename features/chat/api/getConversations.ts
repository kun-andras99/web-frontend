import { ConversationDTO } from "@/features/chat/repository/chatDTO";

interface GetConversationsResponse {
    conversations: ConversationDTO[];
}

export async function getConversations(): Promise<ConversationDTO[]> {
    const response = await fetch("/api/conversations", {
        method: "GET",
        credentials: "include",
    });

    const result = (await response.json()) as GetConversationsResponse & {
        message?: string;
    };

    if (!response.ok) {
        throw new Error(
            result.message ?? "A beszélgetések betöltése sikertelen.",
        );
    }

    return result.conversations;
}
