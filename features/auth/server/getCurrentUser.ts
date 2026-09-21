import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";

import type { SessionUser } from "@/features/auth/types/auth-index";
import { prisma } from "@/lib/prisma";

const ACCESS_TOKEN_COOKIE = "access_token";

type AccessTokenPayload = {
    userId: string;
};

export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

        if (!token) {
            return null;
        }

        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("JWT_SECRET is not defined.");
        }

        const secretKey = new TextEncoder().encode(secret);

        const { payload } = await jwtVerify<AccessTokenPayload>(
            token,
            secretKey,
        );

        if (!payload.sub) {
            return null;
        }

        const user = await prisma.users.findUnique({
            where: {
                id: payload.sub,
            },
            select: {
                id: true,
                email: true,
                username: true,
                emailVerified: true,

                userData: true,
                userPreference: true,
            },
        });

        if (!user) {
            return null;
        }

        return {
            id: user.id,
            email: user.email,
            username: user.username,
            emailVerified: user.emailVerified !== null,
        };
    } catch (error) {
        console.error("getCurrentUser error:", error);

        return null;
    }
});
