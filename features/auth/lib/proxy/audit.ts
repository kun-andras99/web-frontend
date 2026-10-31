import { getRequestMeta } from "@/features/auth/lib/proxy/http";
import type { NextRequest } from "next/server";

export type AuditEvent =
    | "session.refresh_token_reuse_detected"
    | "session.refresh_token_expired"
    | "session.tokens_rotated"
    | "session.ip_or_ua_changed"
    | "auth.redirect_to_signin"
    | "auth.access_denied"
    | "auth.profile_incomplete"
    | "api.unauthorized"
    | "api.forbidden";

interface AuditDetails {
    userId?: string;
    metadata?: Record<string, unknown>;
}

/**
 * Strukturált audit log stdoutra. Itt egy helyen cserélhető külső szolgáltatásra
 * (Axiom, Datadog, Sentry). Az IP és a user-agent személyes adat: állíts be megőrzési időt.
 */
export function audit(
    request: NextRequest,
    event: AuditEvent,
    details: AuditDetails = {},
): void {
    const { ip, userAgent } = getRequestMeta(request);

    console.info(
        JSON.stringify({
            audit: true,
            event,
            ...details,
            pathname: request.nextUrl.pathname,
            ip,
            userAgent,
            timestamp: new Date().toISOString(),
        }),
    );
}
