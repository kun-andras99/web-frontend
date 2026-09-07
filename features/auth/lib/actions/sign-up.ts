"use server";

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
import type {
    ActionState,
    SignUpFields,
    UserId,
} from "@/features/auth/types/auth-index";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signUpAction(
    _prevState: ActionState<SignUpFields>,
    formData: FormData,
): Promise<ActionState<SignUpFields>> {
    const parsed = signUpSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!parsed.success) {
        return {
            status: "error",
            message: "Kérjük, javítsd a hibás mezőket.",
            fieldErrors: parsed.error.flatten().fieldErrors,
        };
    }

    const { name, email, password } = parsed.data;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return {
            status: "error",
            message: "Ez az email cím már regisztrálva van.",
            fieldErrors: { email: ["Ez az email cím már foglalt."] },
        };
    }

    const passwordHash = await hashPassword(password);
    const user = await createUser({ name, email, passwordHash });
    const userId = user.id as UserId;

    const verificationToken = await createEmailVerificationToken(userId);
    const verifyLink = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify-email?token=${verificationToken}`;
    await sendEmail({
        to: email,
        subject: "Erősítsd meg az email címed",
        html: verificationEmailTemplate(verifyLink),
    });

    // Regisztráció után rögtön bejelentkeztetjük — az email-megerősítés egy
    // utólagos, "soft gate"-ként kezelt lépés (ld. VerifyEmailNotice komponens).
    const headerList = await headers();
    const { rawToken: refreshToken } = await createRefreshToken({
        userId,
        userAgent: headerList.get("user-agent"),
        ipAddress: headerList.get("x-forwarded-for"),
    });
    const accessToken = await signAccessToken({ sub: userId, email });
    await setAuthCookies(accessToken, refreshToken);

    redirect(AUTH_ROUTES.afterSignIn);
}
