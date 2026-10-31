import { requireUser } from "@/features/auth/lib/requireUser";
import { toUserProfileHeaderDataDTO } from "@/features/user/mappers/user.mapper";
import { getUserProfileHeaderDataById } from "@/features/user/repositories/user";
import { HttpError, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler(async () => {
    const currentUser = await requireUser();

    const user = await getUserProfileHeaderDataById(currentUser.id);
    if (!user) {
        throw new HttpError(404, "A felhasználó nem található.", "NOT_FOUND");
    }

    return NextResponse.json(toUserProfileHeaderDataDTO(user), {
        headers: { "Cache-Control": "private, no-store" },
    });
});
