import { getCurrentUser } from "@/features/auth/lib/session";
import { USE_BLOG_MOCK } from "@/features/blogs/config";
import { toBlogDTO } from "@/features/blogs/mapper/blogs.mapper";
import { findMockBlogs } from "@/features/blogs/repository/blogs.mock.repository";
import { createBlog, getBlogs } from "@/features/blogs/repository/blogs.rep";
import { NextRequest, NextResponse } from "next/server";
import { BlogVisibility } from "../../../prisma/generated/prisma";

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

        console.log(USE_BLOG_MOCK);
        /*
         * MOCK
         */
        if (USE_BLOG_MOCK) {
            const result = await findMockBlogs({
                limit,
                cursor,
            });

            return NextResponse.json(result);
        }

        /*
         * DATABASE
         */
        const blogs = await getBlogs({
            limit,
            cursor,
        });

        const hasNextPage = blogs.length > limit;

        const pageBlogs = hasNextPage ? blogs.slice(0, limit) : blogs;

        const blogsDTO = pageBlogs.map(toBlogDTO);

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

export async function POST(request: NextRequest) {
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

        const body = await request.json();

        const title = typeof body.title === "string" ? body.title.trim() : "";

        const content =
            typeof body.content === "string" ? body.content.trim() : "";

        const visibility = body.visibility;

        const tags = Array.isArray(body.tags)
            ? body.tags
                  .filter(
                      (tag: unknown): tag is string => typeof tag === "string",
                  )
                  .map((tag: string) => tag.trim())
                  .filter(Boolean)
            : [];

        if (!title) {
            return NextResponse.json(
                {
                    message: "A blog címe kötelező.",
                },
                {
                    status: 400,
                },
            );
        }

        if (!content) {
            return NextResponse.json(
                {
                    message: "A blog tartalma kötelező.",
                },
                {
                    status: 400,
                },
            );
        }

        if (
            visibility !== BlogVisibility.PUBLIC &&
            visibility !== BlogVisibility.PRIVATE
        ) {
            return NextResponse.json(
                {
                    message: "Érvénytelen láthatóság.",
                },
                {
                    status: 400,
                },
            );
        }

        /*
         * A MOCK módot itt is kezelhetjük.
         *
         * Jelenleg a mock csak olvasásra szolgál,
         * ezért létrehozáskor jelezzük, hogy
         * mock módban ez nincs engedélyezve.
         */
        if (USE_BLOG_MOCK) {
            return NextResponse.json(
                {
                    message: "Blog létrehozása mock módban nem érhető el.",
                },
                {
                    status: 503,
                },
            );
        }

        const blog = await createBlog({
            authorId: currentUser.id,
            title,
            content,
            visibility,
            tags,
        });

        return NextResponse.json(
            {
                blog: toBlogDTO(blog),
            },
            {
                status: 201,
            },
        );
    } catch (error) {
        console.error("POST /api/blogs error:", error);

        return NextResponse.json(
            {
                message: "Hiba történt a blog létrehozásakor.",
            },
            {
                status: 500,
            },
        );
    }
}
