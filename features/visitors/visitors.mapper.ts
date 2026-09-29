import type { VisitorDTO } from "@/features/visitors/schemas/visitors.schema";
import type {
    ViewerCoordinates,
    VisitRowData,
} from "@/features/visitors/server/visitors.repository";
import { calculateDistanceKm } from "@/lib/utils/calculateDistanceMKm";
import { formatGender } from "@/lib/utils/formatGender";

export function toVisitorDTO(
    row: VisitRowData,
    viewer: ViewerCoordinates | null,
): VisitorDTO {
    const { visitor } = row;
    const userData = visitor.userData;

    const distanceKm =
        viewer && visitor.lat !== null && visitor.lng !== null
            ? calculateDistanceKm(
                  viewer.lat,
                  viewer.lng,
                  visitor.lat,
                  visitor.lng,
              )
            : null;

    return {
        visitId: row.id,
        userId: visitor.id,
        nickname: userData?.nickname ?? null,
        avatarUrl: userData?.avatarUrl ?? null,
        genderLabel: formatGender(userData?.gender) ?? null,
        distanceKm,
        visitedAt: row.visitedAt.toISOString(),
    };
}
