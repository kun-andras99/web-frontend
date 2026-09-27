import { getCurrentUser } from "@/features/auth/lib/session";
import { toGroupDTO } from "@/features/groups/mapper/groups.mapper";
import { getGroups } from "@/features/groups/repository/groups.repository";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 },
            );
        }

        const groups = await getGroups();

        // console.log(groups);

        const groupsDTO = groups.map((group) => toGroupDTO(group));

        return NextResponse.json(groupsDTO);
    } catch {
        return NextResponse.json(
            {
                message: "Hiba történt a csoportok lekérésekor.",
            },
            { status: 500 },
        );
    }
}
