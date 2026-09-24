"use client";

import { getConversation } from "@/features/chat/api/getConversation";
import { useInfiniteQuery } from "@tanstack/react-query";

export const chatKeys = {
    all: ["chat"] as const,
    conversation: (conversationId: string) =>
        [...chatKeys.all, "conversation", conversationId] as const,
};

export function useConversation(conversationId: string) {
    return useInfiniteQuery({
        queryKey: chatKeys.conversation(conversationId),

        queryFn: ({ pageParam }) =>
            getConversation({
                conversationId,
                cursor: pageParam,
            }),

        initialPageParam: undefined as string | undefined,

        getNextPageParam: (lastPage) =>
            lastPage.hasNextPage ? lastPage.nextCursor : undefined,

        staleTime: 30 * 1000,
    });
}
