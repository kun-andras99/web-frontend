import { requireUser } from "@/features/auth/lib/requireUser";
import { getBlogById } from "@/features/blogs/api/getBlog";
import { HttpError, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

type Params = { id: string };

export const GET = withApiHandler<Params>(async (_request, { params }) => {
    await requireUser();
    const { id } = await params;

    const blog = await getBlogById(id);
    if (!blog) {
        throw new HttpError(404, "A blog nem található.", "NOT_FOUND");
    }

    return NextResponse.json(
        { blog },
        { headers: { "Cache-Control": "private, no-store" } },
    );
});
