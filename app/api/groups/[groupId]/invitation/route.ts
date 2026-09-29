import { requireUser } from "@/features/auth/lib/requireUser";
import { respondInvitationInputSchema } from "@/features/groups/schemas/groups.schema";
import { respondToInvitation } from "@/features/groups/server/groups.service";
import { parseJsonBody, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const PATCH = withApiHandler<{ groupId: string }>(
    async (request, { params }) => {
        const user = await requireUser();
        const { groupId } = await params;
        const { action } = await parseJsonBody(
            request,
            respondInvitationInputSchema,
        );

        await respondToInvitation(groupId, user.id, action);
        return new NextResponse(null, { status: 204 });
    },
);
