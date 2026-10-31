import "server-only";

const encoder = new TextEncoder();
let keyPromise: Promise<CryptoKey> | undefined;

function getKey(): Promise<CryptoKey> {
    if (!keyPromise) {
        const secret = process.env.REALTIME_CHANNEL_SECRET;
        if (!secret || secret.length < 32) {
            throw new Error(
                "REALTIME_CHANNEL_SECRET hiányzik vagy rövidebb 32 karakternél",
            );
        }
        keyPromise = crypto.subtle.importKey(
            "raw",
            encoder.encode(secret),
            { name: "HMAC", hash: "SHA-256" },
            false,
            ["sign"],
        );
    }
    return keyPromise;
}

/** A user azonosítói nyilvánosak (profil-linkek), ezért a csatorna nevét HMAC adja, nem az id. */
export async function getInboxChannel(userId: string): Promise<string> {
    const signature = await crypto.subtle.sign(
        "HMAC",
        await getKey(),
        encoder.encode(`inbox:${userId}`),
    );
    return `inbox:${Buffer.from(signature).toString("base64url").slice(0, 32)}`;
}
