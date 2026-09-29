import { requireUser } from "@/features/auth/lib/requireUser";
import { leaveGroup } from "@/features/groups/server/groups.service";
import { noContent, withApiHandler } from "@/lib/api/route-handler";

export const POST = withApiHandler<{ groupId: string }>(
    async (_request, { params }) => {
        const user = await requireUser();
        const { groupId } = await params;

        await leaveGroup(groupId, user.id);
        return noContent();
    },
);
