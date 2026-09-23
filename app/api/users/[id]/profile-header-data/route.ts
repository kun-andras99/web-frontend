import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { toUserProfileHeaderDataDTO } from "@/features/user/mappers/user.mapper";
import { getUserProfileHeaderDataById } from "@/features/user/repositories/user";

export async function GET() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.json(
                {
                    message: "Unauthorized",
                },
                {
                    status: 401,
                },
            );
        }

        const user = await getUserProfileHeaderDataById(currentUser.id);

        if (!user) {
            return NextResponse.json(
                {
                    message: "A felhasználó nem található.",
                },
                {
                    status: 404,
                },
            );
        }

        return NextResponse.json(toUserProfileHeaderDataDTO(user));
    } catch {
        return NextResponse.json(
            {
                message: "Hiba történt a profil lekérésekor.",
            },
            {
                status: 500,
            },
        );
    }
}
