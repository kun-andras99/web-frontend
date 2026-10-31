"use client";

import { useRouter } from "next/navigation";
import { useOpenConversation } from "../hooks/useOpenConversation";
import { getChatErrorMessage } from "../utils/chat-errors";
import { conversationHref } from "../utils/routes";

export default function StartChatButton({
    userId,
    className,
}: {
    userId: string;
    className?: string;
}) {
    const router = useRouter();
    const open = useOpenConversation();

    return (
        <>
            <button
                type="button"
                disabled={open.isPending}
                className={
                    className ??
                    "rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
                }
                onClick={() =>
                    open.mutate(userId, {
                        onSuccess: ({ conversationId }) =>
                            router.push(conversationHref(conversationId)),
                    })
                }>
                {open.isPending ? "Megnyitás..." : "Üzenet küldése"}
            </button>
            {open.isError && (
                <p role="alert" className="mt-2 text-xs text-red-400">
                    {getChatErrorMessage(open.error)}
                </p>
            )}
        </>
    );
}
