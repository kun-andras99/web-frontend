"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import { getChatErrorMessage } from "@/features/chat/utils/chat-errors";
import ConversationRow from "@/features/messages/components/ConversationRow";
import MessagesEmpty from "@/features/messages/components/MessagesEmpty";
import { useConversations } from "@/features/messages/hooks/useConversations";
import { useConversationsRealtime } from "@/features/messages/hooks/useConversationsRealtime";
import { useLoadMoreOnVisible } from "@/lib/hooks/useLoadMoreOnVisible";
import Image from "next/image";
import { useMemo } from "react";

export default function MessagesScreen() {
    const {
        data,
        isPending,
        isError,
        error,
        refetch,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useConversations();

    useConversationsRealtime();

    const conversations = useMemo(
        () => data?.pages.flatMap((page) => page.items) ?? [],
        [data],
    );

    const sentinelRef = useLoadMoreOnVisible(
        () => void fetchNextPage(),
        Boolean(hasNextPage) && !isFetchingNextPage,
    );

    if (isPending) {
        return (
            <BottomPageWrapper>
                <p className="py-6 text-center text-sm text-white/40">
                    Betöltés...
                </p>
            </BottomPageWrapper>
        );
    }

    if (isError) {
        return (
            <BottomPageWrapper>
                <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 px-5 text-center">
                    <p role="alert" className="text-sm text-white/75">
                        {getChatErrorMessage(error)}
                    </p>
                    <button
                        type="button"
                        onClick={() => void refetch()}
                        className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                        Újrapróbálás
                    </button>
                </div>
            </BottomPageWrapper>
        );
    }

    return (
        <BottomPageWrapper>
            {conversations.length === 0 ? (
                <MessagesEmpty />
            ) : (
                <>
                    <div className="love-ai-icon">
                        <Image
                            src="/assets/images/ai/chat-1.png"
                            alt="Love AI Chat"
                            width={50}
                            height={50}
                        />
                    </div>

                    <ul className="divide-y divide-white/5">
                        {conversations.map((conversation) => (
                            <ConversationRow
                                key={conversation.id}
                                conversation={conversation}
                            />
                        ))}
                    </ul>

                    <div ref={sentinelRef} aria-hidden />

                    {isFetchingNextPage && (
                        <p className="py-4 text-center text-xs text-white/40">
                            Több beszélgetés betöltése...
                        </p>
                    )}
                </>
            )}
        </BottomPageWrapper>
    );
}
