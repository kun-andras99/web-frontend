import "server-only";

import type { SessionUser } from "@/features/auth/types/auth-index";
import { getUserById } from "@/features/user/repositories/user";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { ACCESS_TOKEN_COOKIE, AUTH_ROUTES } from "./constants";
import { verifyAccessToken } from "./jwt";
import { SESSION_HEADER, verifySessionHeader } from "./session-header";
import { isActiveUser, toSessionUser } from "./session-user";

/**
 * `cache()` (React) request-szinten dedupe-olja a hívásokat: ha egy oldalon több Server
 * Component is meghívja, az adatbázist és a JWT-ellenőrzést csak egyszer futtatjuk.
 * Route handlerben és server actionben nincs ilyen deduplikálás, ott hívd egyszer.
 *
 * Elsődlegesen a proxy által ALÁÍRT, rövid életű fejlécet használja (nincs DB-hívás).
 * Ha az hiányzik vagy érvénytelen (a proxy kimaradt, hamisított fejléc), a cookie-ból
 * ellenőrzi az aláírást és a fiók állapotát a DB-ből (mélységi védelem).
 */
export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
    const trusted = await verifySessionHeader(
        (await headers()).get(SESSION_HEADER),
    );
    if (trusted) return trusted;

    const accessToken = (await cookies()).get(ACCESS_TOKEN_COOKIE)?.value;
    if (!accessToken) return null;

    const payload = await verifyAccessToken(accessToken);
    if (!payload) return null;

    const user = await getUserById(payload.sub);
    return user && isActiveUser(user) ? toSessionUser(user) : null;
});

/**
 * Oldalakhoz (Server Component): ha nincs bejelentkezett user, a bejelentkezésre irányít.
 * A proxy ezt már megtette, ez a tartalék arra az esetre, ha a token a proxy és a renderelés
 * között járt le. API végpontokon a `requireUser` (HttpError 401) való.
 */
export async function requireCurrentUser(): Promise<SessionUser> {
    const user = await getCurrentUser();
    if (!user) redirect(AUTH_ROUTES.signIn);
    return user;
}
