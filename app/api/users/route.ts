import { withAuth } from "@/features/auth/lib/requireUser";
import { getAllUsers } from "@/lib/db/user";
import { NextResponse } from "next/server";

/**
 * Felhasználólista — csak moderátor / admin számára (pl. /settings/manage-users).
 *
 * Korábban ez a végpont bejelentkezés nélkül is elérhető volt, és a teljes
 * user rekordot visszaadta (passwordHash, email, koordináták is!).
 * Most csak a szükséges, nem érzékeny mezőket adjuk vissza.
 */
export const GET = withAuth(
    async () => {
        const users = await getAllUsers();

        return NextResponse.json(
            users.map((user) => ({
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
                status: user.status,
                emailVerified: user.emailVerified !== null,
                createdAt: user.createdAt,
                lastActiveAt: user.lastActiveAt,
                nickname: user.userData?.nickname ?? null,
                avatarUrl: user.userData?.avatarUrl ?? null,
            })),
        );
    },
    { roles: ["MODERATOR", "ADMIN"] },
);
