import type { UserId } from "@/features/auth/types/auth-index";
import { prisma } from "@/lib/prisma";
import "server-only";
import { Prisma } from "../../../prisma/generated/prisma";

export function getUserByEmail(email: string) {
    return prisma.users.findUnique({ where: { email } });
}

export function getUserByUsername(username: string) {
    return prisma.users.findUnique({ where: { username } });
}

export function getUserById(id: UserId) {
    return prisma.users.findUnique({
        where: {
            id,
        },

        select: {
            id: true,
            email: true,
            username: true,
            emailVerified: true,
            role: true,

            userPreference: {
                select: {
                    id: true,
                },
            },
        },
    });
}

export const userProfileHeaderDataSelect = {
    id: true,

    userData: {
        select: {
            nickname: true,
            gender: true,
            avatarUrl: true,
            birth: true,
            sexuality: true,
            appCity: true,
            description: true,
            bio: true,
            transStatus: true,
            countryCode: true,
            region: true,
            city: true,
        },
    },
} satisfies Prisma.UsersSelect;

export type UserProfileHeaderData = Prisma.UsersGetPayload<{
    select: typeof userProfileHeaderDataSelect;
}>;

export function getUserProfileHeaderDataById(id: UserId) {
    return prisma.users.findUnique({
        where: {
            id,
        },
        select: userProfileHeaderDataSelect,
    });
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
