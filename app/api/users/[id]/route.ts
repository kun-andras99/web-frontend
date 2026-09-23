import { toUserId } from "@/features/auth/types/auth-index";
import { toPublicUserDTO } from "@/features/user/mappers/user.mapper";

import { getUserById } from "@/features/user/repositories/user";
import { NextResponse } from "next/server";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;

        const user = await getUserById(toUserId(id));

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

        return NextResponse.json(toPublicUserDTO(user));
    } catch {
        return NextResponse.json(
            {
                message: "Hiba történt a felhasználó lekérésekor.",
            },
            {
                status: 500,
            },
        );
    }
}
