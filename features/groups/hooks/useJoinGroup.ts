"use client";

import { joinGroup } from "@/features/groups/api/groups.api";
import { groupKeys } from "@/features/groups/hooks/group.keys";
import {
    applyOptimisticGroupPatch,
    optimisticJoin,
    restoreGroupCaches,
} from "@/features/groups/hooks/groups.cache";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useJoinGroup() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (groupId: string) => joinGroup(groupId),
        onMutate: (groupId) =>
            applyOptimisticGroupPatch(queryClient, groupId, optimisticJoin),
        onError: (_error, _variables, context) => {
            if (context) restoreGroupCaches(queryClient, context.snapshot);
        },
        onSettled: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.lists() }),
    });
}
