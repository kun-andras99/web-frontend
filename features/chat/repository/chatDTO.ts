export interface ChatUserDTO {
    id: string;
    username: string;
    nickname: string | null;
    avatarUrl: string | null;
}

export interface ConversationDTO {
    id: string;
    user: ChatUserDTO;
    lastMessage: MessageDTO | null;
    unreadCount: number;
    updatedAt: string;
}

export interface MessageDTO {
    id: string;
    conversationId: string;
    senderId: string;
    type: "TEXT" | "IMAGE" | "SYSTEM";
    content: string | null;
    sentAt: string;
    revokedAt: string | null;
    isRead: boolean;
}

export interface ConversationMessagesDTO {
    conversationId: string;
    user: ChatUserDTO;
    messages: MessageDTO[];
    nextCursor: string | null;
    hasNextPage: boolean;
}

export interface SendMessageInput {
    content: string;
}
