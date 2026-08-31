import { getUserRepository } from "@/lib/db";
import { NextResponse } from "next/server";

interface RouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;

        const userId = Number(id);

        if (!Number.isInteger(userId) || userId <= 0) {
            return NextResponse.json(
                {
                    error: "Invalid user id",
                },
                {
                    status: 400,
                },
            );
        }

        const userRepository = getUserRepository();

        const user = await userRepository.findById(userId);

        if (!user) {
            return NextResponse.json(
                {
                    error: "User not found",
                },
                {
                    status: 404,
                },
            );
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("GET /api/users/[id] error:", error);

        return NextResponse.json(
            {
                error: "Failed to fetch user",
            },
            {
                status: 500,
            },
        );
    }
}
