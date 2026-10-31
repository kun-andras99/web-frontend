import type { SessionUser } from "@/features/auth/types/auth-index";
import { SignJWT, jwtVerify } from "jose";

/**
 * A proxy már ellenőrizte a sessiont (aláírás + fiók státusza), ezt az eredményt adja át a
 * szerver komponenseknek / route handlereknek, hogy ne kelljen kérésenként újra a DB-hez fordulni.
 *
 * A fejléc ALÁÍRT és rövid életű: ha a proxy valamiért kimarad, vagy a kliens hamisít egyet,
 * az ellenőrzés elbukik, és a `getCurrentUser` visszaesik a cookie + DB útvonalra.
 */
export const SESSION_HEADER = "x-session-user";

const SESSION_HEADER_TTL_SECONDS = 60;
const MIN_SECRET_LENGTH = 32;

let cachedKey: Promise<Uint8Array> | undefined;

/** Külön kulcs az access tokentől (domain separation): az egyik nem használható a másik helyett. */
function sessionHeaderKey(): Promise<Uint8Array> {
    cachedKey ??= (async () => {
        const secret = process.env.ACCESS_TOKEN_SECRET;
        if (!secret || secret.length < MIN_SECRET_LENGTH) {
            throw new Error("ACCESS_TOKEN_SECRET missing or too short");
        }
        const digest = await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(`${secret}|session-header`),
        );
        return new Uint8Array(digest);
    })();
    return cachedKey;
}

export async function signSessionHeader(user: SessionUser): Promise<string> {
    return new SignJWT({ user })
        .setProtectedHeader({ alg: "HS256" })
        .setSubject(user.id)
        .setIssuedAt()
        .setExpirationTime(`${SESSION_HEADER_TTL_SECONDS}s`)
        .sign(await sessionHeaderKey());
}

export async function verifySessionHeader(
    value: string | null,
): Promise<SessionUser | null> {
    if (!value) return null;

    try {
        const { payload } = await jwtVerify(value, await sessionHeaderKey(), {
            algorithms: ["HS256"],
        });
        const user = payload.user as SessionUser | undefined;
        return user && user.id === payload.sub ? user : null;
    } catch {
        return null;
    }
}
