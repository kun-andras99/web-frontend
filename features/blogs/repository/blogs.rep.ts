import { prisma } from "@/lib/prisma";
import { BlogVisibility, type Prisma } from "../../../prisma/generated/prisma";

export const blogListSelect = {
    id: true,

    authorId: true,
    author: {
        select: {
            id: true,
            username: true,

            userData: {
                select: {
                    nickname: true,
                    avatarUrl: true,
                },
            },
        },
    },

    title: true,
    content: true,
    createdAt: true,
    updatedAt: true,
    visibility: true,

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

interface CreateBlogParams {
    authorId: string;
    title: string;
    content: string;
    visibility: BlogVisibility;
    tags?: string[];
}

export async function createBlog({
    authorId,
    title,
    content,
    visibility,
    tags = [],
}: CreateBlogParams) {
    return prisma.blog.create({
        data: {
            authorId,
            title,
            content,
            visibility,

            tags: {
                create: tags.map((name) => ({
                    name,
                })),
            },
        },

        select: blogListSelect,
    });
}

export const blogDetailSelect = {
    id: true,
    authorId: true,
    title: true,
    content: true,
    visibility: true,
    createdAt: true,
    updatedAt: true,

    author: {
        select: {
            id: true,
            username: true,

            userData: {
                select: {
                    nickname: true,
                    avatarUrl: true,
                },
            },
        },
    },

    tags: {
        select: {
            id: true,
            name: true,
        },
        orderBy: {
            name: "asc",
        },
    },

    _count: {
        select: {
            likes: true,
        },
    },
} satisfies Prisma.BlogSelect;

export type BlogDetailData = Prisma.BlogGetPayload<{
    select: typeof blogDetailSelect;
}>;

export async function findBlogById(blogId: string) {
    return prisma.blog.findUnique({
        where: {
            id: blogId,
        },
        select: blogDetailSelect,
    });
}
