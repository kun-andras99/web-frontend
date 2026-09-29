import { requireUser } from "@/features/auth/lib/requireUser";
import { changeMemberRoleInputSchema } from "@/features/groups/schemas/groups.schema";
import {
    changeMemberRole,
    removeMember,
} from "@/features/groups/server/groups.service";
import {
    noContent,
    parseJsonBody,
    withApiHandler,
} from "@/lib/api/route-handler";

type Params = { groupId: string; userId: string };

export const PATCH = withApiHandler<Params>(async (request, { params }) => {
    const user = await requireUser();
    const { groupId, userId } = await params;
    const { role } = await parseJsonBody(request, changeMemberRoleInputSchema);

    await changeMemberRole(groupId, user.id, userId, role);
    return noContent();
});

export const DELETE = withApiHandler<Params>(async (_request, { params }) => {
    const user = await requireUser();
    const { groupId, userId } = await params;

    await removeMember(groupId, user.id, userId);
    return noContent();
});
