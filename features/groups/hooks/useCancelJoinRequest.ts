"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelJoinRequest } from "../api/groups.api";
import { groupKeys } from "./group.keys";
import {
    applyOptimisticGroupPatch,
    optimisticCancelRequest,
    restoreGroupCaches,
} from "./groups.cache";

export function useCancelJoinRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (groupId: string) => cancelJoinRequest(groupId),
        onMutate: (groupId) =>
            applyOptimisticGroupPatch(
                queryClient,
                groupId,
                optimisticCancelRequest,
            ),
        onError: (_error, _groupId, context) => {
            if (context) restoreGroupCaches(queryClient, context.snapshot);
        },
        onSettled: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.all }),
    });
}
