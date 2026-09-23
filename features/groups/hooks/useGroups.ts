import { useQuery } from "@tanstack/react-query";

import { getGroups } from "@/features/groups/api/getGroups";

export const groupKeys = {
    all: ["groups"] as const,
    list: () => [...groupKeys.all, "list"] as const,
};

export function useGroups() {
    return useQuery({
        queryKey: groupKeys.list(),
        queryFn: getGroups,
        staleTime: 5 * 60 * 1000,
    });
}
