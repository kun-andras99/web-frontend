import { z } from "zod";

export const VISITORS_DEFAULT_PAGE_SIZE = 20;
export const VISITORS_MAX_PAGE_SIZE = 50;

export const latestVisitSchema = z.object({
    latestVisitedAt: z.string().nullable(),
});

export type LatestVisitDTO = z.infer<typeof latestVisitSchema>;

export const visitorSchema = z.object({
    /** a látogatás azonosítója (React key, kurzor) */
    visitId: z.string(),
    userId: z.string(),
    nickname: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    /** már formázott felirat (formatGender), vagy null */
    genderLabel: z.string().nullable(),
    distanceKm: z.number().nonnegative().nullable(),
    visitedAt: z.string(),
});

export const visitorsPageSchema = z.object({
    items: z.array(visitorSchema),
    nextCursor: z.string().nullable(),
});

export const visitorsQuerySchema = z.object({
    cursor: z.string().min(1).max(200).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(VISITORS_MAX_PAGE_SIZE)
        .default(VISITORS_DEFAULT_PAGE_SIZE),
});

export type VisitorDTO = z.infer<typeof visitorSchema>;
export type VisitorsPageDTO = z.infer<typeof visitorsPageSchema>;
export type VisitorsQuery = z.output<typeof visitorsQuerySchema>;
