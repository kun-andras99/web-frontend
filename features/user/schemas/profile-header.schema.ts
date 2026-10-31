import { z } from "zod";

export const mainProfileSchema = z.object({
    id: z.string(),
    nickname: z.string().nullable(),
    avatarUrl: z.string().nullable(),
});

export const profileHeaderSchema = z.object({
    id: z.string(),
    nickname: z.string().nullable(),
    birth: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    bio: z.string().nullable(),
    gender: z.string().nullable(),
    sexuality: z.string().nullable(),
    description: z.string().nullable(),
    appCity: z.string().nullable(),
    transStatus: z.string().nullable(),
    countryCode: z.string().nullable(),
    region: z.string().nullable(),
    city: z.string().nullable(),
});
