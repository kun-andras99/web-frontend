"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { chatKeys } from "@/features/chat/hooks/useConversation";
import { conversationKeys } from "@/features/chat/hooks/useConversations";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface NewMessageEvent {
    messageId: string;
    conversationId: string;
    senderId: string;
}

export function useChatRealtime(conversationId: string, currentUserId: string) {
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!conversationId || !currentUserId) {
            return;
        }

        const supabase = getSupabaseBrowserClient();

        const channel = supabase
            .channel(`conversation:${conversationId}`)
            .on(
                "broadcast",
                {
                    event: "message:new",
                },
                ({ payload }) => {
                    const event = payload as NewMessageEvent;

                    if (event.conversationId !== conversationId) {
                        return;
                    }

                    // A saját üzenetünket már az optimistic
                    // update + mutation kezeli.
                    if (event.senderId === currentUserId) {
                        return;
                    }

                    void queryClient.invalidateQueries({
                        queryKey: chatKeys.conversation(conversationId),
                    });

                    void queryClient.invalidateQueries({
                        queryKey: conversationKeys.list(),
                    });
                },
            )
            .subscribe();

        return () => {
            void supabase.removeChannel(channel);
        };
    }, [conversationId, currentUserId, queryClient]);
}
