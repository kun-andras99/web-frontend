// "use client";

// import { fetchUserGalleries } from "@/features/user/api/getUserGalleries";
// import { useQuery } from "@tanstack/react-query";

// export function useUserGalleries(userId: string) {
//     return useQuery({
//         queryKey: ["user", userId, "galleries"],

//         queryFn: () => fetchUserGalleries(userId),

//         enabled: Boolean(userId),

//         staleTime: 60 * 1000,
//     });
// }
