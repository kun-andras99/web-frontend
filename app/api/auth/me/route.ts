import { getCurrentUser } from "@/features/auth/server/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET() {
    const user = await getCurrentUser();

    return NextResponse.json(user);
}
