import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { getBlogById } from "@/features/blogs/api/getBlog";
import { BlogVisibility } from "../../../../prisma/generated/prisma";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(_request: Request, context: RouteContext) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.json(
                {
                    error: {
                        code: "UNAUTHENTICATED",
                        message: "Authentication required",
                    },
                },
                {
                    status: 401,
                },
            );
        }

        const { id } = await context.params;

        if (!id) {
            return NextResponse.json(
                {
                    message: "A blog azonosítója hiányzik.",
                },
                {
                    status: 400,
                },
            );
        }

        const blog = await getBlogById(id);

        if (!blog) {
            return NextResponse.json(
                {
                    message: "A blog nem található.",
                },
                {
                    status: 404,
                },
            );
        }

        const isOwner = currentUser?.id === blog.authorId;

        if (blog.visibility === BlogVisibility.PRIVATE && !isOwner) {
            return NextResponse.json(
                {
                    message: "Ez a blog privát.",
                },
                {
                    status: 403,
                },
            );
        }

        return NextResponse.json({
            blog,
        });
    } catch (error) {
        console.error("[GET /api/blogs/[id]]", error);

        return NextResponse.json(
            {
                message: "A blog lekérése sikertelen.",
            },
            {
                status: 500,
            },
        );
    }
}
