"use client";

import {
    changeMemberRole,
    removeMember,
    respondToJoinRequest,
} from "@/features/groups/api/groups.api";
import { groupKeys } from "@/features/groups/hooks/group.keys";
import type {
    GroupMemberRole,
    JoinRequestAction,
} from "@/features/groups/schemas/groups.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useChangeMemberRole(groupId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            userId,
            role,
        }: {
            userId: string;
            role: GroupMemberRole;
        }) => changeMemberRole(groupId, userId, role),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.all }),
    });
}

export function useRemoveMember(groupId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (userId: string) => removeMember(groupId, userId),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.all }),
    });
}

export function useRespondToJoinRequest(groupId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            requestId,
            action,
        }: {
            requestId: string;
            action: JoinRequestAction;
        }) => respondToJoinRequest(groupId, requestId, action),
        // a tagok, a taglétszám és a függő-számláló is változik
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.all }),
    });
}
