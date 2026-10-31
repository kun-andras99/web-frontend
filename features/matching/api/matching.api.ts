import {
    matchActionResultSchema,
    matchCandidatesPageSchema,
    type MatchActionInput,
} from "@/features/matching/schemas/matching.schema";
import { http } from "@/lib/http/http-client";

export function fetchMatchCandidates(
    params: { cursor?: string; limit?: number } = {},
    signal?: AbortSignal,
) {
    return http.get("/api/matching/users", {
        schema: matchCandidatesPageSchema,
        query: { ...params },
        signal,
    });
}

export function sendMatchAction(input: MatchActionInput) {
    return http.post("/api/matching/action", {
        schema: matchActionResultSchema,
        body: input,
    });
}
