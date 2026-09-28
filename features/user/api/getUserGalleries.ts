// import { UserGalleries } from "@/features/user/types/user";

// interface GetUserGalleriesResponse {
//     success: boolean;
//     data?: UserGalleries;
//     message?: string;
// }

// export async function fetchUserGalleries(
//     userId: string,
// ): Promise<UserGalleries> {
//     const response = await fetch(`/api/profile/${userId}/albums`, {
//         method: "GET",
//         credentials: "include",
//         cache: "no-store",
//     });

//     const result = (await response.json()) as GetUserGalleriesResponse;

//     if (!response.ok || !result.success || !result.data) {
//         throw new Error(result.message ?? "A galériák lekérése sikertelen.");
//     }

//     return result.data;
// }
