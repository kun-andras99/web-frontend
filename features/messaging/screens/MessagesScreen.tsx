"use client";

import ConversationList from "@/features/chat/components/ConversationList";
import { useConversationsRealtime } from "@/features/chat/hooks/useConversationsRealtime";

export default function MessagesScreen() {
    useConversationsRealtime();

    return (
        <main className="min-h-full bg-[#101011] text-white">
            <div className="mx-auto w-full max-w-3xl">
                <ConversationList />
            </div>
        </main>
    );
}
