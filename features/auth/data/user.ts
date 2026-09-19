import type { UserId } from "@/features/auth/types/auth-index";
import { prisma } from "@/lib/prisma";
import "server-only";

export function getUserByEmail(email: string) {
    return prisma.users.findUnique({ where: { email } });
}

export function getUserByUsername(username: string) {
    return prisma.users.findUnique({ where: { username } });
}

export function getUserById(id: UserId) {
    return prisma.users.findUnique({ where: { id } });
}

export function createUser(input: {
    username: string;
    email: string;
    passwordHash: string;
}) {
    return prisma.users.create({
        data: {
            username: input.username,
            email: input.email,
            passwordHash: input.passwordHash,
        },
    });
}

export function markEmailAsVerified(id: UserId) {
    return prisma.users.update({
        where: { id },
        data: { emailVerified: new Date() },
    });
}

export function updateUserPassword(id: UserId, passwordHash: string) {
    return prisma.users.update({
        where: { id },
        data: { passwordHash },
    });
}

export async function getUserByIdentifier(identifier: string) {
    const value = identifier.trim();

    return prisma.users.findFirst({
        where: {
            OR: [
                {
                    email: value.toLowerCase(),
                },
                {
                    username: value,
                },
            ],
        },
    });
}