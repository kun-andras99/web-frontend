import { requireUser } from "@/features/auth/lib/requireUser";
import {
    findConversationWithUser,
    openConversationWithUser,
} from "@/features/chat/server/chat.service";
import { withApiHandler } from "@/lib/api/route-handler";
import { enforceRateLimit } from "@/lib/security/enforce-rate-limit";
import { NextResponse } from "next/server";

type Params = { userId: string };
const NO_STORE = { "Cache-Control": "private, no-store" };

export const GET = withApiHandler<Params>(async (_request, { params }) => {
    const user = await requireUser();
    const { userId } = await params;

    return NextResponse.json(await findConversationWithUser(user.id, userId), {
        headers: NO_STORE,
    });
});

export const POST = withApiHandler<Params>(async (_request, { params }) => {
    const user = await requireUser();
    const { userId } = await params;

    await enforceRateLimit("chatOpen", `user:${user.id}`);
    const { conversationId, created } = await openConversationWithUser(
        user.id,
        userId,
    );

    return NextResponse.json(
        { conversationId },
        { status: created ? 201 : 200 },
    );
});
