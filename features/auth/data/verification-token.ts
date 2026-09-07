import {
    EMAIL_VERIFICATION_TTL_MS,
    PASSWORD_RESET_TTL_MS,
} from "@/features/auth/lib/constants";
import { generateRawToken, hashToken } from "@/features/auth/lib/tokens";
import type { UserId } from "@/features/auth/types/auth-index";
import { prisma } from "@/lib/prisma";
import "server-only";
import { VerificationTokenType } from "../../../prisma/generated/prisma/enums";

async function createVerificationToken(
    userId: UserId,
    type: VerificationTokenType,
    ttlMs: number,
): Promise<string> {
    // A korábbi, ugyanolyan típusú tokeneket érvénytelenítjük, hogy mindig csak
    // a legutóbb kiküldött link működjön.
    await prisma.verificationToken.deleteMany({ where: { userId, type } });

    const rawToken = generateRawToken();
    await prisma.verificationToken.create({
        data: {
            tokenHash: hashToken(rawToken),
            userId,
            type,
            expiresAt: new Date(Date.now() + ttlMs),
        },
    });

    return rawToken;
}

export function createEmailVerificationToken(userId: UserId) {
    return createVerificationToken(
        userId,
        "EMAIL_VERIFICATION",
        EMAIL_VERIFICATION_TTL_MS,
    );
}

export function createPasswordResetToken(userId: UserId) {
    return createVerificationToken(
        userId,
        "PASSWORD_RESET",
        PASSWORD_RESET_TTL_MS,
    );
}

export function findValidVerificationToken(
    rawToken: string,
    type: VerificationTokenType,
) {
    return prisma.verificationToken.findFirst({
        where: {
            tokenHash: hashToken(rawToken),
            type,
            expiresAt: { gt: new Date() },
        },
    });
}

export function deleteVerificationTokenById(id: string) {
    return prisma.verificationToken.delete({ where: { id } });
}
