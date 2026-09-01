import { prisma } from "@/lib/prisma";
import type { User } from "../../prisma/generated/prisma/client";

export async function getUserById(id: number): Promise<User | null> {
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

export async function getAllUsers(): Promise<User[] | null> {
    return prisma.user.findMany(
        {
            include: {
                userData: true,
                userPreference: true,
                lookingFor: true,
                interestedIn: true,
            },
        },
        // {
        // orderBy: {
        //     createdAt: "desc",
        // },
        // }
    );
}
