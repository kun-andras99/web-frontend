import { prisma } from "@/lib/prisma";
import {
    Gender,
    RelationshipStatus,
    Sexuality,
} from "../../../prisma/generated/prisma/enums";

interface UpdateProfileData {
    username?: string;

    relationshipStatus?: RelationshipStatus | null;

    userData?: {
        nickname: string;
        birth: Date;
        gender: Gender;
        sexuality: Sexuality;
        pronouns?: string | null;
        description?: string | null;
        bio?: string | null;
        heightCm?: number | null;
        weightKg?: number | null;
        city?: string | null;
        country?: string | null;
    };
}

export async function getProfileByUserId(userId: string) {
    return prisma.userss.findUnique({
        where: {
            id: userId,
        },
        include: {
            userData: true,
            userPreference: true,
            lookingFor: true,
            genderInterest: true,
            sexualityInteres: true,
        },
    });
}

export async function updateProfile(userId: string, data: UpdateProfileData) {
    return prisma.$transaction(async (tx) => {
        const user = await tx.user.update({
            where: {
                id: userId,
            },
            data: {
                ...(data.username !== undefined && {
                    username: data.username,
                }),

                ...(data.relationshipStatus !== undefined && {
                    relationshipStatus: data.relationshipStatus,
                }),
            },
        });

        if (data.userData) {
            await tx.userData.upsert({
                where: {
                    userId,
                },
                create: {
                    userId,
                    ...data.userData,
                },
                update: {
                    ...data.userData,
                },
            });
        }

        return user;
    });
}
