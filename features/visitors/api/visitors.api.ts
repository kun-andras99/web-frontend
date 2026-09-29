import {
    latestVisitSchema,
    visitorsPageSchema,
} from "@/features/visitors/schemas/visitors.schema";
import { http } from "@/lib/http/http-client";

export interface FetchVisitorsParams {
    cursor?: string;
    limit?: number;
}

export function fetchVisitorsPage(
    params: FetchVisitorsParams = {},
    signal?: AbortSignal,
) {
    return http.get("/api/visitors", {
        schema: visitorsPageSchema,
        query: { ...params },
        signal,
    });
}

export function fetchLatestVisit(signal?: AbortSignal) {
    return http.get("/api/visitors/latest", {
        schema: latestVisitSchema,
        signal,
    });
}
