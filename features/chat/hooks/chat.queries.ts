import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { fetchConversation, fetchMessagesPage } from "../api/chat.api";
import { chatKeys } from "./chat.keys";

export const conversationQueryOptions = (conversationId: string) =>
    queryOptions({
        queryKey: chatKeys.conversation(conversationId),
        queryFn: ({ signal }) => fetchConversation(conversationId, signal),
        staleTime: 60 * 1000,
    });

export const messagesInfiniteQueryOptions = (conversationId: string) =>
    infiniteQueryOptions({
        queryKey: chatKeys.messages(conversationId),
        queryFn: ({ pageParam, signal }) =>
            fetchMessagesPage(conversationId, { cursor: pageParam }, signal),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 30 * 1000,
    });
