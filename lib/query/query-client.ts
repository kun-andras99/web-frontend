import { ApiError, NetworkError, RequestTimeoutError } from "@/lib/http/errors";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

const LOGIN_PATH = "/sign-in";
/** Ugyanaz a paraméter, amit a proxy is használ az átirányításnál. */
const CALLBACK_PARAM = "callbackUrl";
const MAX_RETRIES = 2;

let isRedirectingToLogin = false;

/** Csak átmeneti hibáknál próbálkozunk újra; 4xx és validációs hibánál soha. */
export function shouldRetry(failureCount: number, error: unknown): boolean {
    if (failureCount >= MAX_RETRIES) return false;

    if (error instanceof ApiError) {
        return (
            error.status >= 500 || error.status === 408 || error.status === 429
        );
    }
    return (
        error instanceof NetworkError || error instanceof RequestTimeoutError
    );
}

function handleGlobalError(error: unknown, client: QueryClient) {
    if (!(error instanceof ApiError) || !error.isUnauthorized) return;
    if (typeof window === "undefined" || isRedirectingToLogin) return;
    if (window.location.pathname.startsWith(LOGIN_PATH)) return;

    isRedirectingToLogin = true;
    client.clear();

    const next = encodeURIComponent(
        window.location.pathname + window.location.search,
    );
    window.location.assign(`${LOGIN_PATH}?${CALLBACK_PARAM}=${next}`);
}

/** 429-nél a szerver Retry-After értékét követi (max. 30 mp), egyébként exponenciális visszalépés. */
export function retryDelay(failureCount: number, error: unknown): number {
    if (error instanceof ApiError && error.retryAfterSeconds) {
        return Math.min(error.retryAfterSeconds, 30) * 1000;
    }
    return Math.min(1000 * 2 ** failureCount, 10_000);
}

export function makeQueryClient(): QueryClient {
    const client: QueryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error) => handleGlobalError(error, client),
        }),
        mutationCache: new MutationCache({
            onError: (error) => handleGlobalError(error, client),
        }),
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
                retry: shouldRetry,
                retryDelay,
            },
        },
    });
    return client;
}
