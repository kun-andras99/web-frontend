import { NextResponse } from "next/server";

// import { getUsers } from "@/features/_api/user-api";
import { getCurrentUser } from "@/features/auth/lib/session";

export async function GET(request: Request) {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Nem vagy bejelentkezve.",
                },
                {
                    status: 401,
                },
            );
        }

        const { searchParams } = new URL(request.url);

        const page = Math.max(Number(searchParams.get("page")) || 1, 1);

        const limit = Math.min(Number(searchParams.get("limit")) || 30, 30);

        // const users = await getUsers(user.id, page, limit);

        return NextResponse.json({
            success: true,
            // users,
        });
    } catch (error) {
        console.error("GET NEARBY USERS ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Nem sikerült lekérni a felhasználókat.",
            },
            {
                status: 500,
            },
        );
    }
}
