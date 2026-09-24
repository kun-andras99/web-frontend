"use client";

import { getConversations } from "@/features/chat/api/getConversations";
import { useQuery } from "@tanstack/react-query";

export const conversationKeys = {
    all: ["conversations"] as const,
    list: () => [...conversationKeys.all, "list"] as const,
};

export function useConversations() {
    return useQuery({
        queryKey: conversationKeys.list(),
        queryFn: getConversations,
        staleTime: 30 * 1000,
    });
}
