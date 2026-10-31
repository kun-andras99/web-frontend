"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { markConversationRead } from "../api/chat.api";
import type { MessageDTO } from "../schemas/chat.schema";
import { chatKeys } from "./chat.keys";

export function useMarkRead(conversationId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => markConversationRead(conversationId),
        // a visszaadott promise miatt a mutation addig "pending", amíg az adat frissül
        onSuccess: () =>
            Promise.all([
                queryClient.invalidateQueries({
                    queryKey: chatKeys.messages(conversationId),
                }),
                queryClient.invalidateQueries({
                    queryKey: chatKeys.conversations(),
                }),
            ]),
    });
}

/** Olvasottnak jelöli a másik fél üzeneteit, amíg a fül látható. Hiba után nem próbálkozik újra (hurok ellen). */
export function useAutoMarkRead(
    conversationId: string,
    messages: readonly MessageDTO[],
) {
    const { mutate, isPending, isError } = useMarkRead(conversationId);
    const hasUnread = messages.some(
        (message) => !message.isMine && !message.isRead,
    );

    useEffect(() => {
        if (!hasUnread || isPending || isError) return;

        const run = () => {
            if (document.visibilityState === "visible") mutate();
        };
        const timer = window.setTimeout(run, 300);
        document.addEventListener("visibilitychange", run);

        return () => {
            window.clearTimeout(timer);
            document.removeEventListener("visibilitychange", run);
        };
    }, [hasUnread, isPending, isError, mutate]);
}
