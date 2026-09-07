import { prisma } from "@/lib/prisma";
import type { User } from "../../prisma/generated/prisma/client";

export async function getUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
}

export async function getUserByName(username: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where: { username },
    });
    return user;
}

export async function getUsers(
    currentUserId?: string,
    page: number = 1,
    limit: number = 30,
    cursor?: string,
): Promise<User[]> {
    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
        where: {
            ...(currentUserId && {
                id: {
                    not: currentUserId,
                },
            }),
        },

        skip,
        take: limit,

        include: {
            userData: true,
            userPreference: true,
            lookingFor: true,
            genderInterest: true,
            sexualityInteres: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return users;
}
