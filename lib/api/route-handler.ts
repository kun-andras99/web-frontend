import "server-only";

import { NextResponse } from "next/server";
import { ZodError, type z } from "zod";

export class HttpError extends Error {
    constructor(
        readonly status: number,
        message: string,
        readonly code: string = "ERROR",
    ) {
        super(message);
        this.name = "HttpError";
    }
}

export const noContent = () => new NextResponse(null, { status: 204 });

// Next 15+: a params Promise. Next 14-ben is működik, mert az await sima értéken is ok.
type ApiRouteContext<TParams> = { params: Promise<TParams> };
type Handler<TParams> = (
    request: Request,
    context: ApiRouteContext<TParams>,
) => Promise<Response>;

function errorResponse(
    status: number,
    code: string,
    message: string,
    issues?: unknown,
) {
    return NextResponse.json(
        { error: { code, message, ...(issues !== undefined && { issues }) } },
        { status },
    );
}

/** Prisma hibakódok (P2002 stb.) duck-typing-gal, hogy a lib ne függjön a generált klienstől. */
function prismaErrorCode(error: unknown): string | undefined {
    if (typeof error !== "object" || error === null || !("code" in error))
        return;
    const { code } = error as { code: unknown };
    return typeof code === "string" && /^P\d{4}$/.test(code) ? code : undefined;
}

function toErrorResponse(error: unknown): Response {
    if (error instanceof HttpError) {
        return errorResponse(error.status, error.code, error.message);
    }

    if (error instanceof ZodError) {
        return errorResponse(
            400,
            "VALIDATION_ERROR",
            "Invalid request",
            error.issues.map((issue) => ({
                path: issue.path.map(String).join("."),
                message: issue.message,
            })),
        );
    }

    switch (prismaErrorCode(error)) {
        case "P2002":
            return errorResponse(409, "CONFLICT", "Resource already exists");
        case "P2025":
            return errorResponse(404, "NOT_FOUND", "Resource not found");
    }

    // ide jöhet Sentry / pino
    console.error("[api] unhandled error", error);
    return errorResponse(500, "INTERNAL", "Internal server error");
}

export function withApiHandler<TParams = unknown>(
    handler: Handler<TParams>,
): Handler<TParams> {
    return async (request, context) => {
        try {
            return await handler(request, context);
        } catch (error) {
            return toErrorResponse(error);
        }
    };
}

export async function parseJsonBody<T extends z.ZodType>(
    request: Request,
    schema: T,
): Promise<z.output<T>> {
    let json: unknown;
    try {
        json = await request.json();
    } catch {
        throw new HttpError(400, "Invalid JSON body", "INVALID_JSON");
    }
    return schema.parse(json);
}

export function parseSearchParams<T extends z.ZodType>(
    request: Request,
    schema: T,
): z.output<T> {
    const params = Object.fromEntries(new URL(request.url).searchParams);
    return schema.parse(params);
}

/**
 * Egységes 401 válasz azokhoz a route-okhoz, amik még nem `withAuth`-ot
 * használnak. Ugyanaz a formátum, mint a `withApiHandler` hibáié.
 */
export function unauthorizedResponse() {
    return errorResponse(401, "UNAUTHENTICATED", "Authentication required");
}
