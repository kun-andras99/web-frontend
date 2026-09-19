import type {
    AccessToken,
    ActionState,
    RefreshToken,
    SignInFields,
} from "@/features/auth/types/auth-index";
import type { ClientMeta } from "./client-meta";
import { AUTH_ROUTES } from "./constants";
import { createSessionTokens } from "./create-session";
import { verifyPassword } from "./password";
import { signInSchema } from "./validation";
import { getUserByIdentifier } from "@/features/auth/data/user";

const GENERIC_ERROR = "Hibás email cím, felhasználónév vagy jelszó.";

export type SignInResult =
    | {
          ok: false;
          httpStatus: 400 | 401 | 500;
          state: Extract<ActionState<SignInFields>, { status: "error" }>;
      }
    | {
          ok: true;
          httpStatus: 200;
          accessToken: AccessToken;
          refreshToken: RefreshToken;
          state: Extract<ActionState<SignInFields>, { status: "success" }>;
      };

export async function authenticateCredentials(
    input: unknown,
    meta: ClientMeta = {},
): Promise<SignInResult> {
    const parsed = signInSchema.safeParse(input);

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

    try {
        const { identifier, password } = parsed.data;

        const user = await getUserByIdentifier(identifier);

        if (!user) {
            return {
                ok: false,
                httpStatus: 401,
                state: {
                    status: "error",
                    message: GENERIC_ERROR,
                },
            };
        }

        if (user.status !== "ACTIVE") {
            return {
                ok: false,
                httpStatus: 401,
                state: {
                    status: "error",
                    message: GENERIC_ERROR,
                },
            };
        }

        const isValidPassword = await verifyPassword(
            user.passwordHash,
            password,
        );

        if (!isValidPassword) {
            return {
                ok: false,
                httpStatus: 401,
                state: {
                    status: "error",
                    message: GENERIC_ERROR,
                },
            };
        }

        const tokens = await createSessionTokens(user, meta);

        return {
            ok: true,
            httpStatus: 200,
            ...tokens,
            state: {
                status: "success",
                message: "Sikeres bejelentkezés.",
                redirectTo: AUTH_ROUTES.afterSignIn,
            },
        };
    } catch (error) {
        console.error("[SIGN-IN ERROR]", error);

        return {
            ok: false,
            httpStatus: 500,
            state: {
                status: "error",
                message:
                    "A bejelentkezés során váratlan hiba történt. Kérjük, próbáld újra.",
            },
        };
    }
}
