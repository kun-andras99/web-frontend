import { requireUser } from "@/features/auth/lib/requireUser";
import { conversationsQuerySchema } from "@/features/messages/schemas/messages.schema";
import { listConversations } from "@/features/messages/server/messages.service";
import { parseSearchParams, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

const NO_STORE = { "Cache-Control": "private, no-store" };

export const GET = withApiHandler(async (request) => {
    const user = await requireUser();
    const query = parseSearchParams(request, conversationsQuerySchema);

    return NextResponse.json(await listConversations(user.id, query), {
        headers: NO_STORE,
    });
});
