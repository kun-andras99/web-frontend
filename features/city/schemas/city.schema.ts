import { z } from "zod";

export const cityStatsSchema = z.object({
    appCity: z.string(),
    total: z.number().int().nonnegative(),
    gender: z.object({
        male: z.number().int().nonnegative(),
        female: z.number().int().nonnegative(),
        transMale: z.number().int().nonnegative(),
        transFemale: z.number().int().nonnegative(),
    }),
    age: z.object({
        age18To25: z.number().int().nonnegative(),
        age26To40: z.number().int().nonnegative(),
        age41To60: z.number().int().nonnegative(),
        age60Plus: z.number().int().nonnegative(),
    }),
});
