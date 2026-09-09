import { createRefreshToken } from "@/features/auth/data/refresh-token";
import { createUser, getUserByEmail } from "@/features/auth/data/user";
import { createEmailVerificationToken } from "@/features/auth/data/verification-token";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import { setAuthCookies } from "@/features/auth/lib/cookies";
import { signAccessToken } from "@/features/auth/lib/jwt";
import {
    sendEmail,
    verificationEmailTemplate,
} from "@/features/auth/lib/mailer";
import { hashPassword } from "@/features/auth/lib/password";
import { signUpSchema } from "@/features/auth/lib/validation";
import type { UserId } from "@/features/auth/types/auth-index";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const parsed = signUpSchema.safeParse({
            username: body.username,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
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

        const { username, email, password } = parsed.data;

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return NextResponse.json(
                {
                    status: "error",
                    message: "Ez az email cím már regisztrálva van.",
                    fieldErrors: {
                        email: ["Ez az email cím már foglalt."],
                    },
                },
                { status: 409 },
            );
        }

        const passwordHash = await hashPassword(password);

        const user = await createUser({
            username,
            email,
            passwordHash,
        });

        const userId = user.id as UserId;

        const verificationToken = await createEmailVerificationToken(userId);

        const verifyLink =
            `${process.env.NEXT_PUBLIC_APP_URL}` +
            `/api/auth/verify-email?token=${verificationToken}`;

        await sendEmail({
            to: email,
            subject: "Erősítsd meg az email címed",
            html: verificationEmailTemplate(verifyLink),
        });

        const userAgent = request.headers.get("user-agent");
        const ipAddress =
            request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
            request.headers.get("x-real-ip");

        const { rawToken: refreshToken } = await createRefreshToken({
            userId,
            userAgent,
            ipAddress,
        });

        const accessToken = await signAccessToken({
            sub: userId,
            email,
        });

        await setAuthCookies(accessToken, refreshToken);

        return NextResponse.json(
            {
                status: "success",
                message: "Sikeres regisztráció.",
                redirectTo: AUTH_ROUTES.afterSignIn,
            },
            { status: 201 },
        );
    } catch (error) {
        console.error("Sign-up API error:", error);

        return NextResponse.json(
            {
                status: "error",
                message:
                    "A regisztráció során váratlan hiba történt. Kérjük, próbáld újra.",
            },
            { status: 500 },
        );
    }
}
