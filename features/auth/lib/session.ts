import "server-only";

import type { SessionUser, UserId } from "@/features/auth/types/auth-index";
import { getUserById } from "@/features/user/repositories/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { ACCESS_TOKEN_COOKIE, AUTH_ROUTES } from "./constants";
import { verifyAccessToken } from "./jwt";

/**
 * MEGJEGYZÉS: korábban ez a fájl `"use server"` direktívával kezdődött, ami
 * minden exportált függvényt kliensről hívható Server Actionné tett.
 * Ez egy szerveroldali segédmodul, ezért `server-only`.
 */

/**
 * `cache()` (React) request-szinten dedupe-olja a hívásokat: ha egy oldalon
 * több Server Component is meghívja `getCurrentUser`-t, az adatbázist
 * (és a JWT-ellenőrzést) csak egyszer futtatjuk le kérésenként.
 *
 * Csak AKTÍV fiókot fogadunk el: egy felfüggesztett / tiltott / törölt user
 * érvényes (még le nem járt) access tokennel sem érheti el az API-t.
 */
export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
    if (!accessToken) return null;

    const payload = await verifyAccessToken(accessToken);
    if (!payload) return null;

    const user = await getUserById(payload.sub);
    if (!user || user.status !== "ACTIVE") return null;

    return {
        id: user.id as UserId,
        email: user.email,
        username: user.username,
        role: user.role,
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
