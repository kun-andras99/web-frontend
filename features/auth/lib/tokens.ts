import { createHash, randomBytes } from "node:crypto";

/**
 * Kriptográfiailag véletlenszerű, URL-safe token (emailes megerősítő linkekhez,
 * jelszó-resethez és a refresh tokenhez).
 */
export function generateRawToken(bytes = 32): string {
    return randomBytes(bytes).toString("base64url");
}

/**
 * Sose a nyers tokent tároljuk adatbázisban — csak a hash-ét. Így egy DB-dump
 * esetén sem lehet visszafejteni és felhasználni az eredeti tokeneket.
 */
export function hashToken(rawToken: string): string {
    return createHash("sha256").update(rawToken).digest("hex");
}
