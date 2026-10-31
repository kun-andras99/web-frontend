import type {
    AccessToken,
    ActionState,
    RefreshToken,
    SignInFields,
} from "@/features/auth/types/auth-index";
import { hashIdentifier } from "@/features/security/client-ip";
import { getUserByIdentifier } from "@/features/user/repositories/user";
import { checkRateLimits } from "@/lib/security/rate-limit";
import type { ClientMeta } from "./client-meta";
import { AUTH_ROUTES } from "./constants";
import { createSessionTokens } from "./create-session";
import { verifyPassword } from "./password";
import { signInSchema } from "./validation";

const GENERIC_ERROR = "Hibás email cím, felhasználónév vagy jelszó.";

export type SignInResult =
    | {
          ok: false;
          httpStatus: 400 | 401 | 429 | 500;
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

    const { identifier, password } = parsed.data;

    // Brute-force védelem: IP + azonosító páronként szigorúbb, IP-nként tágabb limit.
    // A DB-lekérdezés és a jelszó-hash előtt fut, hogy a támadás ne terhelje őket.
    const ip = meta.ipAddress ?? "unknown";
    const rateLimit = await checkRateLimits([
        ["login", `${ip}:${await hashIdentifier(identifier)}`],
        ["loginIp", ip],
    ]);
    if (!rateLimit.success) {
        return {
            ok: false,
            httpStatus: 429,
            state: {
                status: "error",
                message:
                    "Túl sok bejelentkezési kísérlet. Kérjük, próbáld újra később.",
            },
        };
    }

    try {

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
