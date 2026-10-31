import { createEmailVerificationToken } from "@/features/auth/data/verification-token";
import { checkRateLimit } from "@/lib/security/rate-limit";
import type {
    AccessToken,
    ActionState,
    RefreshToken,
    SignUpFields,
    UserId,
} from "@/features/auth/types/auth-index";
import {
    createUser,
    getUserByEmail,
    getUserByUsername,
} from "@/features/user/repositories/user";
import type { ClientMeta } from "./client-meta";
import { AUTH_ROUTES } from "./constants";
import { createSessionTokens } from "./create-session";
import { sendEmail, verificationEmailTemplate } from "./mailer";
import { hashPassword } from "./password";
import { signUpSchema } from "./validation";

export type SignUpResult =
    | {
          ok: false;
          httpStatus: 400 | 409 | 429 | 500;
          state: Extract<ActionState<SignUpFields>, { status: "error" }>;
      }
    | {
          ok: true;
          httpStatus: 201;
          accessToken: AccessToken;
          refreshToken: RefreshToken;
          state: Extract<ActionState<SignUpFields>, { status: "success" }>;
      };

export async function registerCredentials(
    input: unknown,
    meta: ClientMeta = {},
): Promise<SignUpResult> {
    const parsed = signUpSchema.safeParse(input);

    if (!parsed.success) {
        return {
            ok: false,
            httpStatus: 400,
            state: {
                status: "error",
                message: "Kérjük, javítsd a hibás mezőket.",
                fieldErrors: parsed.error.flatten().fieldErrors,
            },
        };
    }

    const { username, email, password } = parsed.data;

    const rateLimit = await checkRateLimit(
        "signUpIp",
        meta.ipAddress ?? "unknown",
    );
    if (!rateLimit.success) {
        return {
            ok: false,
            httpStatus: 429,
            state: {
                status: "error",
                message:
                    "Túl sok regisztrációs kísérlet. Kérjük, próbáld újra később.",
            },
        };
    }

    try {
        const [existingEmail, existingUsername] = await Promise.all([
            getUserByEmail(email),
            getUserByUsername(username),
        ]);

        if (existingEmail) {
            return {
                ok: false,
                httpStatus: 409,
                state: {
                    status: "error",
                    message: "Ez az email cím már regisztrálva van.",
                    fieldErrors: {
                        email: ["Ez az email cím már foglalt."],
                    },
                },
            };
        }

        if (existingUsername) {
            return {
                ok: false,
                httpStatus: 409,
                state: {
                    status: "error",
                    message: "Ez a felhasználónév már foglalt.",
                    fieldErrors: {
                        username: ["Ez a felhasználónév már foglalt."],
                    },
                },
            };
        }

        const passwordHash = await hashPassword(password);
        const user = await createUser({ username, email, passwordHash });
        const userId = user.id as UserId;

        // try {
        //     const verificationToken =
        //         await createEmailVerificationToken(userId);
        //     const appUrl =
        //         process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
        //     const verifyLink = `${appUrl}/api/auth/verify-email?token=${verificationToken}`;

        //     await sendEmail({
        //         to: email,
        //         subject: "Erősítsd meg az email címed",
        //         html: verificationEmailTemplate(verifyLink),
        //     });
        // } catch (error) {
        //     console.error("[SIGN-UP EMAIL ERROR]", error);
        // }

        const tokens = await createSessionTokens(user, meta);

        return {
            ok: true,
            httpStatus: 201,
            ...tokens,
            state: {
                status: "success",
                message: "Sikeres regisztráció.",
                redirectTo: AUTH_ROUTES.afterSignIn,
            },
        };
    } catch (error) {
        console.error("[SIGN-UP ERROR]", error);
        return {
            ok: false,
            httpStatus: 500,
            state: {
                status: "error",
                message:
                    "A regisztráció során váratlan hiba történt. Kérjük, próbáld újra.",
            },
        };
    }
}
