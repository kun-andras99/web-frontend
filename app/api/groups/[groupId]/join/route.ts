import { requireUser } from "@/features/auth/lib/requireUser";
import {
    cancelJoinRequest,
    joinGroup,
} from "@/features/groups/server/groups.service";
import { noContent, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const POST = withApiHandler<{ groupId: string }>(
    async (_request, { params }) => {
        const user = await requireUser();
        const { groupId } = await params;

        return NextResponse.json(await joinGroup(groupId, user.id));
    },
);

export const DELETE = withApiHandler<{ groupId: string }>(
    async (_request, { params }) => {
        const user = await requireUser();
        const { groupId } = await params;

        await cancelJoinRequest(groupId, user.id);
        return noContent();
    },
);
