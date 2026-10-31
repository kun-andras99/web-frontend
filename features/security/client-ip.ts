/**
 * Csak akkor megbízható, ha a kérés egy olyan proxy mögül jön, ami felülírja az
 * x-forwarded-for headert (pl. Vercel, Cloudflare). Egyébként a kliens hamisíthatja.
 */
export function getIpFromHeaders(headers: Headers): string | null {
    const forwardedFor = headers.get("x-forwarded-for");
    if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? null;
    return headers.get("x-real-ip");
}

/** SHA-256 (Web Crypto, edge-en és Node-on is működik). Az e-mail nem kerül nyersen a Redisbe. */
export async function hashIdentifier(value: string): Promise<string> {
    const data = new TextEncoder().encode(value.trim().toLowerCase());
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest), (byte) =>
        byte.toString(16).padStart(2, "0"),
    )
        .join("")
        .slice(0, 32);
}
