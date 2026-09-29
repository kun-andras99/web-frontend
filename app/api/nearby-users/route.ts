import { requireUser } from "@/features/auth/lib/requireUser";
import { nearbyQuerySchema } from "@/features/nearby-users/schemas/nearby.schema";
import { listNearbyUsers } from "@/features/nearby-users/server/nearby.service";
import { parseSearchParams, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler(async (request) => {
    const user = await requireUser();
    const query = parseSearchParams(request, nearbyQuerySchema);

    return NextResponse.json(await listNearbyUsers(user.id, query), {
        headers: { "Cache-Control": "private, no-store" },
    });
});
