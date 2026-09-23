import { getUser } from "@/features/user/api/getUser";
import { useQuery } from "@tanstack/react-query";


export function useUser(userId?: string) {
    return useQuery({
        queryKey: ["user", userId],
        queryFn: () => getUser(userId!),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
    });
}
