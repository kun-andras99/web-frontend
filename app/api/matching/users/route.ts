import { requireUser } from "@/features/auth/lib/requireUser";
import { matchCandidatesQuerySchema } from "@/features/matching/schemas/matching.schema";
import { listMatchCandidates } from "@/features/matching/server/matching.service";
import { parseSearchParams, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

const NO_STORE = { "Cache-Control": "private, no-store" };

export const GET = withApiHandler(async (request) => {
    const user = await requireUser();
    const query = parseSearchParams(request, matchCandidatesQuerySchema);

    return NextResponse.json(await listMatchCandidates(user.id, query), {
        headers: NO_STORE,
    });
});
