import { getUserHeaderDatas } from "@/features/user/api/getUserHeaderData";
import { useQuery } from "@tanstack/react-query";

export function useUserHeaderDatas(userId?: string) {
    return useQuery({
        queryKey: ["user", userId],
        queryFn: () => getUserHeaderDatas(userId!),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
    });
}
