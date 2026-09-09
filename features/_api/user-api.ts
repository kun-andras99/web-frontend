import { prisma } from "@/lib/prisma";
import { Users } from "../../prisma/generated/prisma";

export async function getUserById(id: string): Promise<Users | null> {
    const user = await prisma.users.findUnique({
        where: { id },
    });
    return user;
}

export async function getUserByName(username: string): Promise<Users | null> {
    const user = await prisma.users.findUnique({
        where: { username },
    });
    return user;
}

export async function getUsers(
    currentUserId?: string,
    page: number = 1,
    limit: number = 30,
    cursor?: string,
): Promise<Users[]> {
    const skip = (page - 1) * limit;

    const users = await prisma.users.findMany({
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
