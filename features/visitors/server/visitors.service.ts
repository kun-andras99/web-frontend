import "server-only";

import { findBlockedUserIds } from "@/features/nearby-users/server/nearby.repository";
import type {
    LatestVisitDTO,
    VisitorsPageDTO,
    VisitorsQuery,
} from "@/features/visitors/schemas/visitors.schema";
import {
    findLatestVisitAt,
    findViewerCoordinates,
    findVisitsPage,
} from "@/features/visitors/server/visitors.repository";
import { toVisitorDTO } from "@/features/visitors/visitors.mapper";

export async function listVisitors(
    viewerId: string,
    query: VisitorsQuery,
): Promise<VisitorsPageDTO> {
    const [viewer, excludeIds] = await Promise.all([
        findViewerCoordinates(viewerId),
        findBlockedUserIds(viewerId),
    ]);

    const { items, nextCursor } = await findVisitsPage({
        viewerId,
        excludeIds,
        ...query,
    });

    return {
        items: items.map((row) => toVisitorDTO(row, viewer)),
        nextCursor,
    };
}

export async function getLatestVisit(
    viewerId: string,
): Promise<LatestVisitDTO> {
    const latest = await findLatestVisitAt({
        viewerId,
        excludeIds: await findBlockedUserIds(viewerId),
    });

    return { latestVisitedAt: latest?.toISOString() ?? null };
}
