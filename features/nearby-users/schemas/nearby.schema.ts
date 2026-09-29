import { z } from "zod";

export const NEARBY_DEFAULT_PAGE_SIZE = 30;
export const NEARBY_MAX_PAGE_SIZE = 60;

export const nearbyUserSchema = z.object({
    id: z.string(),
    nickname: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    /** már formázott felirat (formatGender), vagy null */
    genderLabel: z.string().nullable(),
    age: z.number().int().nonnegative().nullable(),
    distanceKm: z.number().nonnegative(),
});

export const nearbyPageSchema = z.object({
    items: z.array(nearbyUserSchema),
    nextCursor: z.string().nullable(),
});

export const nearbyQuerySchema = z.object({
    cursor: z.string().min(1).max(200).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(NEARBY_MAX_PAGE_SIZE)
        .default(NEARBY_DEFAULT_PAGE_SIZE),
});

export type NearbyUserDTO = z.infer<typeof nearbyUserSchema>;
export type NearbyPageDTO = z.infer<typeof nearbyPageSchema>;
export type NearbyQuery = z.output<typeof nearbyQuerySchema>;
