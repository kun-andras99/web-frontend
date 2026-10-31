"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { messagesInfiniteQueryOptions } from "./chat.queries";

export function useConversationMessages(conversationId: string) {
    return useInfiniteQuery({
        ...messagesInfiniteQueryOptions(conversationId),
        // legrégebbi -> legújabb
        select: (data) => data.pages.flatMap((page) => page.items).reverse(),
    });
}
