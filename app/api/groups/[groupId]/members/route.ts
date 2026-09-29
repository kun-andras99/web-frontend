import { requireUser } from "@/features/auth/lib/requireUser";
import { paginationQuerySchema } from "@/features/groups/schemas/groups.schema";
import { listMembers } from "@/features/groups/server/groups.service";
import { parseSearchParams, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler<{ groupId: string }>(
    async (request, { params }) => {
        const user = await requireUser();
        const { groupId } = await params;
        const query = parseSearchParams(request, paginationQuerySchema);

        return NextResponse.json(await listMembers(groupId, user.id, query), {
            headers: { "Cache-Control": "private, no-store" },
        });
    },
);
