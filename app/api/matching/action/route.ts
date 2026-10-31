import { requireUser } from "@/features/auth/lib/requireUser";
import { matchActionInputSchema } from "@/features/matching/schemas/matching.schema";
import { recordMatchAction } from "@/features/matching/server/matching.service";
import { parseJsonBody, withApiHandler } from "@/lib/api/route-handler";
import { enforceRateLimit } from "@/lib/security/enforce-rate-limit";
import { NextResponse } from "next/server";

export const POST = withApiHandler(async (request) => {
    const user = await requireUser();
    await enforceRateLimit("matchAction", `user:${user.id}`);

    const input = await parseJsonBody(request, matchActionInputSchema);

    return NextResponse.json(await recordMatchAction(user.id, input));
});
