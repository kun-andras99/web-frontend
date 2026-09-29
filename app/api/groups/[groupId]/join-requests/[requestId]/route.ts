import { requireUser } from "@/features/auth/lib/requireUser";
import { respondJoinRequestInputSchema } from "@/features/groups/schemas/groups.schema";
import { respondToJoinRequest } from "@/features/groups/server/groups.service";
import {
    noContent,
    parseJsonBody,
    withApiHandler,
} from "@/lib/api/route-handler";

export const PATCH = withApiHandler<{ groupId: string; requestId: string }>(
    async (request, { params }) => {
        const user = await requireUser();
        const { groupId, requestId } = await params;
        const { action } = await parseJsonBody(
            request,
            respondJoinRequestInputSchema,
        );

        await respondToJoinRequest(groupId, user.id, requestId, action);
        return noContent();
    },
);
