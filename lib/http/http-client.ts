import { z } from "zod";
import { apiFetch } from "./auth-fetch";
import {
    ApiError,
    NetworkError,
    RequestTimeoutError,
    ResponseValidationError,
} from "./errors";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type QueryValue = string | number | boolean | null | undefined;

export interface RequestOptions<TSchema extends z.ZodType> {
    schema: TSchema;
    query?: Record<string, QueryValue>;
    body?: unknown;
    headers?: HeadersInit;
    signal?: AbortSignal;
    timeoutMs?: number;
}

type BodylessOptions<T extends z.ZodType> = Omit<RequestOptions<T>, "body">;

/** 204 No Content válaszokhoz. */
export const emptyResponse = z.undefined();

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const DEFAULT_TIMEOUT_MS = 15_000;

function buildUrl(path: string, query?: Record<string, QueryValue>): string {
    if (!query) return `${BASE_URL}${path}`;

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
            params.set(key, String(value));
        }
    }
    const qs = params.toString();
    return `${BASE_URL}${path}${qs ? `?${qs}` : ""}`;
}

/** AbortSignal.any fallback a régebbi böngészőkhöz. */
function combineSignals(signals: AbortSignal[]): AbortSignal {
    if (typeof AbortSignal.any === "function") return AbortSignal.any(signals);

    const controller = new AbortController();
    for (const signal of signals) {
        if (signal.aborted) {
            controller.abort(signal.reason);
            break;
        }
        signal.addEventListener(
            "abort",
            () => controller.abort(signal.reason),
            {
                once: true,
            },
        );
    }
    return controller.signal;
}

async function parseBody(response: Response): Promise<unknown> {
    if (response.status === 204) return undefined;

    // a hálózati / abort hiba itt továbbdobódik, csak a JSON parse hibát nyeljük el
    const text = await response.text();
    if (!text) return undefined;

    const isJson = (response.headers.get("content-type") ?? "").includes(
        "application/json",
    );
    if (!isJson) return text;

    try {
        return JSON.parse(text);
    } catch {
        return undefined;
    }
}

function extractError(body: unknown): { message?: string; code?: string } {
    if (typeof body === "object" && body !== null && "error" in body) {
        const { error } = body as {
            error?: { message?: string; code?: string };
        };
        return { message: error?.message, code: error?.code };
    }
    return {};
}

async function request<TSchema extends z.ZodType>(
    method: HttpMethod,
    path: string,
    options: RequestOptions<TSchema>,
): Promise<z.output<TSchema>> {
    const {
        schema,
        query,
        body,
        headers,
        signal,
        timeoutMs = DEFAULT_TIMEOUT_MS,
    } = options;

    const url = buildUrl(path, query);
    const timeoutSignal = AbortSignal.timeout(timeoutMs);
    const requestSignal = combineSignals(
        signal ? [signal, timeoutSignal] : [timeoutSignal],
    );

    let response: Response;
    let data: unknown;

    try {
        // apiFetch: 401 esetén egyszer refresh-el és újrapróbál (lásd auth-fetch.ts)
        response = await apiFetch(url, {
            method,
            credentials: "include",
            signal: requestSignal,
            headers: {
                Accept: "application/json",
                ...(body !== undefined && {
                    "Content-Type": "application/json",
                }),
                ...headers,
            },
            body: body !== undefined ? JSON.stringify(body) : undefined,
        });
        data = await parseBody(response);
    } catch (error) {
        // a hívó általi megszakítás változtatás nélkül megy tovább
        // (a React Query ezt kezeli, nem hiba)
        if (signal?.aborted) throw error;
        if (timeoutSignal.aborted)
            throw new RequestTimeoutError(url, timeoutMs);
        throw new NetworkError(url, error);
    }

    if (!response.ok) {
        const { message, code } = extractError(data);
        throw new ApiError(
            message ??
                `Request failed: ${response.status} ${response.statusText}`,
            response.status,
            code,
            data,
        );
    }

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
        throw new ResponseValidationError(url, parsed.error.issues);
    }
    return parsed.data;
}

export const http = {
    get: <T extends z.ZodType>(path: string, options: BodylessOptions<T>) =>
        request("GET", path, options),
    post: <T extends z.ZodType>(path: string, options: RequestOptions<T>) =>
        request("POST", path, options),
    put: <T extends z.ZodType>(path: string, options: RequestOptions<T>) =>
        request("PUT", path, options),
    patch: <T extends z.ZodType>(path: string, options: RequestOptions<T>) =>
        request("PATCH", path, options),
    delete: <T extends z.ZodType>(path: string, options: BodylessOptions<T>) =>
        request("DELETE", path, options),
};
