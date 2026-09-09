import { createRefreshToken } from "@/features/auth/data/refresh-token";
import { getUserByEmail } from "@/features/auth/data/user";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import { setAuthCookies } from "@/features/auth/lib/cookies";
import { signAccessToken } from "@/features/auth/lib/jwt";
import { verifyPassword } from "@/features/auth/lib/password";
import { signInSchema } from "@/features/auth/lib/validation";
import type { UserId } from "@/features/auth/types/auth-index";
import { NextResponse } from "next/server";

const GENERIC_ERROR = "Hibás email cím vagy jelszó.";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const parsed = signInSchema.safeParse({
            email: body.email,
            password: body.password,
        });

        if (!parsed.success) {
            return NextResponse.json(
                {
                    status: "error",
                    message: "Kérjük, javítsd a hibás mezőket.",
                    fieldErrors: parsed.error.flatten().fieldErrors,
                },
                { status: 400 },
            );
        }

        const { email, password } = parsed.data;

        const user = await getUserByEmail(email);

        if (!user) {
            return NextResponse.json(
                {
                    status: "error",
                    message: GENERIC_ERROR,
                },
                { status: 401 },
            );
        }

        const isValidPassword = await verifyPassword(
            user.passwordHash,
            password,
        );

        if (!isValidPassword) {
            return NextResponse.json(
                {
                    status: "error",
                    message: GENERIC_ERROR,
                },
                { status: 401 },
            );
        }

        const userId = user.id as UserId;

        const userAgent = request.headers.get("user-agent");

        const forwardedFor = request.headers.get("x-forwarded-for");

        const ipAddress =
            forwardedFor?.split(",")[0]?.trim() ??
            request.headers.get("x-real-ip");

        const { rawToken: refreshToken } = await createRefreshToken({
            userId,
            userAgent,
            ipAddress,
        });

        const accessToken = await signAccessToken({
            sub: userId,
            email: user.email,
        });

        await setAuthCookies(accessToken, refreshToken);

        return NextResponse.json({
            status: "success",
            message: "Sikeres bejelentkezés.",
            redirectTo: AUTH_ROUTES.afterSignIn,
        });
    } catch (error) {
        console.error("[SIGN-IN API ERROR]", error);

        return NextResponse.json(
            {
                status: "error",
                message:
                    "A bejelentkezés során váratlan hiba történt. Kérjük, próbáld újra.",
            },
            { status: 500 },
        );
    }
}
