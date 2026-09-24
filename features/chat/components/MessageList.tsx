"use client";

import { useEffect, useMemo, useRef } from "react";

import { useConversation } from "@/features/chat/hooks/useConversation";
import MessageBubble from "./MessageBubble";

interface MessageListProps {
    conversationId: string;
    currentUserId: string;
}

export default function MessageList({
    conversationId,
    currentUserId,
}: MessageListProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useConversation(conversationId);

    const messages = useMemo(() => {
        return data?.pages.flatMap((page) => page.messages) ?? [];
    }, [data]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages.length]);

    if (isLoading) {
        return (
            <div className="flex flex-1 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#1eb1eb]" />
            </div>
        );
    }

    return (
        <div className="flex flex-1 flex-col overflow-y-auto px-4">
            {hasNextPage && (
                <button
                    type="button"
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className="mx-auto mb-6 rounded-full bg-white/5 px-4 py-2 text-xs text-white/50 transition hover:bg-white/10 hover:text-white">
                    {isFetchingNextPage ? "Betöltés..." : "Korábbi üzenetek"}
                </button>
            )}

            <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        message={message}
                        isMine={message.senderId === currentUserId}
                    />
                ))}

                <div ref={bottomRef} />
            </div>
        </div>
    );
}
