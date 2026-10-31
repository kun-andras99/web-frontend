export const isProduction = process.env.NODE_ENV === "production";

/**
 * Élesítés: CSP_MODE=enforce. Amíg nincs beállítva, a policy csak jelent (Report-Only),
 * a böngésző nem tilt le semmit. Fejlesztői módban mindig csak jelent.
 */
export const CSP_ENFORCED = isProduction && process.env.CSP_MODE === "enforce";

/** Csak akkor kell, ha sima <img>-t használsz külső forrással. A next/image a /_next/image-en át tölt, ahhoz nem. */
export const CSP_EXTRA_IMG_SOURCES: readonly string[] = [];

/** Külső végpontok (monitoring, analitika), amelyekhez a böngésző csatlakozhat. */
export const CSP_EXTRA_CONNECT_SOURCES: readonly string[] = [];

export const CSP_REPORT_PATH = "/api/csp-reports";
