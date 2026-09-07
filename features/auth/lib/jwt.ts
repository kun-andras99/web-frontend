import type {
    AccessToken,
    AccessTokenPayload,
    UserId,
} from "@/features/auth/types/auth-index";
import { SignJWT, jwtVerify } from "jose";
import { ACCESS_TOKEN_TTL_SECONDS } from "./constants";

function getSecret(name: "ACCESS_TOKEN_SECRET"): Uint8Array {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return new TextEncoder().encode(value);
}

// Lusta kiértékelés: build/import időben még nem feltétlenül elérhető az env var.
const accessTokenSecret = () => getSecret("ACCESS_TOKEN_SECRET");

export async function signAccessToken(
    payload: AccessTokenPayload,
): Promise<AccessToken> {
    const token = await new SignJWT({ email: payload.email })
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
): Promise<{ sub: UserId; email: string } | null> {
    try {
        const { payload } = await jwtVerify(token, accessTokenSecret());
        if (
            typeof payload.sub !== "string" ||
            typeof payload.email !== "string"
        ) {
            return null;
        }
        return { sub: payload.sub as UserId, email: payload.email };
    } catch {
        return null;
    }
}
