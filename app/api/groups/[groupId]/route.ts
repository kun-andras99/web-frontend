import { requireUser } from "@/features/auth/lib/requireUser";
import {
    createGroupInputSchema,
    listGroupsQuerySchema,
    updateGroupInputSchema,
} from "@/features/groups/schemas/groups.schema";
import {
    createGroup,
    listGroups,
    deleteGroup,
    getGroupDetail,
    updateGroup,
} from "@/features/groups/server/groups.service";
import {
    parseJsonBody,
    parseSearchParams,
    withApiHandler,
    noContent,
} from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

type Params = { groupId: string };


export const POST = withApiHandler(async (request) => {
    const user = await requireUser();
    const input = await parseJsonBody(request, createGroupInputSchema);

    return NextResponse.json(await createGroup(user.id, input), {
        status: 201,
    });
});

export const PATCH = withApiHandler<Params>(async (request, { params }) => {
    const user = await requireUser();
    const { groupId } = await params;
    const input = await parseJsonBody(request, updateGroupInputSchema);

    return NextResponse.json(await updateGroup(groupId, user.id, input));
});

export const DELETE = withApiHandler<Params>(async (_request, { params }) => {
    const user = await requireUser();
    const { groupId } = await params;

    await deleteGroup(groupId, user.id);
    return noContent();
});