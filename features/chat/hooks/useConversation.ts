"use client";

import { useQuery } from "@tanstack/react-query";
import { conversationQueryOptions } from "./chat.queries";

export function useConversation(conversationId: string) {
    return useQuery(conversationQueryOptions(conversationId));
}
