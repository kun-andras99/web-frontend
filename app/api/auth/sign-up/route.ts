import { clientMetaFromHeaders } from "@/features/auth/lib/client-meta";
import { attachAuthCookies } from "@/features/auth/lib/cookies";
import { registerCredentials } from "@/features/auth/lib/register";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json().catch(() => ({}));
    const result = await registerCredentials(
        {
            username: body.username,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
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
