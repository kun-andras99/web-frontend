import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { toBlogDTO } from "@/features/blogs/mapper/blogs.mapper";
import { getBlogs } from "@/features/blogs/repository/blogs.rep";

const DEFAULT_LIMIT = 5;
const MAX_LIMIT = 20;

export async function GET(request: NextRequest) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.json(
                {
                    message: "Unauthorized",
                },
                {
                    status: 401,
                },
            );
        }

        const { searchParams } = new URL(request.url);

        const requestedLimit = Number(
            searchParams.get("limit") ?? DEFAULT_LIMIT,
        );

        const limit = Math.min(Math.max(requestedLimit, 1), MAX_LIMIT);

        const cursor = searchParams.get("cursor") ?? undefined;

        const blogs = await getBlogs({
            limit,
            cursor,
        });

        const hasNextPage = blogs.length > limit;

        const pageBlogs = hasNextPage ? blogs.slice(0, limit) : blogs;

        const blogsDTO = pageBlogs.map((blog) => toBlogDTO(blog));

        const nextCursor = hasNextPage
            ? (pageBlogs[pageBlogs.length - 1]?.id ?? null)
            : null;

        return NextResponse.json({
            blogs: blogsDTO,
            nextCursor,
            hasNextPage,
        });
    } catch (error) {
        console.error("GET /api/blogs error:", error);

        return NextResponse.json(
            {
                message: "Hiba történt a blogok lekérésekor.",
            },
            {
                status: 500,
            },
        );
    }
}
