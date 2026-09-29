import { nearbyPageSchema } from "@/features/nearby-users/schemas/nearby.schema";
import { http } from "@/lib/http/http-client";

export interface FetchNearbyParams {
    cursor?: string;
    limit?: number;
}

export function fetchNearbyPage(
    params: FetchNearbyParams = {},
    signal?: AbortSignal,
) {
    return http.get("/api/nearby-users", {
        schema: nearbyPageSchema,
        query: { ...params },
        signal,
    });
}
