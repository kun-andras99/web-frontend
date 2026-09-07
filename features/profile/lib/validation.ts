import { z } from "zod";
import { Gender, GenderInterest, LookingFor, RelationshipStatus, Sexuality, SexualityInterest } from "../../../prisma/generated/prisma/enums";

export const createProfileSchema = z.object({
    nickname: z
        .string()
        .min(2, "A becenév legalább 2 karakter legyen.")
        .max(30, "A becenév maximum 30 karakter lehet."),

    birth: z.string().min(1, "A születési dátum megadása kötelező."),

    gender: z.enum(Gender),

    sexuality: z.enum(Sexuality),

    lookingFor: z
        .array(
            z.enum(LookingFor),
        )
        .min(1, "Legalább egy lehetőséget válassz."),

    genderInterest: z
        .array(z.enum(GenderInterest))
        .min(1, "Legalább egy nemet válassz."),

    sexualityInterest: z
        .array(
            z.enum(SexualityInterest),
        )
        .min(1, "Legalább egy lehetőséget válassz."),

    relationshipStatus: z.enum(RelationshipStatus),

    pronouns: z.string().max(50).optional(),

    description: z.string().max(500).optional(),

    bio: z.string().max(1000).optional(),

    heightCm: z.number().int().min(100).max(250).optional(),

    weightKg: z.number().int().min(30).max(300).optional(),

    city: z.string().max(100).optional(),

    country: z.string().max(100).optional(),
});

export type CreateProfileInput = z.infer<typeof createProfileSchema>;
