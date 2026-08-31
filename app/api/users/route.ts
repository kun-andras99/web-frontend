import { getUserRepository } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const userRepository = getUserRepository();

        const users = await userRepository.findAll({
            skip: 0,
            take: 100,
        });

        const res = {
            user: users.items.map((user) => ({
                id: user.id,
                username: user.username,
                nickname: user.nickname,
                avatar: user.avatar,
            })),
            pagination: {
                total: users.total,
                page: users.page,
                limit: users.limit,
                totalPages: users.totalPages,
            },
        };

        return NextResponse.json({
            data: res,
        });
    } catch (error) {
        console.error("GET /api/users error:", error);

        return NextResponse.json(
            {
                error: "Failed to fetch users",
            },
            {
                status: 500,
            },
        );
    }
}
