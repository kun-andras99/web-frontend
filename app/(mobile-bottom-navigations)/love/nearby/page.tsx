import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import NearbyLocationRequired from "@/features/nearby-users/components/NearbyLocationRequired";
import NearbyScreen from "@/features/nearby-users/components/NearbyUsersScreen";
import { nearbyInfiniteQueryOptions } from "@/features/nearby-users/hooks/nearby.queries";
import { NEARBY_DEFAULT_PAGE_SIZE } from "@/features/nearby-users/schemas/nearby.schema";
import {
    getNearbyAvailability,
    listNearbyUsers,
} from "@/features/nearby-users/server/nearby.service";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { requireCurrentUser } from "@/features/auth/lib/session";

export const metadata: Metadata = {
    title: "Közelben",
    robots: { index: false },
};

export default async function ExploreNearbyPage() {
    const currentUser = await requireCurrentUser();
    if (!currentUser) redirect("/sign-in");

    if (!(await getNearbyAvailability(currentUser.id))) {
        return (
            <BottomPageWrapper>
                <NearbyLocationRequired />
            </BottomPageWrapper>
        );
    }

    const queryClient = getServerQueryClient();

    // ugyanaz a kulcs, mint a kliensen, de a szerver közvetlenül a service-t hívja
    await queryClient.prefetchInfiniteQuery({
        ...nearbyInfiniteQueryOptions(),
        queryFn: () =>
            listNearbyUsers(currentUser.id, {
                limit: NEARBY_DEFAULT_PAGE_SIZE,
            }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NearbyScreen />
        </HydrationBoundary>
    );
}
