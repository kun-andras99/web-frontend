import { requireUser } from "@/features/auth/lib/requireUser";
import {
    messagesQuerySchema,
    sendMessageInputSchema,
} from "@/features/chat/schemas/chat.schema";
import { listMessages, sendMessage } from "@/features/chat/server/chat.service";
import {
    parseJsonBody,
    parseSearchParams,
    withApiHandler,
} from "@/lib/api/route-handler";
import { enforceRateLimit } from "@/lib/security/enforce-rate-limit";
import { NextResponse } from "next/server";

type Params = { conversationId: string };

export const GET = withApiHandler<Params>(async (request, { params }) => {
    const user = await requireUser();
    const { conversationId } = await params;
    const query = parseSearchParams(request, messagesQuerySchema);

    return NextResponse.json(
        await listMessages(conversationId, user.id, query),
        {
            headers: { "Cache-Control": "private, no-store" },
        },
    );
});

export const POST = withApiHandler<Params>(async (request, { params }) => {
    const user = await requireUser();
    const { conversationId } = await params;

    await enforceRateLimit("chatSend", `user:${user.id}`);
    const input = await parseJsonBody(request, sendMessageInputSchema);

    return NextResponse.json(
        await sendMessage(conversationId, user.id, input),
        { status: 201 },
    );
});
