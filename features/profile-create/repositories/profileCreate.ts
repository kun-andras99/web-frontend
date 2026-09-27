import { CreateProfileDTO } from "@/features/profile-create/repositories/profileCreateDTO";
import { prisma } from "@/lib/prisma";

export async function createProfile(data: CreateProfileDTO) {
    return prisma.$transaction(async (tx) => {
        const existingPreference = await tx.userPreference.findUnique({
            where: {
                userId: data.userId,
            },
            select: {
                id: true,
            },
        });

        if (existingPreference) {
            throw new Error("PROFILE_ALREADY_COMPLETED");
        }

        const userData = await tx.userData.create({
            data: {
                userId: data.userId,
                nickname: data.nickname,
                birth: data.birth,
                gender: data.gender,
                sexuality: data.sexuality,
                appCity: data.appCity,
                // avatarUrl: data.avatarUrl,
            },
        });

        const userPreference = await tx.userPreference.create({
            data: {
                userId: data.userId,
            },
        });

        return {
            userData,
            userPreference,
        };
    });
}
