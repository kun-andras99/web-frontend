import { fetchNearbyPage } from "@/features/nearby-users/api/nearby.api";
import { nearbyKeys } from "@/features/nearby-users/hooks/nearby.keys";
import { infiniteQueryOptions } from "@tanstack/react-query";

export const nearbyInfiniteQueryOptions = () =>
    infiniteQueryOptions({
        queryKey: nearbyKeys.list(),
        queryFn: ({ pageParam, signal }) =>
            fetchNearbyPage({ cursor: pageParam }, signal),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 60 * 1000,
    });
