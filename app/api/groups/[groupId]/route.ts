import { withAuth } from "@/features/auth/lib/requireUser";
import { updateGroupInputSchema } from "@/features/groups/schemas/groups.schema";
import {
    deleteGroup,
    getGroupDetail,
    updateGroup,
} from "@/features/groups/server/groups.service";
import { noContent, parseJsonBody } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

type Params = { groupId: string };

/** GET /api/groups/:groupId — csoport részletei (a user láthatósága szerint). */
export const GET = withAuth<Params>(async (_request, { params }, user) => {
    const { groupId } = await params;

    return NextResponse.json(await getGroupDetail(groupId, user.id));
});

export const PATCH = withAuth<Params>(async (request, { params }, user) => {
    const { groupId } = await params;
    const input = await parseJsonBody(request, updateGroupInputSchema);

    return NextResponse.json(await updateGroup(groupId, user.id, input));
});

export const DELETE = withAuth<Params>(async (_request, { params }, user) => {
    const { groupId } = await params;

    await deleteGroup(groupId, user.id);
    return noContent();
});
