import { requireUser } from "@/features/auth/lib/requireUser";
import { getLatestVisit } from "@/features/visitors/server/visitors.service";
import { withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler(async () => {
    const user = await requireUser();

    return NextResponse.json(await getLatestVisit(user.id), {
        headers: { "Cache-Control": "private, no-store" },
    });
});
