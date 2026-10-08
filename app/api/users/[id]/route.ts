import { withAuth } from "@/features/auth/lib/requireUser";
import { toUserId } from "@/features/auth/types/auth-index";
import { toPublicUserDTO } from "@/features/user/mappers/user.mapper";
import { getUserById } from "@/features/user/repositories/user";
import { HttpError } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withAuth<{ id: string }>(async (_request, { params }) => {
    const { id } = await params;

    const user = await getUserById(toUserId(id));

    // Nem aktív fiókot kifelé nem létezőként kezelünk.
    if (!user || user.status !== "ACTIVE") {
        throw new HttpError(404, "A felhasználó nem található.", "NOT_FOUND");
    }

    return NextResponse.json(toPublicUserDTO(user));
});
