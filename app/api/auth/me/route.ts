import { getCurrentUser } from "@/features/auth/lib/session";
import { NextResponse } from "next/server";

export async function GET() {
    const user = await getCurrentUser();

    // 200 + null, ha nincs bejelentkezve: a kliens (useCurrentUser) ebből
    // tudja, hogy vendég — ez nem hiba, ezért nem 401.
    return NextResponse.json(user, {
        headers: { "Cache-Control": "private, no-store" },
    });
}
