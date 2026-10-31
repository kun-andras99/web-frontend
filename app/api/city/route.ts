import { requireUser } from "@/features/auth/lib/requireUser";
import { getCurrentUserCityStats } from "@/features/city/repository/city.repository";
import { HttpError, withApiHandler } from "@/lib/api/route-handler";
import { NextResponse } from "next/server";

export const GET = withApiHandler(async () => {
    const user = await requireUser();

    const stats = await getCurrentUserCityStats(user.id);
    if (!stats) {
        throw new HttpError(
            404,
            "Nincs beállítva az alkalmazási város.",
            "CITY_NOT_SET",
        );
    }

    return NextResponse.json(stats, {
        headers: { "Cache-Control": "private, no-store" },
    });
});
