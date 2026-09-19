import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../prisma/generated/prisma";

const userInclude = {
    userData: true,
    userPreference: true,
    lookingFor: true,
    genderInterest: true,
    sexualityInterest: true,
} satisfies Prisma.UsersInclude;

export type UserWithProfile = Prisma.UsersGetPayload<{
    include: typeof userInclude;
}>;

export async function getAllUsers(): Promise<UserWithProfile[]> {
    return prisma.users.findMany({
        include: userInclude,
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getUserById(
    userId: string,
): Promise<UserWithProfile | null> {
    return prisma.users.findUnique({
        where: {
            id: userId,
        },
        include: userInclude,
    });
}

export async function getUserByUsername(
    username: string,
): Promise<UserWithProfile | null> {
    return prisma.users.findUnique({
        where: {
            username,
        },
        include: userInclude,
    });
}

export async function getUserByEmail(
    email: string,
): Promise<UserWithProfile | null> {
    return prisma.users.findUnique({
        where: {
            email,
        },
        include: userInclude,
    });
}
