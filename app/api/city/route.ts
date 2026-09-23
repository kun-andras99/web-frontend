import { NextResponse } from "next/server";

import { getCurrentUser } from "@/features/auth/lib/session";
import { getCurrentUserCityStats } from "@/features/city/repository/city.repository";

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

        const stats = await getCurrentUserCityStats(currentUser.id);

        if (!stats) {
            return NextResponse.json(
                {
                    message: "Nincs beállítva az alkalmazási város.",
                },
                {
                    status: 404,
                },
            );
        }

        return NextResponse.json(stats);
    } catch (error) {
        console.error("GET /api/city error:", error);

        return NextResponse.json(
            {
                message: "Hiba történt a városi statisztikák lekérésekor.",
            },
            {
                status: 500,
            },
        );
    }
}
