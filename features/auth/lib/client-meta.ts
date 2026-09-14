export interface ClientMeta {
    userAgent?: string | null;
    ipAddress?: string | null;
}

export function clientMetaFromHeaders(headersList: Headers): ClientMeta {
    const forwardedFor = headersList.get("x-forwarded-for");

    return {
        userAgent: headersList.get("user-agent"),
        ipAddress:
            forwardedFor?.split(",")[0]?.trim() ??
            headersList.get("x-real-ip"),
    };
}
