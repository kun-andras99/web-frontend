import { conversationsInfiniteQueryOptions } from "@/features/messages/hooks/messages.queries";
import MessagesScreen from "@/features/messages/components/MessagesScreen";
import { CONVERSATIONS_DEFAULT_PAGE_SIZE } from "@/features/messages/schemas/messages.schema";
import { listConversations } from "@/features/messages/server/messages.service";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { requireCurrentUser } from "@/features/auth/lib/session";

export const metadata: Metadata = {
    title: "Üzenetek",
    robots: { index: false },
};

export default async function MessagesPage() {
    const user = await requireCurrentUser();
    const queryClient = getServerQueryClient();

    await queryClient.prefetchInfiniteQuery({
        ...conversationsInfiniteQueryOptions(),
        queryFn: () =>
            listConversations(user.id, {
                limit: CONVERSATIONS_DEFAULT_PAGE_SIZE,
            }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <MessagesScreen />
        </HydrationBoundary>
    );
}
