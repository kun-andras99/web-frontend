import { useQuery } from "@tanstack/react-query";

import { getCityStats } from "@/features/city/api/getCity";

export const cityKeys = {
    all: ["city"] as const,

    stats: () => [...cityKeys.all, "stats"] as const,
};

export function useCityStats() {
    return useQuery({
        queryKey: cityKeys.stats(),
        queryFn: getCityStats,
        staleTime: 5 * 60 * 1000,
    });
}
