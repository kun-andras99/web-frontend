import { AUTH_ROUTES } from "@/features/auth/lib/constants";

/**
 * Kliensoldali fetch, ami kezeli a lejárt access tokent.
 *
 * Háttér: az access token 15 percig él, és a `proxy.ts` CSAK az oldal-
 * navigációkat frissíti — az `/api/*` hívásokat nem. Ha a user egy oldalon
 * marad 15 percnél tovább, minden API hívás 401-et kapna.
 *
 * Ezért 401 esetén:
 *  1. egyszer meghívjuk a `/api/auth/refresh`-t (single-flight: párhuzamos
 *     401-ek egyetlen refresh-t indítanak — a refresh token rotálódik,
 *     a második párhuzamos refresh reuse-detectiont váltana ki!),
 *  2. siker esetén újrapróbáljuk az eredeti kérést,
 *  3. ha a refresh sem sikerül, a session lejárt → átirányítás a sign-in oldalra.
 */

const REFRESH_ENDPOINT = "/api/auth/refresh";

/** Ezeknél nincs értelme refresh-elni (a refresh maga, sign-in / sign-up). */
const NO_REFRESH_PATHS = [
    REFRESH_ENDPOINT,
    "/api/auth/sign-in",
    "/api/auth/sign-up",
    "/api/auth/verify-email",
];

let refreshInFlight: Promise<boolean> | null = null;

/** Single-flight session refresh. `true`, ha sikerült új access tokent kapni. */
export function refreshSession(): Promise<boolean> {
    if (!refreshInFlight) {
        refreshInFlight = fetch(REFRESH_ENDPOINT, {
            method: "POST",
            credentials: "include",
        })
            .then((response) => response.ok)
            .catch(() => false)
            .finally(() => {
                refreshInFlight = null;
            });
    }

    return refreshInFlight;
}

let redirecting = false;

/** A session végleg lejárt: vissza a bejelentkezéshez, visszatérési címmel. */
export function handleSessionExpired(): void {
    if (typeof window === "undefined" || redirecting) return;

    const { pathname, search } = window.location;
    if (pathname.startsWith(AUTH_ROUTES.signIn)) return;

    redirecting = true;

    const url = new URL(AUTH_ROUTES.signIn, window.location.origin);
    url.searchParams.set("callbackUrl", `${pathname}${search}`);
    window.location.assign(url.toString());
}

function getPathname(input: RequestInfo | URL): string {
    const raw =
        typeof input === "string"
            ? input
            : input instanceof URL
              ? input.href
              : input.url;

    try {
        return new URL(raw, "http://localhost").pathname;
    } catch {
        return raw;
    }
}

export interface ApiFetchOptions extends RequestInit {
    /**
     * Ha `false`, a végleg lejárt session NEM irányít át a sign-in oldalra
     * (pl. olyan hívásnál, ami vendégként is értelmes). Alapértelmezés: true.
     */
    redirectOnUnauthorized?: boolean;
}

/**
 * `fetch` drop-in csere az app saját `/api` végpontjaihoz:
 * mindig küldi a cookie-kat, és 401-nél egyszer refresh-el + újrapróbál.
 */
export async function apiFetch(
    input: RequestInfo | URL,
    init: ApiFetchOptions = {},
): Promise<Response> {
    const { redirectOnUnauthorized = true, ...requestInit } = init;
    const options: RequestInit = { credentials: "include", ...requestInit };

    const response = await fetch(input, options);

    if (
        response.status !== 401 ||
        typeof window === "undefined" ||
        NO_REFRESH_PATHS.includes(getPathname(input))
    ) {
        return response;
    }

    const refreshed = await refreshSession();

    if (refreshed) {
        return fetch(input, options);
    }

    if (redirectOnUnauthorized) {
        handleSessionExpired();
    }

    return response;
}
