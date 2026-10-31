import { requireUser } from "@/features/auth/lib/requireUser";
import { getInboxChannelFor } from "@/features/messages/server/messages.service";
import { withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler(async () => {
    const user = await requireUser();

    return NextResponse.json(await getInboxChannelFor(user.id), {
        headers: { "Cache-Control": "private, no-store" },
    });
});
