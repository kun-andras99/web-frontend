"use client";

import {
    useQuery,
    useQueryClient,
    type InfiniteData,
} from "@tanstack/react-query";
import type { VisitorsPageDTO } from "../schemas/visitors.schema";
import { visitorKeys } from "./visitors.keys";
import { latestVisitQueryOptions } from "./visitors.queries";

type VisitorsInfiniteData = InfiniteData<VisitorsPageDTO, string | undefined>;

/**
 * @param loadedLatestAt a betöltött lista legfrissebb látogatásának ideje (null: üres lista)
 * @param enabled csak akkor ellenőrzünk, ha a lista már betöltődött
 */
export function useNewVisitors(
    loadedLatestAt: string | null,
    enabled: boolean,
) {
    const queryClient = useQueryClient();
    const { data } = useQuery({ ...latestVisitQueryOptions(), enabled });

    const serverLatest = data?.latestVisitedAt ?? null;

    // Az ISO-időbélyegek (toISOString) azonos formátumúak, ezért szövegként is helyesen hasonlíthatók.
    const hasNew =
        enabled &&
        serverLatest !== null &&
        (loadedLatestAt === null || serverLatest > loadedLatestAt);

    /** Visszaugrik az első oldalra, és újratölti. Így nem kér le újra minden addig görgetett oldalt. */
    async function showNew() {
        queryClient.setQueryData<VisitorsInfiniteData>(
            visitorKeys.list(),
            (current) =>
                current && {
                    pages: current.pages.slice(0, 1),
                    pageParams: current.pageParams.slice(0, 1),
                },
        );
        await queryClient.refetchQueries({ queryKey: visitorKeys.list() });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return { hasNew, showNew };
}
