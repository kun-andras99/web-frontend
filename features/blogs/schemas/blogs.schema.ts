import { z } from "zod";

export const BLOGS_DEFAULT_PAGE_SIZE = 5;
export const BLOGS_MAX_PAGE_SIZE = 20;

export const blogVisibilitySchema = z.enum(["PUBLIC", "PRIVATE"]);

// ---- kérés (a route és a kliens is ezt használja) ----

export const blogsQuerySchema = z.object({
    cursor: z.string().min(1).max(200).optional(),
    limit: z.coerce
        .number()
        .int()
        .min(1)
        .max(BLOGS_MAX_PAGE_SIZE)
        .default(BLOGS_DEFAULT_PAGE_SIZE),
});

export const createBlogInputSchema = z.object({
    title: z.string().trim().min(1, "A blog címe kötelező.").max(200),
    content: z.string().trim().min(1, "A blog tartalma kötelező.").max(20_000),
    visibility: blogVisibilitySchema,
    tags: z
        .array(z.string().trim().min(1).max(40))
        .max(10)
        .default([]),
});

// ---- válasz ----

export const blogAuthorSchema = z.object({
    id: z.string(),
    username: z.string(),
    nickname: z.string().nullable(),
    avatarUrl: z.string().nullable(),
});

export const blogSchema = z.object({
    id: z.string(),
    authorId: z.string(),
    author: blogAuthorSchema,
    title: z.string(),
    content: z.string(),
    visibility: blogVisibilitySchema,
    tags: z.array(z.object({ id: z.string(), name: z.string() })),
    likeCount: z.number().int().nonnegative(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const blogsPageSchema = z.object({
    blogs: z.array(blogSchema),
    nextCursor: z.string().nullable(),
    hasNextPage: z.boolean(),
});

export const blogResponseSchema = z.object({ blog: blogSchema });

export type BlogsQuery = z.output<typeof blogsQuerySchema>;
export type CreateBlogBody = z.input<typeof createBlogInputSchema>;
