import {
    ACCESS_TOKEN_COOKIE,
    AUTH_ROUTES,
    REFRESH_TOKEN_COOKIE,
} from "@/features/auth/lib/constants";
import { verifyAccessToken } from "@/features/auth/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

/**
 * A middleware Edge runtime-on fut, ahol NEM elérhető a Prisma Client és az argon2
 * natív binding sem. Ezért itt csak a JWT aláírását/lejáratát ellenőrizzük
 * (ez self-contained, DB nélkül is gyors) — minden DB-t igénylő logika
 * (rotáció, reuse-detection) a /api/auth/refresh Node-runtime Route Handlerben
 * fut, amit innen egy sima fetch-csel hívunk meg.
 */
export async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
    const payload = accessToken ? await verifyAccessToken(accessToken) : null;

    if (payload) {
        return NextResponse.next();
    }

    const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
    if (!refreshToken) {
        return redirectToSignIn(request);
    }

    const refreshResponse = await fetch(
        new URL("/api/auth/refresh", request.url),
        {
            method: "POST",
            headers: { cookie: request.headers.get("cookie") ?? "" },
        },
    );

    if (!refreshResponse.ok) {
        return redirectToSignIn(request);
    }

    const response = NextResponse.next();
    // `getSetCookie()` (modern Fetch API) helyesen, KÜLÖN stringekként adja vissza
    // a több Set-Cookie headert — sima `headers.get("set-cookie")` egyetlen,
    // vesszővel összefűzött (és emiatt hibás) stringet adna vissza.
    const setCookies = refreshResponse.headers.getSetCookie?.() ?? [];
    for (const cookie of setCookies) {
        response.headers.append("set-cookie", cookie);
    }

    return response;
}

function redirectToSignIn(request: NextRequest): NextResponse {
    const url = new URL(AUTH_ROUTES.signIn, request.url);
    url.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(url);
}

export const config = {
    // Bővítsd a saját védett route-jaiddal (pl. "/dashboard/:path*", "/settings/:path*").
    matcher: ["/dashboard/:path*"],
};
