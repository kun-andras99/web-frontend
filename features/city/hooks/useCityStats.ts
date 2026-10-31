import { fetchCityStats } from "@/features/city/api/city.api";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const cityKeys = {
    all: ["city"] as const,

    stats: () => [...cityKeys.all, "stats"] as const,
};

export const cityStatsQueryOptions = () =>
    queryOptions({
        queryKey: cityKeys.stats(),
        queryFn: ({ signal }) => fetchCityStats(signal),
        staleTime: 5 * 60 * 1000,
    });

export function useCityStats() {
    return useQuery(cityStatsQueryOptions());
}
