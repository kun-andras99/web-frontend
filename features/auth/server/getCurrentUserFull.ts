import { ACCESS_TOKEN_COOKIE } from "@/features/auth/lib/constants";
import { verifyAccessToken } from "@/features/auth/lib/jwt";
import { ProfileUser } from "@/features/profile/types/profile.types";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { cache } from "react";

export const getCurrentUserFull = cache(async () => {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

        if (!token) {
            return null;
        }

        const payload = await verifyAccessToken(token);

        if (!payload) {
            return null;
        }

        const user = await prisma.users.findUnique({
            where: {
                id: payload.sub,
            },
            omit: {
                username: true,
                emailVerified: true,
            },
            include: {
                userData: true,
                userPreference: true,
            },
        });

        if (!user || user.status !== "ACTIVE") {
            return null;
        }

        return user;
    } catch (error) {
        console.error("[GET CURRENT USER FULL ERROR]", error);

        return null;
    }
});

function calculateAge(birthDate: Date): number {
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    return age;
}

export const getProfileUserFull = cache(
    async (id: string): Promise<ProfileUser | null> => {
        try {
            const user = await prisma.users.findUnique({
                where: {
                    id,
                },

                include: {
                    userData: true,
                    userPreference: true,
                },
            });

            if (!user || user.status !== "ACTIVE") {
                return null;
            }

            return {
                id: user.id,

                lat: user.lat,
                lng: user.lng,

                avatarUrl: user.userData?.avatarUrl ?? null,

                status: user.status,

                bio: user.userData?.bio ?? null,

                age: user.userData?.birth
                    ? calculateAge(user.userData.birth)
                    : null,

                lastActiveAt: user.lastActiveAt?.toISOString() ?? null,

                locationEnabled: user.locationEnabled ?? null,

                relationShipStatus: user.relationshipStatus ?? null,

                partnerUserId: user.partnerUserId ?? null,

                partnerOf: user.partnerUserId ?? null,

                userData: user.userData,
                userPreference: user.userPreference,

                partner: null,
                friends: [],
            };
        } catch (error) {
            console.error("[GET PROFILE USER FULL ERROR]", error);

            return null;
        }
    },
);
