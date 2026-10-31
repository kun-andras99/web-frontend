import { cityStatsSchema } from "@/features/city/schemas/city.schema";
import { http } from "@/lib/http/http-client";

export function fetchCityStats(signal?: AbortSignal) {
    return http.get("/api/city", { schema: cityStatsSchema, signal });
}
