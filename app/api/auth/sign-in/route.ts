import { authenticateCredentials } from "@/features/auth/lib/authenticate";
import { clientMetaFromHeaders } from "@/features/auth/lib/client-meta";
import { attachAuthCookies } from "@/features/auth/lib/cookies";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json().catch(() => ({}));
    const result = await authenticateCredentials(
        {
            identifier: body.identifier,
            password: body.password,
        },
        clientMetaFromHeaders(request.headers),
    );

    const response = NextResponse.json(result.state, {
        status: result.httpStatus,
    });

    if (result.ok) {
        attachAuthCookies(response, result.accessToken, result.refreshToken);
    }

    return response;
}
