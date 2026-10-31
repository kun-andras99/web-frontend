"use client";

import { useRealtimeBroadcast } from "@/lib/hooks/useRealtimeBroadcast";
import {
    conversationChannelName,
    REALTIME_EVENTS,
} from "@/lib/realtime/channel-names";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { chatKeys } from "./chat.keys";

export function useChatRealtime(conversationId: string) {
    const queryClient = useQueryClient();

    const refresh = useCallback(() => {
        void queryClient.invalidateQueries({
            queryKey: chatKeys.messages(conversationId),
        });
        void queryClient.invalidateQueries({
            queryKey: chatKeys.conversations(),
        });
    }, [queryClient, conversationId]);

    useRealtimeBroadcast(
        conversationChannelName(conversationId),
        {
            [REALTIME_EVENTS.messageNew]: refresh,
            [REALTIME_EVENTS.messagesRead]: refresh,
        },
        refresh,
    );
}
