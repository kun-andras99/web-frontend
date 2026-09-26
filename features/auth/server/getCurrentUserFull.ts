import { ACCESS_TOKEN_COOKIE } from "@/features/auth/lib/constants";
import { verifyAccessToken } from "@/features/auth/lib/jwt";
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
                email: true,
                emailVerified: true,
                passwordHash: true,
                lat: true,
                lng: true,
                locationEnabled: true,
                locationUpdatedAt: true,
                updatedAt: true,
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
