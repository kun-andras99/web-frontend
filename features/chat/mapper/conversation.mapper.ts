import {
    ConversationDTO,
    MessageDTO,
} from "@/features/chat/repository/chatDTO";

interface ConversationRepositoryResult {
    id: string;
    updatedAt: Date;

    user: {
        id: string;
        username: string;
        userData: {
            nickname: string | null;
            avatarUrl: string | null;
        } | null;
    };

    lastMessage: {
        id: string;
        conversationId: string;
        senderId: string;
        type: MessageDTO["type"];
        content: string | null;
        sentAt: Date;
        revokedAt: Date | null;
    } | null;

    unreadCount: number;
}

export function toConversationDTO(
    conversation: ConversationRepositoryResult,
): ConversationDTO {
    return {
        id: conversation.id,

        user: {
            id: conversation.user.id,
            username: conversation.user.username,
            nickname: conversation.user.userData?.nickname ?? null,
            avatarUrl: conversation.user.userData?.avatarUrl ?? null,
        },

        lastMessage: conversation.lastMessage
            ? {
                  id: conversation.lastMessage.id,
                  conversationId: conversation.lastMessage.conversationId,
                  senderId: conversation.lastMessage.senderId,
                  type: conversation.lastMessage.type,
                  content: conversation.lastMessage.content,
                  sentAt: conversation.lastMessage.sentAt.toISOString(),
                  revokedAt:
                      conversation.lastMessage.revokedAt?.toISOString() ?? null,
                  isRead: false,
              }
            : null,

        unreadCount: conversation.unreadCount,

        updatedAt: conversation.updatedAt.toISOString(),
    };
}
