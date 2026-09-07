import type { UserId } from "@/features/auth/types/auth-index";
import { prisma } from "@/lib/prisma";
import "server-only";

export function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
}

export function getUserById(id: UserId) {
    return prisma.user.findUnique({ where: { id } });
}

export function createUser(input: {
    username: string;
    email: string;
    passwordHash: string;
}) {
    return prisma.user.create({
        data: {
            username: input.username,
            email: input.email,
            passwordHash: input.passwordHash,
        },
    });
}

export function markEmailAsVerified(id: UserId) {
    return prisma.user.update({
        where: { id },
        data: { emailVerified: new Date() },
    });
}

export function updateUserPassword(id: UserId, passwordHash: string) {
    return prisma.user.update({
        where: { id },
        data: { passwordHash },
    });
}
