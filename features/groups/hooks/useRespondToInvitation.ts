"use client";

import { respondToInvitation } from "@/features/groups/api/groups.api";
import {
    applyOptimisticGroupPatch,
    optimisticInvitationAnswer,
    restoreGroupCaches,
} from "@/features/groups/hooks/groups.cache";
import type { InvitationAction } from "@/features/groups/schemas/groups.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { groupKeys } from "./group.keys";

interface Variables {
    groupId: string;
    action: InvitationAction;
}

export function useRespondToInvitation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ groupId, action }: Variables) =>
            respondToInvitation(groupId, action),
        onMutate: ({ groupId, action }) =>
            applyOptimisticGroupPatch(queryClient, groupId, (group) =>
                optimisticInvitationAnswer(group, action),
            ),
        onError: (_error, _variables, context) => {
            if (context) restoreGroupCaches(queryClient, context.snapshot);
        },
        onSettled: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.all }),
    });
}
