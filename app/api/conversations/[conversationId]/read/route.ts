import { requireUser } from "@/features/auth/lib/requireUser";
import { markConversationRead } from "@/features/chat/server/chat.service";
import { noContent, withApiHandler } from "@/lib/api/route-handler";

export const POST = withApiHandler<{ conversationId: string }>(
    async (_request, { params }) => {
        const user = await requireUser();
        const { conversationId } = await params;

        await markConversationRead(conversationId, user.id);
        return noContent();
    },
);
