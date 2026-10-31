import { createRefreshToken } from "@/features/auth/data/refresh-token";
import type { UserId } from "@/features/auth/types/auth-index";
import type { ClientMeta } from "./client-meta";
import { signAccessToken } from "./jwt";

export async function createSessionTokens(
    user: { id: string; email: string },
    meta: ClientMeta = {},
) {
    const userId = user.id as UserId;
    const { rawToken: refreshToken } = await createRefreshToken({
        userId,
        userAgent: meta.userAgent ?? null,
        ipAddress: meta.ipAddress ?? null,
    });
    const accessToken = await signAccessToken({
        sub: userId,
    });

    return { accessToken, refreshToken };
}
