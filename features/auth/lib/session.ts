import { getUserById } from "@/features/auth/data/user";
import type { SessionUser } from "@/features/auth/types/auth-index";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import "server-only";
import { ACCESS_TOKEN_COOKIE, AUTH_ROUTES } from "./constants";
import { verifyAccessToken } from "./jwt";

/**
 * `cache()` (React) request-szinten dedupe-olja a hívásokat: ha egy oldalon
 * több Server Component is meghívja `getCurrentUser`-t, az adatbázist
 * (és a JWT-ellenőrzést) csak egyszer futtatjuk le kérésenként.
 */
export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
    if (!accessToken) return null;

    const payload = await verifyAccessToken(accessToken);
    if (!payload) return null;

    const user = await getUserById(payload.sub);
    if (!user) return null;

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        emailVerified: Boolean(user.emailVerified),
    };
});

/** Server Component / Server Action guard: ha nincs érvényes session, egyből átirányít. */
export async function requireUser(): Promise<SessionUser> {
    const user = await getCurrentUser();
    if (!user) {
        redirect(AUTH_ROUTES.signIn);
    }
    return user;
}
