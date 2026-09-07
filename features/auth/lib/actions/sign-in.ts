"use server";

import { createRefreshToken } from "@/features/auth/data/refresh-token";
import { getUserByEmail } from "@/features/auth/data/user";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import { setAuthCookies } from "@/features/auth/lib/cookies";
import { signAccessToken } from "@/features/auth/lib/jwt";
import { verifyPassword } from "@/features/auth/lib/password";
import { signInSchema } from "@/features/auth/lib/validation";
import type {
    ActionState,
    SignInFields,
    UserId,
} from "@/features/auth/types/auth-index";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Szándékosan ugyanaz az üzenet mindkét hibaesetre — így egy támadó nem tudja
// kitalálni email-enumerálással, hogy egy cím regisztrálva van-e.
const GENERIC_ERROR = "Hibás email cím vagy jelszó.";

export async function signInAction(
    _prevState: ActionState<SignInFields>,
    formData: FormData,
): Promise<ActionState<SignInFields>> {
    const parsed = signInSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!parsed.success) {
        return {
            status: "error",
            message: "Kérjük, javítsd a hibás mezőket.",
            fieldErrors: parsed.error.flatten().fieldErrors,
        };
    }

    const { email, password } = parsed.data;
    const user = await getUserByEmail(email);

    if (!user) {
        return { status: "error", message: GENERIC_ERROR };
    }

    const isValidPassword = await verifyPassword(user.passwordHash, password);
    if (!isValidPassword) {
        return { status: "error", message: GENERIC_ERROR };
    }

    const userId = user.id as UserId;
    const headerList = await headers();
    const { rawToken: refreshToken } = await createRefreshToken({
        userId,
        userAgent: headerList.get("user-agent"),
        ipAddress: headerList.get("x-forwarded-for"),
    });
    const accessToken = await signAccessToken({
        sub: userId,
        email: user.email,
    });
    await setAuthCookies(accessToken, refreshToken);

    redirect(AUTH_ROUTES.afterSignIn);
}
