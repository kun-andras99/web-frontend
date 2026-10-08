import { apiFetch } from "@/lib/http/auth-fetch";
export async function markConversationAsRead(
    conversationId: string,
): Promise<void> {
    const response = await apiFetch(
        `/api/conversations/${conversationId}/read`,
        {
            method: "POST",
            credentials: "include",
        },
    );

    const result = (await response.json()) as {
        message?: string;
    };

    if (!response.ok) {
        throw new Error(
            result.message ?? "Az üzenetek olvasottként jelölése sikertelen.",
        );
    }
}
