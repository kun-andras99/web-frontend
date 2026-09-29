import type { GroupsFilters } from "@/features/groups/schemas/groups.schema";

export const groupKeys = {
    all: ["groups"] as const,
    lists: () => [...groupKeys.all, "list"] as const,
    list: (filters: GroupsFilters = {}) =>
        [...groupKeys.lists(), filters] as const,
    details: () => [...groupKeys.all, "detail"] as const,
    detail: (id: string) => [...groupKeys.details(), id] as const,
    members: (id: string) => [...groupKeys.detail(id), "members"] as const,
    joinRequests: (id: string) =>
        [...groupKeys.detail(id), "join-requests"] as const,
};
