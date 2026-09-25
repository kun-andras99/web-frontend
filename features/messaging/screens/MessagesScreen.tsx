"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import ConversationList from "@/features/chat/components/ConversationList";
import { useConversationsRealtime } from "@/features/chat/hooks/useConversationsRealtime";

export default function MessagesScreen() {
    useConversationsRealtime();

    return (
        <BottomPageWrapper>
            <ConversationList />
        </BottomPageWrapper>
    );
}
