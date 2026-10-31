import { http } from "@/lib/http/http-client";
import {
    managedUsersPageSchema,
    relationshipResultSchema,
    type ManageFilter,
    type RelationshipChanges,
} from "../schemas/manage-users.schema";

export function fetchManagedUsersPage(
    params: { filter: ManageFilter; cursor?: string },
    signal?: AbortSignal,
) {
    return http.get("/api/manage-users", {
        schema: managedUsersPageSchema,
        query: { ...params },
        signal,
    });
}

export function updateRelationship(
    userId: string,
    changes: RelationshipChanges,
) {
    return http.patch(`/api/manage-users/${encodeURIComponent(userId)}`, {
        schema: relationshipResultSchema,
        body: changes,
    });
}
