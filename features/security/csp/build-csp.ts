import {
    CSP_ENFORCED,
    CSP_EXTRA_CONNECT_SOURCES,
    CSP_EXTRA_IMG_SOURCES,
    CSP_REPORT_PATH,
    isProduction,
} from "@/features/security/csp/config";

export interface CspContext {
    nonce: string;
    policy: string;
    /** Report-Only módban a válasz fejlécének neve más. */
    headerName:
        "Content-Security-Policy" | "Content-Security-Policy-Report-Only";
}

/** 128 bites véletlen, base64. A `btoa` és a `crypto` edge-en és Node-on is működik. */
function generateNonce(): string {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    return btoa(String.fromCharCode(...bytes));
}

/** Ha a NEXT_PUBLIC_API_URL külön domain, a böngészőnek csatlakoznia kell hozzá. Relatív URL-nél üres. */
function getApiOrigin(): string[] {
    const raw = process.env.NEXT_PUBLIC_API_URL;
    if (!raw) return [];
    try {
        return [new URL(raw).origin];
    } catch {
        return [];
    }
}

function buildPolicy(nonce: string): string {
    const directives: Record<string, string[]> = {
        "default-src": ["'self'"],

        // 'strict-dynamic': a nonce-os szkript által betöltött további szkriptek is futhatnak
        "script-src": [
            "'self'",
            `'nonce-${nonce}'`,
            "'strict-dynamic'",
            ...(isProduction ? [] : ["'unsafe-eval'"]), // csak a fejlesztői eszközök miatt
        ],

        // A Next.js saját <style> elemei nonce-ot kapnak. Fejlesztésben 'unsafe-inline' kell.
        "style-src": isProduction
            ? ["'self'", `'nonce-${nonce}'`]
            : ["'self'", "'unsafe-inline'"],

        // A `style={{ ... }}` attribútumokhoz (pl. a csoport színe, a bottom sheet mozgása).
        // Ezekből nem futhat szkript, ezért ez az engedmény alacsony kockázatú.
        "style-src-attr": ["'unsafe-inline'"],

        "img-src": ["'self'", "data:", "blob:", ...CSP_EXTRA_IMG_SOURCES],
        "font-src": ["'self'", "data:"],
        "connect-src": [
            "'self'",
            ...getApiOrigin(),
            ...CSP_EXTRA_CONNECT_SOURCES,
            ...(isProduction ? [] : ["ws:", "wss:"]), // fejlesztői hot reload
        ],
        "manifest-src": ["'self'"],
        "worker-src": ["'self'", "blob:"],

        "object-src": ["'none'"],
        "base-uri": ["'self'"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'none'"], // a meglévő X-Frame-Options: DENY megfelelője

        "report-uri": [CSP_REPORT_PATH],
    };

    // Report-Only módban a böngésző ezt a direktívát figyelmen kívül hagyja
    if (CSP_ENFORCED) directives["upgrade-insecure-requests"] = [];

    return Object.entries(directives)
        .map(([name, values]) =>
            values.length > 0 ? `${name} ${values.join(" ")}` : name,
        )
        .join("; ");
}

export function createCsp(): CspContext {
    const nonce = generateNonce();

    return {
        nonce,
        policy: buildPolicy(nonce),
        headerName: CSP_ENFORCED
            ? "Content-Security-Policy"
            : "Content-Security-Policy-Report-Only",
    };
}
