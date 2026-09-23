import type { Prisma } from "../../../prisma/generated/prisma";

import { prisma } from "@/lib/prisma";

export const blogListSelect = {
    id: true,
    authorId: true,
    title: true,
    content: true,
    visibility: true,
    createdAt: true,
    updatedAt: true,

    tags: {
        select: {
            id: true,
            name: true,
        },
        orderBy: {
            createdAt: "asc",
        },
    },

    _count: {
        select: {
            likes: true,
        },
    },
} satisfies Prisma.BlogSelect;

export type BlogListData = Prisma.BlogGetPayload<{
    select: typeof blogListSelect;
}>;

interface GetBlogsParams {
    limit: number;
    cursor?: string;
}

export async function getBlogs({ limit, cursor }: GetBlogsParams) {
    return prisma.blog.findMany({
        take: limit + 1,

        ...(cursor && {
            skip: 1,
            cursor: {
                id: cursor,
            },
        }),

        select: blogListSelect,

        orderBy: {
            createdAt: "desc",
        },
    });
}
