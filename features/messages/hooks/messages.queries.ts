import { chatKeys } from "@/features/chat/hooks/chat.keys";
import {
    fetchConversationsPage,
    fetchInboxChannel,
} from "@/features/messages/api/messages.api";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const conversationsInfiniteQueryOptions = () =>
    infiniteQueryOptions({
        queryKey: chatKeys.conversations(),
        queryFn: ({ pageParam, signal }) =>
            fetchConversationsPage({ cursor: pageParam }, signal),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 30 * 1000,
    });

export const inboxChannelQueryOptions = () =>
    queryOptions({
        queryKey: chatKeys.inboxChannel(),
        queryFn: ({ signal }) => fetchInboxChannel(signal),
        staleTime: Infinity, // a csatorna neve nem változik
    });
