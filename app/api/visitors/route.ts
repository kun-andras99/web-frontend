import { requireUser } from "@/features/auth/lib/requireUser";
import { visitorsQuerySchema } from "@/features/visitors/schemas/visitors.schema";
import { listVisitors } from "@/features/visitors/server/visitors.service";
import { parseSearchParams, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler(async (request) => {
    const user = await requireUser();
    const query = parseSearchParams(request, visitorsQuerySchema);

    return NextResponse.json(await listVisitors(user.id, query), {
        headers: { "Cache-Control": "private, no-store" },
    });
});
