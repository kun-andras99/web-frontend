"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import { ApiError } from "@/lib/http/errors";
import Link from "next/link";
import { useState } from "react";
import { useChatRealtime } from "../hooks/useChatRealtime";
import { useConversation } from "../hooks/useConversation";
import { useAutoMarkRead } from "../hooks/useMarkRead";
import { useSendMessage } from "../hooks/useSendMessage";
import { getChatErrorMessage } from "../utils/chat-errors";
import { MESSAGES_HREF } from "../utils/routes";
import ChatHeader from "./ChatHeader";
import MessageComposer from "./MessageComposer";
// import MessageList from "./MessageList";
import { useConversationMessages } from "@/features/chat/hooks/useConversationMessage";

const NO_MESSAGES: never[] = [];

export default function ChatScreen({
    conversationId,
    viewerId,
}: {
    conversationId: string;
    viewerId: string;
}) {
    const conversation = useConversation(conversationId);
    const messagesQuery = useConversationMessages(conversationId);
    const send = useSendMessage(conversationId, viewerId);
    const [draft, setDraft] = useState("");

    const messages = messagesQuery.data ?? NO_MESSAGES;

    useChatRealtime(conversationId);
    useAutoMarkRead(conversationId, messages);

    function handleSend(content: string) {
        setDraft("");
        send.mutate(content, {
            // sikertelen küldésnél a szöveg visszakerül a mezőbe (ha közben nem írt mást)
            onError: () => setDraft((current) => current || content),
        });
    }

    if (conversation.isPending) {
        return (
            <BottomPageWrapper>
                <p className="py-6 text-center text-sm text-white/40">
                    Betöltés...
                </p>
            </BottomPageWrapper>
        );
    }

    if (conversation.isError) {
        const notFound =
            conversation.error instanceof ApiError &&
            conversation.error.isNotFound;

        return (
            <BottomPageWrapper>
                <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 px-5 text-center">
                    <p role="alert" className="text-sm text-white/75">
                        {notFound
                            ? "A beszélgetés nem található."
                            : getChatErrorMessage(conversation.error)}
                    </p>
                    {notFound ? (
                        <Link
                            href={MESSAGES_HREF}
                            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                            Vissza az üzenetekhez
                        </Link>
                    ) : (
                        <button
                            type="button"
                            onClick={() => void conversation.refetch()}
                            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                            Újrapróbálás
                        </button>
                    )}
                </div>
            </BottomPageWrapper>
        );
    }

    return (
        <BottomPageWrapper>
            <div className="flex h-[calc(100dvh-var(--app-bottom-nav,0px))] flex-col">
                <ChatHeader participant={conversation.data.participant} />

                {messagesQuery.isError && messages.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                        <p role="alert" className="text-sm text-white/75">
                            {getChatErrorMessage(messagesQuery.error)}
                        </p>
                        <button
                            type="button"
                            onClick={() => void messagesQuery.refetch()}
                            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                            Újrapróbálás
                        </button>
                    </div>
                ) : (
                    // <MessageList
                    //     messages={messages}
                    //     hasOlder={Boolean(messagesQuery.hasNextPage)}
                    //     isLoadingOlder={messagesQuery.isFetchingNextPage}
                    //     onLoadOlder={() => void messagesQuery.fetchNextPage()}
                    // />
                    <span>üzenetek</span>
                )}

                <MessageComposer
                    draft={draft}
                    onDraftChange={setDraft}
                    onSend={handleSend}
                    error={
                        send.isError ? getChatErrorMessage(send.error) : null
                    }
                />
            </div>
        </BottomPageWrapper>
    );
}
