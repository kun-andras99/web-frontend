import { fetchMatchCandidates } from "@/features/matching/api/matching.api";
import { MATCH_CANDIDATES_DEFAULT_PAGE_SIZE } from "@/features/matching/schemas/matching.schema";
import { infiniteQueryOptions } from "@tanstack/react-query";

export const matchKeys = {
    all: ["matching"] as const,
    candidates: () => [...matchKeys.all, "candidates"] as const,
};

export const matchCandidatesInfiniteQueryOptions = () =>
    infiniteQueryOptions({
        queryKey: matchKeys.candidates(),
        queryFn: ({ pageParam, signal }) =>
            fetchMatchCandidates(
                {
                    cursor: pageParam,
                    limit: MATCH_CANDIDATES_DEFAULT_PAGE_SIZE,
                },
                signal,
            ),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 60 * 1000,
    });
