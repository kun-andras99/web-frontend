"use client";

import { useEffect } from "react";

import ChatHeader from "@/features/chat/components/ChatHeader";
import MessageComposer from "@/features/chat/components/MessageComposer";
import MessageList from "@/features/chat/components/MessageList";
import { useChatRealtime } from "@/features/chat/hooks/useChatRealtime";
import { useMarkConversationAsRead } from "@/features/chat/hooks/useMarkConversationAsRead";
import { ChatUserDTO } from "@/features/chat/repository/chatDTO";

interface ChatScreenProps {
    conversationId: string;
    currentUserId: string;
    user: ChatUserDTO;
}

export default function ChatScreen({
    conversationId,
    currentUserId,
    user,
}: ChatScreenProps) {
    useChatRealtime(conversationId, currentUserId);

    const markAsRead = useMarkConversationAsRead();

    useEffect(() => {
        void markAsRead.mutateAsync(conversationId);
    }, [conversationId]);

    return (
        <div className="flex h-full flex-col bg-[#101011] text-white">
            <ChatHeader user={user} />

            <MessageList
                conversationId={conversationId}
                currentUserId={currentUserId}
            />

            <MessageComposer
                conversationId={conversationId}
                currentUserId={currentUserId}
            />
        </div>
    );
}
