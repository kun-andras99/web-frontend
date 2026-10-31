import { requireUser } from "@/features/auth/lib/requireUser";
import { getConversation } from "@/features/chat/server/chat.service";
import { withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler<{ conversationId: string }>(
    async (_request, { params }) => {
        const user = await requireUser();
        const { conversationId } = await params;

        return NextResponse.json(
            await getConversation(conversationId, user.id),
            {
                headers: { "Cache-Control": "private, no-store" },
            },
        );
    },
);
