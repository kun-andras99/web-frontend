import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { createProfileSchema } from "@/features/profile/lib/validation";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Nem vagy bejelentkezve.",
                },
                {
                    status: 401,
                },
            );
        }

        const formData = await request.formData();

        const lookingFor = formData.getAll("lookingFor").map(String);

        const genderInterest = formData.getAll("genderInterest").map(String);

        const sexualityInterest = formData
            .getAll("sexualityInterest")
            .map(String);

        const data = {
            nickname: String(formData.get("nickname") ?? ""),

            birth: String(formData.get("birth") ?? ""),

            gender: String(formData.get("gender") ?? ""),

            sexuality: String(formData.get("sexuality") ?? ""),

            relationshipStatus: String(
                formData.get("relationshipStatus") ?? "",
            ),

            lookingFor,

            genderInterest,

            sexualityInterest,

            pronouns: String(formData.get("pronouns") ?? "") || undefined,

            description: String(formData.get("description") ?? "") || undefined,

            bio: String(formData.get("bio") ?? "") || undefined,

            heightCm: formData.get("heightCm")
                ? Number(formData.get("heightCm"))
                : undefined,

            weightKg: formData.get("weightKg")
                ? Number(formData.get("weightKg"))
                : undefined,

            city: String(formData.get("city") ?? "") || undefined,

            country: String(formData.get("country") ?? "") || undefined,
        };

        const parsed = createProfileSchema.safeParse(data);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Ellenőrizd a megadott adatokat.",
                    fieldErrors: parsed.error.flatten().fieldErrors,
                },
                {
                    status: 400,
                },
            );
        }

        const profile = parsed.data;

        await prisma.$transaction(async (tx) => {
            /*
             * 1. BEJELENTKEZETT USER FRISSÍTÉSE
             */
            await tx.users.update({
                where: {
                    id: user.id,
                },
                data: {
                    relationshipStatus: profile.relationshipStatus,
                },
            });

            /*
             * 2. USER DATA
             */
            await tx.userData.upsert({
                where: {
                    userId: user.id,
                },

                create: {
                    userId: user.id,

                    nickname: profile.nickname,
                    birth: new Date(profile.birth),
                    gender: profile.gender,
                    sexuality: profile.sexuality,

                    description: profile.description ?? null,

                    bio: profile.bio ?? null,

                    heightCm: profile.heightCm ?? null,

                    weightKg: profile.weightKg ?? null,
                },

                update: {
                    nickname: profile.nickname,
                    birth: new Date(profile.birth),
                    gender: profile.gender,
                    sexuality: profile.sexuality,

                    description: profile.description ?? null,

                    bio: profile.bio ?? null,

                    heightCm: profile.heightCm ?? null,

                    weightKg: profile.weightKg ?? null,
                },
            });

            /*
             * 3. LOOKING FOR
             */
            await tx.userLookingFor.deleteMany({
                where: {
                    userId: user.id,
                },
            });

            await tx.userLookingFor.createMany({
                data: profile.lookingFor.map((value) => ({
                    userId: user.id,
                    value,
                })),
            });

            /*
             * 4. GENDER INTEREST
             */
            await tx.userGenderInterest.deleteMany({
                where: {
                    userId: user.id,
                },
            });

            await tx.userGenderInterest.createMany({
                data: profile.genderInterest.map((value) => ({
                    userId: user.id,
                    value,
                })),
            });

            /*
             * 5. SEXUALITY INTEREST
             */
            await tx.userSexualityInterest.deleteMany({
                where: {
                    userId: user.id,
                },
            });

            await tx.userSexualityInterest.createMany({
                data: profile.sexualityInterest.map((value) => ({
                    userId: user.id,
                    value,
                })),
            });
        });

        return NextResponse.json(
            {
                success: true,
                message: "Profil sikeresen mentve.",
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        console.error("CREATE PROFILE API ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Szerverhiba történt.",
            },
            {
                status: 500,
            },
        );
    }
}
