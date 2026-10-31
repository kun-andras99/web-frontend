import { Redis } from "@upstash/redis";

let client: Redis | null | undefined;

/**
 * Productionben beállítás nélkül a védelem kikapcsol (fail-open), de hangosan naplózunk.
 * Ha ezt szigorítani akarod, itt dobj hibát.
 */
export function getRedis(): Redis | null {
    if (client !== undefined) return client;

    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (url && token) {
        client = new Redis({ url, token });
    } else {
        if (process.env.NODE_ENV === "production") {
            console.error(
                "[security] Upstash Redis nincs beállítva: rate limit és session cache kikapcsolva!",
            );
        }
        client = null;
    }
    return client;
}
