import { withAuth } from "@/features/auth/lib/requireUser";
import {
    createGroupInputSchema,
    listGroupsQuerySchema,
} from "@/features/groups/schemas/groups.schema";
import {
    createGroup,
    listGroups,
} from "@/features/groups/server/groups.service";
import { parseJsonBody, parseSearchParams } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

/** GET /api/groups?cursor&limit&search — a bejelentkezett user szemszögéből. */
export const GET = withAuth(async (request, _context, user) => {
    const query = parseSearchParams(request, listGroupsQuerySchema);

    return NextResponse.json(await listGroups(user.id, query));
});

/** POST /api/groups — új csoport létrehozása (a kliens ide küldi). */
export const POST = withAuth(async (request, _context, user) => {
    const input = await parseJsonBody(request, createGroupInputSchema);

    return NextResponse.json(await createGroup(user.id, input), {
        status: 201,
    });
});
