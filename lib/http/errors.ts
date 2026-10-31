export class ApiError extends Error {
    constructor(
        message: string,
        readonly status: number,
        readonly code?: string,
        readonly body?: unknown,
        /** a Retry-After fejlécből (429 / 503); másodperc */
        readonly retryAfterSeconds?: number,
    ) {
        super(message);
        this.name = "ApiError";
    }

    get isUnauthorized() {
        return this.status === 401;
    }
    get isForbidden() {
        return this.status === 403;
    }
    get isNotFound() {
        return this.status === 404;
    }
    get isConflict() {
        return this.status === 409;
    }
    get isRateLimited() {
        return this.status === 429;
    }
    /** A szerver zod hibái (VALIDATION_ERROR): [{ path, message }] */
    get issues(): { path: string; message: string }[] {
        const error =
            typeof this.body === "object" && this.body !== null
                ? (this.body as { error?: { issues?: unknown } }).error
                : undefined;
        return Array.isArray(error?.issues)
            ? (error.issues as { path: string; message: string }[])
            : [];
    }
}

/** Nincs hálózat / a szerver nem érhető el. */
export class NetworkError extends Error {
    constructor(
        readonly url: string,
        cause?: unknown,
    ) {
        super(`Network error while requesting ${url}`, { cause });
        this.name = "NetworkError";
    }
}

export class RequestTimeoutError extends Error {
    constructor(
        readonly url: string,
        readonly timeoutMs: number,
    ) {
        super(`Request to ${url} timed out after ${timeoutMs}ms`);
        this.name = "RequestTimeoutError";
    }
}

/** A backend olyan választ adott, ami nem felel meg a sémának. */
export class ResponseValidationError extends Error {
    constructor(
        readonly url: string,
        readonly issues: unknown,
    ) {
        super(`Invalid response shape from ${url}`);
        this.name = "ResponseValidationError";
    }
}
