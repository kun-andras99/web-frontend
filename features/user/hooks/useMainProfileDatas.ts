import { getMainProfileDatas } from "@/features/user/api/getMainProfileData";
import { useQuery } from "@tanstack/react-query";

export function useMainProfileDatas(userId?: string) {
    return useQuery({
        queryKey: ["user", userId],
        queryFn: () => getMainProfileDatas(userId!),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
    });
}
