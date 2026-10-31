"use client";

import { sendMatchAction } from "@/features/matching/api/matching.api";
import {
    matchCandidatesInfiniteQueryOptions,
    matchKeys,
} from "@/features/matching/hooks/matching.queries";
import {
    useInfiniteQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

export function useMatchCandidates() {
    return useInfiniteQuery(matchCandidatesInfiniteQueryOptions());
}

/**
 * A kártyát a hívó oldalon léptetjük tovább (optimistán), itt csak elküldjük az akciót.
 * A jelöltlistát siker esetén nem töltjük újra: az elbírált user a következő lekérdezésből kiesik.
 */
export function useMatchAction() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: sendMatchAction,
        onError: () =>
            queryClient.invalidateQueries({ queryKey: matchKeys.candidates() }),
    });
}
