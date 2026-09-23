import type { Prisma } from "../../../prisma/generated/prisma";

import { prisma } from "@/lib/prisma";

export const groupListSelect = {
    id: true,
    name: true,
    description: true,
    visibility: true,
    creatorId: true,
    createdAt: true,
    updatedAt: true,

    _count: {
        select: {
            members: true,
        },
    },
} satisfies Prisma.GroupSelect;

export type GroupListData = Prisma.GroupGetPayload<{
    select: typeof groupListSelect;
}>;

export async function getGroups() {
    return prisma.group.findMany({
        select: groupListSelect,
        orderBy: {
            createdAt: "desc",
        },
    });
}
