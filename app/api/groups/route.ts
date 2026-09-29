import { requireUser } from "@/features/auth/lib/requireUser";
import {
    // createGroup,
    listGroups,
} from "@/features/groups/server/groups.service";
import { NextResponse } from "next/server";

// type Params = { groupId: string };

export async function GET() {
    try {
        const user = await requireUser();
        // const query = parseSearchParams(request, listGroupsQuerySchema);

        return NextResponse.json(await listGroups(user.id), {
            headers: { "Cache-Control": "private, no-store" }, // user-specifikus adat
        });
    } catch (error) {
        console.error("GET /api/users failed:", error);

        return NextResponse.json(
            {
                message: "Failed to fetch users.",
            },
            {
                status: 500,
            },
        );
    }
}

// export const POST = withApiHandler(async (request) => {
//     const user = await requireUser();
//     const input = await parseJsonBody(request, createGroupInputSchema);

//     return NextResponse.json(await createGroup(user.id, input), {
//         status: 201,
//     });
// });

// export const PATCH = withApiHandler<Params>(async (request, { params }) => {
//     const user = await requireUser();
//     const { groupId } = await params;
//     const input = await parseJsonBody(request, updateGroupInputSchema);

//     return NextResponse.json(await updateGroup(groupId, user.id, input));
// });

// export const DELETE = withApiHandler<Params>(async (_request, { params }) => {
//     const user = await requireUser();
//     const { groupId } = await params;

//     await deleteGroup(groupId, user.id);
//     return noContent();
// });
