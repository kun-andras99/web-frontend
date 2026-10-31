"use client";

import { inboxChannelQueryOptions } from "@/features/messages/hooks/messages.queries";
import { useQuery } from "@tanstack/react-query";

export function useInboxChannel() {
    return useQuery(inboxChannelQueryOptions());
}
