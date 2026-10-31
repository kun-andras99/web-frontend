import { REFRESH_TOKEN_TTL_SECONDS } from "@/features/auth/lib/constants";
import { generateRawToken, hashToken } from "@/features/auth/lib/tokens";
import type { RefreshToken, UserId } from "@/features/auth/types/auth-index";
import { prisma } from "@/lib/prisma";
import "server-only";
import { Prisma } from "../../../prisma/generated/prisma";

type Db = Prisma.TransactionClient | typeof prisma;

interface CreateRefreshTokenParams {
    userId: UserId;
    userAgent: string | null;
    ipAddress: string | null;
}

export async function createRefreshToken(
    { userId, userAgent, ipAddress }: CreateRefreshTokenParams,
    db: Db = prisma,
) {
    const rawToken = generateRawToken() as RefreshToken;
    const expiresAt = new Date(Date.now() + REFRESH_TOKEN_TTL_SECONDS * 1000);

    const record = await db.refreshToken.create({
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
    return prisma.refreshToken.findUnique({
        where: { tokenHash },
    });
}

class RotationLostRace extends Error {}

/**
 * Atomi rotáció: vagy az új token létrejön ÉS a régi lecserélődik, vagy semmi sem történik.
 *
 * A régi token lefoglalása feltételes `updateMany` (`revokedAt: null`). Ha két kérés
 * egyszerre rotál, a második a sorzár miatt megvárja az elsőt, majd `count === 0`-t kap,
 * kivétel dobódik, és az ő tranzakciója (benne a már létrehozott új token) visszagördül.
 *
 * @returns null, ha a régi tokent közben egy párhuzamos kérés már lecserélte
 */
export async function rotateRefreshToken(params: {
    existingId: string;
    userId: UserId;
    userAgent: string | null;
    ipAddress: string | null;
}) {
    const { existingId, ...newTokenParams } = params;

    try {
        return await prisma.$transaction(async (tx) => {
            const created = await createRefreshToken(newTokenParams, tx);

            const { count } = await tx.refreshToken.updateMany({
                where: { id: existingId, revokedAt: null },
                data: { revokedAt: new Date(), replacedBy: created.id },
            });
            if (count === 0) throw new RotationLostRace();

            return created;
        });
    } catch (error) {
        if (error instanceof RotationLostRace) return null;
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

/**
 * Időzített feladatból (cron) hívd, pl. naponta: a lejárt és régen visszavont tokenek törlése.
 * A visszavont tokenek addig maradnak meg, amíg az újrafelhasználás-észlelés számít rájuk.
 */
export function deleteStaleRefreshTokens(olderThanDays = 30) {
    const cutoff = new Date(Date.now() - olderThanDays * 24 * 60 * 60 * 1000);
    return prisma.refreshToken.deleteMany({
        where: {
            OR: [{ expiresAt: { lt: cutoff } }, { revokedAt: { lt: cutoff } }],
        },
    });
}

export function markRefreshTokenReplaced(id: string, replacedById: string) {
    return prisma.refreshToken.update({
        where: { id },
        data: { revokedAt: new Date(), replacedBy: replacedById },
    });
}
