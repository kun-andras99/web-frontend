import type {
    AccessToken,
    AccessTokenPayload,
    UserId,
} from "@/features/auth/types/auth-index";
import { SignJWT, decodeJwt, jwtVerify } from "jose";
import { ACCESS_TOKEN_TTL_SECONDS } from "./constants";

const MIN_SECRET_LENGTH = 32;

let cachedSecret: Uint8Array | undefined;

// Lusta kiértékelés: build/import időben még nem feltétlenül elérhető az env var.
function accessTokenSecret(): Uint8Array {
    if (cachedSecret) return cachedSecret;

    const value = process.env.ACCESS_TOKEN_SECRET;
    if (!value) {
        throw new Error(
            "Missing required environment variable: ACCESS_TOKEN_SECRET",
        );
    }
    if (value.length < MIN_SECRET_LENGTH) {
        throw new Error(
            `ACCESS_TOKEN_SECRET must be at least ${MIN_SECRET_LENGTH} characters`,
        );
    }

    cachedSecret = new TextEncoder().encode(value);
    return cachedSecret;
}

export async function signAccessToken(
    payload: AccessTokenPayload,
): Promise<AccessToken> {
    const token = await new SignJWT({})
        .setProtectedHeader({ alg: "HS256" })
        .setSubject(payload.sub)
        .setIssuedAt()
        .setExpirationTime(`${ACCESS_TOKEN_TTL_SECONDS}s`)
        .sign(accessTokenSecret());

    return token as AccessToken;
}

/**
 * A bemenet szándékosan plain `string`: a hívó pillanatában (pl. egy cookie-ból
 * kiolvasott érték) még nem tudjuk, hogy valódi, általunk kiállított tokenről
 * van-e szó. A `sub`-ot csak SIKERES kriptográfiai ellenőrzés UTÁN "brand-eljük"
 * `UserId`-vé — ez az egyetlen hely, ahol egy nyers stringből megbízható UserId lesz.
 */
export async function verifyAccessToken(
    token: string,
): Promise<{ sub: UserId } | null> {
    const secret = accessTokenSecret();

    try {
        const { payload } = await jwtVerify(token, secret, {
            algorithms: ["HS256"],
        });
        if (typeof payload.sub !== "string") {
            return null;
        }
        return { sub: payload.sub as UserId };
    } catch {
        return null;
    }
}

/**
 * A token lejárati ideje, ELLENŐRZÉS NÉLKÜL (csak dekódol).
 *
 * Kizárólag időzítési döntéshez használható (proaktív rotáció, cache-élettartam),
 * hitelesítéshez soha. A `session.ts` mindkét hívásánál a token ugyanabban a kérésben
 * már át lett ellenőrizve. Lejárt tokenre is a (múltbeli) lejáratot adja,
 * hibás formátumra vagy `exp` nélkül null.
 */
export function getAccessTokenExpiresAt(token: string): Date | null {
    try {
        const { exp } = decodeJwt(token);
        return typeof exp === "number" ? new Date(exp * 1000) : null;
    } catch {
        return null;
    }
}
