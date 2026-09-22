"use server";

import {
    findRefreshTokenByRawValue,
    revokeRefreshTokenById,
} from "@/features/auth/data/refresh-token";
import { GUEST_ROUTES } from "@/features/auth/lib/constants";
import {
    clearAuthCookies,
    getRefreshTokenFromCookies,
} from "@/features/auth/lib/cookies";
import { redirect } from "next/navigation";

export async function signOutAction(): Promise<void> {
    const rawRefreshToken = await getRefreshTokenFromCookies();

    if (rawRefreshToken) {
        const existing = await findRefreshTokenByRawValue(rawRefreshToken);
        if (existing && !existing.revokedAt) {
            await revokeRefreshTokenById(existing.id);
        }
    }

    await clearAuthCookies();
    redirect(GUEST_ROUTES.home);
}
