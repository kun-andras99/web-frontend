import "server-only";

import { prisma } from "@/lib/prisma";

export interface ViewerCoordinates {
    lat: number;
    lng: number;
}

export async function findViewerCoordinates(
    userId: string,
): Promise<ViewerCoordinates | null> {
    const user = await prisma.users.findUnique({
        where: { id: userId },
        select: { lat: true, lng: true },
    });

    return user && user.lat !== null && user.lng !== null
        ? { lat: user.lat, lng: user.lng }
        : null;
}

export async function findVisitsPage(params: {
    viewerId: string;
    excludeIds: string[];
    cursor?: string;
    limit: number;
}) {
    const { viewerId, excludeIds, cursor, limit } = params;

    const rows = await prisma.profileVisit.findMany({
        where: {
            visitedUserId: viewerId,
            visitorId: { notIn: [viewerId, ...excludeIds] },
            visitor: { status: "ACTIVE" },
        },
        select: {
            id: true,
            visitedAt: true,
            visitor: {
                select: {
                    id: true,
                    lat: true,
                    lng: true,
                    userData: {
                        select: {
                            nickname: true,
                            avatarUrl: true,
                            gender: true,
                        },
                    },
                },
            },
        },
        // az id második kulcs: azonos visitedAt mellett is stabil a sorrend
        orderBy: [{ visitedAt: "desc" }, { id: "desc" }],
        take: limit + 1, // eggyel többet kérünk, így tudjuk, van-e következő oldal
        ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });

    const hasMore = rows.length > limit;
    const items = hasMore ? rows.slice(0, limit) : rows;

    return { items, nextCursor: hasMore ? (items.at(-1)?.id ?? null) : null };
}

export async function findLatestVisitAt(params: {
    viewerId: string;
    excludeIds: string[];
}): Promise<Date | null> {
    const { viewerId, excludeIds } = params;

    const row = await prisma.profileVisit.findFirst({
        where: {
            visitedUserId: viewerId,
            visitorId: { notIn: [viewerId, ...excludeIds] },
            visitor: { status: "ACTIVE" },
        },
        orderBy: { visitedAt: "desc" },
        select: { visitedAt: true },
    });

    return row?.visitedAt ?? null;
}

export type VisitRowData = Awaited<
    ReturnType<typeof findVisitsPage>
>["items"][number];
