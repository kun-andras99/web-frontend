import { REFRESH_TOKEN_TTL_SECONDS } from "@/features/auth/lib/constants";
import { generateRawToken, hashToken } from "@/features/auth/lib/tokens";
import type { RefreshToken, UserId } from "@/features/auth/types/auth-index";
import { prisma } from "@/lib/prisma";
import "server-only";

interface CreateRefreshTokenInput {
    userId: UserId;
    userAgent?: string | null;
    ipAddress?: string | null;
}

export async function createRefreshToken({
    userId,
    userAgent,
    ipAddress,
}: CreateRefreshTokenInput): Promise<{
    id: string;
    rawToken: RefreshToken;
    expiresAt: Date;
}> {
    const rawToken = generateRawToken() as RefreshToken;
    const expiresAt = new Date(Date.now() + REFRESH_TOKEN_TTL_SECONDS * 1000);

    const record = await prisma.refreshToken.create({
        data: {
            tokenHash: hashToken(rawToken),
            userId,
            expiresAt,
            userAgent: userAgent ?? undefined,
            ipAddress: ipAddress ?? undefined,
        },
    });

    return { id: record.id, rawToken, expiresAt };
}

/** A bemenet egy MÉG NEM ellenőrzött, cookie-ból/requestből származó nyers string. */
export async function findRefreshTokenByRawValue(rawToken: string) {
    const tokenHash = hashToken(rawToken);

    console.log("TOKEN HASH:", tokenHash);

    try {
        const token = await prisma.refreshToken.findUnique({
            where: {
                tokenHash,
            },
        });

        console.log("REFRESH TOKEN:", token);

        return token;
    } catch (error) {
        console.error("REFRESH TOKEN DB ERROR:", error);
        throw error;
    }
}

export function revokeRefreshTokenById(id: string) {
    return prisma.refreshToken.update({
        where: { id },
        data: { revokedAt: new Date() },
    });
}

export function revokeAllRefreshTokensForUser(userId: UserId) {
    return prisma.refreshToken.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: new Date() },
    });
}

export function markRefreshTokenReplaced(id: string, replacedById: string) {
    return prisma.refreshToken.update({
        where: { id },
        data: { revokedAt: new Date(), replacedBy: replacedById },
    });
}
