import { USE_BLOG_MOCK } from "@/features/blogs/config";
import { toBlogDTO } from "@/features/blogs/mapper/blogs.mapper";
import { findMockBlogs } from "@/features/blogs/repository/blogs.mock.repository";
import { createBlog, getBlogs } from "@/features/blogs/repository/blogs.rep";
import {
    blogsQuerySchema,
    createBlogInputSchema,
} from "@/features/blogs/schemas/blogs.schema";
import {
    HttpError,
    parseJsonBody,
    parseSearchParams,
    withApiHandler,
} from "@/lib/api/route-handler";
import { enforceRateLimit } from "@/lib/security/enforce-rate-limit";
import { NextResponse } from "next/server";

const NO_STORE = { "Cache-Control": "private, no-store" };

export const GET = withApiHandler(
    async (request, { user }) => {
        const { limit, cursor } = parseSearchParams(request, blogsQuerySchema);

        if (USE_BLOG_MOCK) {
            return NextResponse.json(await findMockBlogs({ limit, cursor }), {
                headers: NO_STORE,
            });
        }

        const blogs = await getBlogs({
            limit,
            cursor,
        });

        const hasNextPage = blogs.length > limit;

        const page = hasNextPage ? blogs.slice(0, limit) : blogs;

        return NextResponse.json(
            {
                blogs: page.map(toBlogDTO),
                nextCursor: hasNextPage ? (page.at(-1)?.id ?? null) : null,
                hasNextPage,
            },
            {
                headers: NO_STORE,
            },
        );
    },
    {
        auth: "required",
    },
);

export const POST = withApiHandler(
    async (request, { user }) => {
        await enforceRateLimit("blogWrite", `user:${user!.id}`);

        const input = await parseJsonBody(request, createBlogInputSchema);

        if (USE_BLOG_MOCK) {
            throw new HttpError(
                503,
                "Blog létrehozása mock módban nem érhető el.",
                "MOCK_MODE",
            );
        }

        const blog = await createBlog({
            authorId: user!.id,
            ...input,
        });

        return NextResponse.json(
            {
                blog: toBlogDTO(blog),
            },
            {
                status: 201,
            },
        );
    },
    {
        auth: "required",
    },
);
