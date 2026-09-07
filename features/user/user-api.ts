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