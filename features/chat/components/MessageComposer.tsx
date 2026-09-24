"use client";

import { Send } from "lucide-react";
import { FormEvent, KeyboardEvent, useState } from "react";

import { useSendMessage } from "@/features/chat/hooks/useSendMessage";

interface MessageComposerProps {
    conversationId: string;
    currentUserId: string;
}

export default function MessageComposer({
    conversationId,
    currentUserId,
}: MessageComposerProps) {
    const [content, setContent] = useState("");

    const sendMessage = useSendMessage(conversationId, currentUserId);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        /*
         * Ha már folyamatban van egy küldés,
         * ne lehessen újra elküldeni.
         */
        if (sendMessage.isPending) {
            return;
        }

        const value = content.trim();

        /*
         * Üres üzenetet nem küldünk.
         */
        if (!value) {
            return;
        }

        sendMessage.mutate(value, {
            onSuccess: () => {
                setContent("");
            },
        });
    }

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
        /*
         * Shift + Enter:
         * új sor.
         */
        if (event.key === "Enter" && event.shiftKey) {
            return;
        }

        /*
         * Enter:
         * üzenet küldése.
         */
        if (event.key === "Enter") {
            event.preventDefault();

            /*
             * Ha éppen küldés alatt van,
             * az Enter sem indíthat új küldést.
             */
            if (sendMessage.isPending) {
                return;
            }

            event.currentTarget.form?.requestSubmit();
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border-t border-white/5 bg-[#101011]/95 p-3 backdrop-blur-xl sm:p-4">
            <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-3xl border border-white/10 bg-white/[0.04] p-2 transition focus-within:border-[#1eb1eb]/40">
                <textarea
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Írj egy üzenetet..."
                    rows={1}
                    maxLength={5000}
                    disabled={sendMessage.isPending}
                    className="max-h-32 min-h-11 flex-1 resize-none bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/25 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                    type="submit"
                    disabled={!content.trim() || sendMessage.isPending}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1eb1eb] text-white transition hover:scale-105 hover:bg-[#159fd6] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
                    aria-label="Üzenet küldése">
                    {sendMessage.isPending ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                        <Send size={17} />
                    )}
                </button>
            </div>
        </form>
    );
}
