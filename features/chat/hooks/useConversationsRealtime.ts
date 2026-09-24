"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { conversationKeys } from "@/features/chat/hooks/useConversations";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface NewMessageEvent {
    messageId: string;
    conversationId: string;
    senderId: string;
}

export function useConversationsRealtime() {
    const queryClient = useQueryClient();

    useEffect(() => {
        const supabase = getSupabaseBrowserClient();

        const channel = supabase
            .channel("messages")
            .on(
                "broadcast",
                {
                    event: "message:new",
                },
                ({ payload }) => {
                    const event = payload as NewMessageEvent;

                    if (!event.conversationId) {
                        return;
                    }

                    console.log("MESSAGES REALTIME:", event);

                    void queryClient.invalidateQueries({
                        queryKey: conversationKeys.list(),
                    });
                },
            )
            .subscribe((status) => {
                console.log("Messages realtime status:", status);
            });

        return () => {
            void supabase.removeChannel(channel);
        };
    }, [queryClient]);
}
