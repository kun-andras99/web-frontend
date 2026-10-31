import {
    ACCESS_TOKEN_COOKIE,
    ACCESS_TOKEN_TTL_SECONDS,
    AUTH_ROUTES,
    REFRESH_TOKEN_COOKIE,
    REFRESH_TOKEN_TTL_SECONDS,
} from "@/features/auth/lib/constants";
import {
    SESSION_HEADER,
    signSessionHeader,
} from "@/features/auth/lib/session-header";
import { NextResponse, type NextRequest } from "next/server";
import { cookieOptions } from "./config";
import type { RotatedTokens, Session } from "./types";
import type { CspContext } from "@/features/security/csp/build-csp";
// ---- kérés adatai ----

/**
 * Csak akkor megbízható, ha a kérés egy olyan proxy mögül jön, ami felülírja az
 * x-forwarded-for headert (pl. Vercel). Egyébként a kliens hamisíthatja.
 */
export function getClientIp(request: NextRequest): string | null {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? null;
    return request.headers.get("x-real-ip");
}

export function getRequestMeta(request: NextRequest) {
    return {
        ip: getClientIp(request),
        userAgent: request.headers.get("user-agent"),
    };
}

// ---- cookie-k ----

function setSessionCookies(response: NextResponse, tokens: RotatedTokens) {
    response.cookies.set(ACCESS_TOKEN_COOKIE, tokens.accessToken, {
        ...cookieOptions,
        maxAge: ACCESS_TOKEN_TTL_SECONDS,
    });
    response.cookies.set(REFRESH_TOKEN_COOKIE, tokens.refreshToken, {
        ...cookieOptions,
        maxAge: REFRESH_TOKEN_TTL_SECONDS,
    });
}

function clearSessionCookies(response: NextResponse) {
    for (const name of [ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE]) {
        response.cookies.set(name, "", { ...cookieOptions, maxAge: 0 });
    }
}

/** A kérés `cookie` headerében felülír néhány cookie-t (a többit érintetlenül hagyja). */
function overrideRequestCookies(
    headers: Headers,
    overrides: Record<string, string>,
) {
    const jar = new Map<string, string>();

    for (const part of (headers.get("cookie") ?? "").split(";")) {
        const separator = part.indexOf("=");
        if (separator === -1) continue;
        jar.set(
            part.slice(0, separator).trim(),
            part.slice(separator + 1).trim(),
        );
    }
    for (const [name, value] of Object.entries(overrides)) {
        jar.set(name, encodeURIComponent(value));
    }

    headers.set(
        "cookie",
        [...jar].map(([name, value]) => `${name}=${value}`).join("; "),
    );
}

// ---- válaszok ----

/**
 * Rotáció esetén az új cookie-kat a böngészőnek ÉS az aktuális kérés többi részének is átadja.
 * A kliens által küldött belső session-fejlécet MINDIG eldobja, és csak hitelesített
 * sessionnél állít be újat (aláírva), így a fejléc nem hamisítható.
 */
export async function proceed(
    request: NextRequest,
    session: Session,
    csp?: CspContext,
): Promise<NextResponse> {
    const tokens = session.authenticated ? session.rotatedTokens : undefined;

    const headers = new Headers(request.headers);
    headers.delete(SESSION_HEADER);
    if (session.authenticated) {
        headers.set(SESSION_HEADER, await signSessionHeader(session.user));
    }

    if (tokens) {
        overrideRequestCookies(headers, {
            [ACCESS_TOKEN_COOKIE]: tokens.accessToken,
            ...(tokens.refreshToken && {
                [REFRESH_TOKEN_COOKIE]: tokens.refreshToken,
            }),
        });
    }
    if (csp) {
        headers.set("x-nonce", csp.nonce);
        // A kérés headere mindig "Content-Security-Policy": a Next.js innen olvassa a nonce-ot,
        // akkor is, ha a válaszba Report-Only fejléc kerül.
        headers.set("Content-Security-Policy", csp.policy);
    }

    const response = NextResponse.next({ request: { headers } });
    if (tokens) setSessionCookies(response, tokens);
    if (csp) response.headers.set(csp.headerName, csp.policy);

    return response;
}

export function redirectTo(
    request: NextRequest,
    path: string,
    session: Session,
): NextResponse {
    const response = NextResponse.redirect(new URL(path, request.url));
    if (session.authenticated && session.rotatedTokens) {
        setSessionCookies(response, session.rotatedTokens);
    }
    return response;
}

/** Az érvénytelen cookie-kat is törli, hogy ne fussanak feleslegesen DB-lekérdezések. */
export function redirectToSignIn(
    request: NextRequest,
    callbackUrl: string,
): NextResponse {
    const url = new URL(AUTH_ROUTES.signIn, request.url);
    url.searchParams.set("callbackUrl", callbackUrl);

    const response = NextResponse.redirect(url);
    clearSessionCookies(response);
    return response;
}

export function jsonError(
    status: number,
    code: string,
    message: string,
): NextResponse {
    return NextResponse.json({ error: { code, message } }, { status });
}

export function unauthorizedJson(): NextResponse {
    const response = jsonError(
        401,
        "UNAUTHENTICATED",
        "Authentication required",
    );
    clearSessionCookies(response);
    return response;
}
