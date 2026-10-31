"use client";

import { chatKeys } from "@/features/chat/hooks/chat.keys";
import { useInboxChannel } from "@/features/messages/hooks/useInboxChannel";
import { useRealtimeBroadcast } from "@/lib/hooks/useRealtimeBroadcast";
import { REALTIME_EVENTS } from "@/lib/realtime/channel-names";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export function useConversationsRealtime() {
    const queryClient = useQueryClient();
    const { data } = useInboxChannel();

    const refresh = useCallback(() => {
        void queryClient.invalidateQueries({
            queryKey: chatKeys.conversations(),
        });
    }, [queryClient]);

    useRealtimeBroadcast(
        data?.channel ?? null,
        { [REALTIME_EVENTS.messageNew]: refresh },
        refresh,
    );
}
