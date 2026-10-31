import { z } from "zod";

export const MATCH_CANDIDATES_DEFAULT_PAGE_SIZE = 10;
export const MATCH_CANDIDATES_MAX_PAGE_SIZE = 30;

export const matchActionTypeSchema = z.enum(["LIKE", "PASS"]);

// ---- kérés ----

export const matchCandidatesQuerySchema = z.object({
    cursor: z.string().min(1).max(200).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(MATCH_CANDIDATES_MAX_PAGE_SIZE)
        .default(MATCH_CANDIDATES_DEFAULT_PAGE_SIZE),
});

export const matchActionInputSchema = z.object({
    targetUserId: z.string().min(1),
    type: matchActionTypeSchema,
});

// ---- válasz ----

export const matchCandidateSchema = z.object({
    id: z.string(),
    username: z.string(),
    nickname: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    birth: z.string().nullable(),
    gender: z.string().nullable(),
    sexuality: z.string().nullable(),
    description: z.string().nullable(),
});

export const matchCandidatesPageSchema = z.object({
    items: z.array(matchCandidateSchema),
    nextCursor: z.string().nullable(),
});

export const matchActionResultSchema = z.object({
    success: z.literal(true),
    matched: z.boolean(),
    alreadyHandled: z.boolean().optional(),
    matchId: z.string().nullable().optional(),
    user: z
        .object({
            id: z.string(),
            username: z.string(),
            nickname: z.string().nullable().optional(),
            avatarUrl: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
});

export type MatchCandidateDTO = z.infer<typeof matchCandidateSchema>;
export type MatchCandidatesPageDTO = z.infer<typeof matchCandidatesPageSchema>;
export type MatchCandidatesQuery = z.output<typeof matchCandidatesQuerySchema>;
export type MatchActionInput = z.infer<typeof matchActionInputSchema>;
export type MatchActionResultDTO = z.infer<typeof matchActionResultSchema>;
