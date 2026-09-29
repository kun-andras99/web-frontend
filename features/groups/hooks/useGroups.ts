"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import type { GroupsFilters } from "@/features/groups/schemas/groups.schema";
import { groupsInfiniteQueryOptions } from "@/features/groups/hooks/groups.queries";

export function useGroups(filters: GroupsFilters = {}) {
    return useInfiniteQuery(groupsInfiniteQueryOptions(filters));
}
 