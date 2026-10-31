"use client";

import { conversationsInfiniteQueryOptions } from "@/features/messages/hooks/messages.queries";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useConversations() {
    return useInfiniteQuery(conversationsInfiniteQueryOptions());
}
