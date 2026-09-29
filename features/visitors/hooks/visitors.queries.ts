import {
    fetchLatestVisit,
    fetchVisitorsPage,
} from "@/features/visitors/api/visitors.api";
import { visitorKeys } from "@/features/visitors/hooks/visitors.keys";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const visitorsInfiniteQueryOptions = () =>
    infiniteQueryOptions({
        queryKey: visitorKeys.list(),
        queryFn: ({ pageParam, signal }) =>
            fetchVisitorsPage({ cursor: pageParam }, signal),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 10 * 1000,
        refetchInterval: 15 * 1000,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: true,
        maxPages: 5,
    });

export const latestVisitQueryOptions = () =>
    queryOptions({
        queryKey: visitorKeys.latest(),
        queryFn: ({ signal }) => fetchLatestVisit(signal),
        staleTime: 0,
        refetchInterval: 15 * 1000,
        refetchIntervalInBackground: false, // háttérben lévő fülnél áll
        refetchOnWindowFocus: true, // fülre visszatéréskor azonnal ellenőriz
    });
