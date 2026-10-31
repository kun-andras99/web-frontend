import { requireUser } from "@/features/auth/lib/requireUser";
import { updateRelationshipInputSchema } from "@/features/manage-users/schemas/manage-users.schema";
import { updateRelationship } from "@/features/manage-users/server/manage-users.service";
import { parseJsonBody, withApiHandler } from "@/lib/api/route-handler";
import { enforceRateLimit } from "@/lib/security/enforce-rate-limit";
import { NextResponse } from "next/server";

export const PATCH = withApiHandler<{ UserId: string }>(
    async (request, { params }) => {
        const user = await requireUser();
        // a mappa neve [UserId], ezért a param kulcsa is nagy U-val kezdődik
        const { UserId: userId } = await params;

        await enforceRateLimit("manageUsersWrite", `user:${user.id}`);
        const changes = await parseJsonBody(
            request,
            updateRelationshipInputSchema,
        );

        return NextResponse.json(
            await updateRelationship(user.id, userId, changes),
        );
    },
);
