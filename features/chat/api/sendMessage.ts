import { apiFetch } from "@/lib/http/auth-fetch";
import {
    MessageDTO,
    SendMessageInput,
} from "@/features/chat/repository/chatDTO";

interface SendMessageResponse {
    message: MessageDTO;
}

export async function sendMessage(
    conversationId: string,
    data: SendMessageInput,
): Promise<MessageDTO> {
    const response = await apiFetch(
        `/api/conversations/${conversationId}/messages`,
        {
            method: "POST",

            credentials: "include",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(data),
        },
    );

    const result = (await response.json()) as
        SendMessageResponse | { message: string };

    if (!response.ok) {
        const errorMessage =
            typeof result === "object" &&
            result !== null &&
            "message" in result &&
            typeof result.message === "string"
                ? result.message
                : "Az üzenet elküldése sikertelen.";

        throw new Error(errorMessage);
    }

    return (result as SendMessageResponse).message;
}
