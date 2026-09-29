"use client";

import { createGroup } from "@/features/groups/api/groups.api";
import { groupKeys } from "@/features/groups/hooks/group.keys";
import type {
    CreateGroupInput,
    GroupsFilters,
} from "@/features/groups/schemas/groups.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateGroups(filters: GroupsFilters = {}) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (input: CreateGroupInput) => createGroup(input),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.lists() }),
    });
}
