import { MessageDTO } from "@/features/chat/repository/chatDTO";
import { getConversationMessages } from "@/features/chat/repository/message";

export function toMessageDTO(
    message: Awaited<ReturnType<typeof getConversationMessages>>[number],
): MessageDTO {
    return {
        id: message.id,
        conversationId: message.conversationId,
        senderId: message.senderId,
        type: message.type,
        content: message.content,
        sentAt: message.sentAt.toISOString(),
        revokedAt: message.revokedAt?.toISOString() ?? null,
        isRead: message.reads.length > 0,
    };
}
