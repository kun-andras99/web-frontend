import VisitorsScreen from "@/features/visitors/components/VisitorsScreen";
import { visitorsInfiniteQueryOptions } from "@/features/visitors/hooks/visitors.queries";
import { VISITORS_DEFAULT_PAGE_SIZE } from "@/features/visitors/schemas/visitors.schema";
import { listVisitors } from "@/features/visitors/server/visitors.service";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { requireCurrentUser } from "@/features/auth/lib/session";

export const metadata: Metadata = {
    title: "Látogatók",
    robots: { index: false },
};

export default async function VisitorsPage() {
    const currentUser = await requireCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    const queryClient = getServerQueryClient();

    // ugyanaz a kulcs, mint a kliensen, de a szerver közvetlenül a service-t hívja
    await queryClient.prefetchInfiniteQuery({
        ...visitorsInfiniteQueryOptions(),
        queryFn: () =>
            listVisitors(currentUser.id, { limit: VISITORS_DEFAULT_PAGE_SIZE }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <VisitorsScreen />
        </HydrationBoundary>
    );
}
