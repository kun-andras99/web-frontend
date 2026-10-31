import { requireCurrentUser } from "@/features/auth/lib/session";
import ChatScreen from "@/features/chat/components/ChatScreen";
import {
    conversationQueryOptions,
    messagesInfiniteQueryOptions,
} from "@/features/chat/hooks/chat.queries";
import { CHAT_DEFAULT_PAGE_SIZE } from "@/features/chat/schemas/chat.schema";
import {
    getConversation,
    listMessages,
} from "@/features/chat/server/chat.service";
import { HttpError } from "@/lib/api/route-handler";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Beszélgetés",
    robots: { index: false },
};

export default async function ChatPage({
    params,
}: {
    params: Promise<{ conversationId: string }>;
}) {
    const { conversationId } = await params;
    const user = await requireCurrentUser();
    const queryClient = getServerQueryClient();

    try {
        await Promise.all([
            // fetchQuery: a 404-nek itt hibaként kell kiesnie
            queryClient.fetchQuery({
                ...conversationQueryOptions(conversationId),
                queryFn: () => getConversation(conversationId, user.id),
            }),
            queryClient.prefetchInfiniteQuery({
                ...messagesInfiniteQueryOptions(conversationId),
                queryFn: () =>
                    listMessages(conversationId, user.id, {
                        limit: CHAT_DEFAULT_PAGE_SIZE,
                    }),
            }),
        ]);
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) notFound();
        throw error;
    }

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ChatScreen conversationId={conversationId} viewerId={user.id} />
        </HydrationBoundary>
    );
}
