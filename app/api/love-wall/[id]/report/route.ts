import { delay, reportMessage } from "@/app/api/love-wall/_mock/store";
import { NextResponse } from "next/server";

export async function POST(
    _request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    await delay(300);

    if (!reportMessage(id)) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return new NextResponse(null, { status: 204 });
}
