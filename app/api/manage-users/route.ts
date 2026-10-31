import { requireUser } from "@/features/auth/lib/requireUser";
import { managedUsersQuerySchema } from "@/features/manage-users/schemas/manage-users.schema";
import { listManagedUsers } from "@/features/manage-users/server/manage-users.service";
import { parseSearchParams, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler(async (request) => {
    const user = await requireUser();
    const query = parseSearchParams(request, managedUsersQuerySchema);

    return NextResponse.json(await listManagedUsers(user.id, query), {
        headers: { "Cache-Control": "private, no-store" },
    });
});
