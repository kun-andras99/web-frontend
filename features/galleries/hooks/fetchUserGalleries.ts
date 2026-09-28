// import { UserGalleries } from "@/features/user/types/user";

// interface GetUserGalleriesResponse {
//     success: boolean;
//     data: UserGalleries;
//     message?: string;
// }

// export async function fetchUserGalleries(
//     userId: string,
// ): Promise<UserGalleries> {
//     const response = await fetch(`/api/profile/${userId}/albums`);

//     const result = (await response.json()) as GetUserGalleriesResponse;

//     if (!response.ok || !result.success) {
//         throw new Error(result.message ?? "A galériák lekérése sikertelen.");
//     }

//     return result.data;
// }
