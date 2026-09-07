import type {
    AccessToken,
    RefreshToken,
} from "@/features/auth/types/auth-index";
import { cookies } from "next/headers";
import {
    ACCESS_TOKEN_COOKIE,
    ACCESS_TOKEN_TTL_SECONDS,
    REFRESH_TOKEN_COOKIE,
    REFRESH_TOKEN_TTL_SECONDS,
} from "./constants";

const isProduction = process.env.NODE_ENV === "production";

const baseCookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
} as const;

export async function setAuthCookies(
    accessToken: AccessToken,
    refreshToken: RefreshToken,
): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(ACCESS_TOKEN_COOKIE, accessToken, {
        ...baseCookieOptions,
        maxAge: ACCESS_TOKEN_TTL_SECONDS,
    });
    cookieStore.set(REFRESH_TOKEN_COOKIE, refreshToken, {
        ...baseCookieOptions,
        maxAge: REFRESH_TOKEN_TTL_SECONDS,
    });
}

export async function setAccessTokenCookie(
    accessToken: AccessToken,
): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(ACCESS_TOKEN_COOKIE, accessToken, {
        ...baseCookieOptions,
        maxAge: ACCESS_TOKEN_TTL_SECONDS,
    });
}

export async function clearAuthCookies(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(ACCESS_TOKEN_COOKIE);
    cookieStore.delete(REFRESH_TOKEN_COOKIE);
}

/** Nyers, MÉG NEM ellenőrzött cookie-érték — ezért plain `string`, nem `RefreshToken`. */
export async function getRefreshTokenFromCookies(): Promise<
    string | undefined
> {
    const cookieStore = await cookies();
    return cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;
}
