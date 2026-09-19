import { getAllUsers } from "@/lib/db/user";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await getAllUsers();

        return NextResponse.json(users);
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
