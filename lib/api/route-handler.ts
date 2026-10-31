import "server-only";

import { NextResponse } from "next/server";
import { ZodError, type z } from "zod";

import { requireUser } from "@/features/auth/lib/requireUser";
import { SessionUser } from "@/features/auth/types/auth-index";
import { UserRole } from "../../prisma/generated/prisma";

export class HttpError extends Error {
    constructor(
        readonly status: number,
        message: string,
        readonly code: string = "ERROR",
        readonly headers?: Record<string, string>,
    ) {
        super(message);
        this.name = "HttpError";
    }
}

export type AuthConfig =
    | "public"
    | "required"
    | {
          roles: readonly UserRole[];
      };

export interface ApiRouteContext<TParams = unknown> {
    params: Promise<TParams>;
}

export interface ApiHandlerContext<TParams = unknown> {
    params: Promise<TParams>;
    user: SessionUser | null;
}

type Handler<TParams> = (
    request: Request,
    context: ApiHandlerContext<TParams>,
) => Promise<Response>;

export const noContent = () => new NextResponse(null, { status: 204 });

function errorResponse(
    status: number,
    code: string,
    message: string,
    issues?: unknown,
    headers?: Record<string, string>,
) {
    return NextResponse.json(
        {
            error: {
                code,
                message,
                ...(issues !== undefined && { issues }),
            },
        },
        {
            status,
            headers,
        },
    );
}

/**
 * Prisma hibakódok duck-typing-gal,
 * hogy a lib ne függjön közvetlenül a generált Prisma kliens hibáitól.
 */
function prismaErrorCode(error: unknown): string | undefined {
    if (typeof error !== "object" || error === null || !("code" in error)) {
        return;
    }

    const { code } = error as { code: unknown };

    return typeof code === "string" && /^P\d{4}$/.test(code) ? code : undefined;
}

function toErrorResponse(error: unknown): Response {
    if (error instanceof HttpError) {
        return errorResponse(
            error.status,
            error.code,
            error.message,
            undefined,
            error.headers,
        );
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

    console.error("[api] unhandled error", error);

    return errorResponse(500, "INTERNAL", "Internal server error");
}

async function resolveAuth(auth: AuthConfig): Promise<SessionUser | null> {
    if (auth === "public") {
        return null;
    }

    const user = await requireUser();

    if (auth === "required") {
        return user;
    }

    if (!auth.roles.includes(user.role)) {
        throw new HttpError(
            403,
            "You do not have permission to perform this action.",
            "FORBIDDEN",
        );
    }

    return user;
}

export function withApiHandler<TParams = unknown>(
    handler: Handler<TParams>,
    options?: {
        auth?: AuthConfig;
    },
): (request: Request, context: ApiRouteContext<TParams>) => Promise<Response> {
    return async (request, context) => {
        try {
            const auth = options?.auth ?? "public";

            const user = await resolveAuth(auth);

            return await handler(request, {
                params: context.params,
                user,
            });
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
