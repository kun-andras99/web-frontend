import { NextResponse } from "next/server";
import { MAX_MESSAGE_LENGTH, PAGE_SIZE } from "@/features/love-wall/constants";
import {
    addMessage,
    delay,
    listMessages,
} from "./_mock/store";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor");
    const requested = Number(searchParams.get("limit")) || PAGE_SIZE;
    const limit = Math.min(Math.max(requested, 1), 50);

    await delay(400); // hálózati késleltetés szimulálása

    return NextResponse.json(listMessages(cursor, limit));
}

export async function POST(request: Request) {
    const body = (await request.json().catch(() => null)) as {
        message?: unknown;
    } | null;
    const message =
        typeof body?.message === "string" ? body.message.trim() : "";

    if (!message || message.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    await delay(800); // hogy látszódjon a "Küldés…" állapot

    return NextResponse.json(addMessage(message), { status: 201 });
}
