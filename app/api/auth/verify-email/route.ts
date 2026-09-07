import { markEmailAsVerified } from "@/features/auth/data/user";
import {
    deleteVerificationTokenById,
    findValidVerificationToken,
} from "@/features/auth/data/verification-token";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import type { UserId } from "@/features/auth/types/auth-index";
import { NextRequest, NextResponse } from "next/server";

// Node runtime (alapértelmezett Route Handlereknél) — a Prisma Client itt fut, nem Edge-en.
export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get("token");
    const redirectUrl = new URL(AUTH_ROUTES.signIn, request.url);

    if (!token) {
        redirectUrl.searchParams.set("verify-error", "missing-token");
        return NextResponse.redirect(redirectUrl);
    }

    const verificationToken = await findValidVerificationToken(
        token,
        "EMAIL_VERIFICATION",
    );
    if (!verificationToken) {
        redirectUrl.searchParams.set("verify-error", "invalid-or-expired");
        return NextResponse.redirect(redirectUrl);
    }

    await markEmailAsVerified(verificationToken.userId as UserId);
    await deleteVerificationTokenById(verificationToken.id);

    redirectUrl.searchParams.set("verified", "1");
    return NextResponse.redirect(redirectUrl);
}
