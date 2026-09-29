"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGroup, leaveGroup, updateGroup } from "../api/groups.api";
import type { UpdateGroupInput } from "../schemas/groups.schema";
import { groupKeys } from "./group.keys";

export function useUpdateGroup(groupId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (input: UpdateGroupInput) => updateGroup(groupId, input),
        onSuccess: (detail) => {
            queryClient.setQueryData(groupKeys.detail(groupId), detail);
            return queryClient.invalidateQueries({
                queryKey: groupKeys.lists(),
            });
        },
    });
}

export function useLeaveGroup() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (groupId: string) => leaveGroup(groupId),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: groupKeys.all }),
    });
}

export function useDeleteGroup() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (groupId: string) => deleteGroup(groupId),
        onSuccess: (_data, groupId) => {
            // refetchType: "none": a még látható oldal ne kérje le újra a már törölt csoportot
            void queryClient.invalidateQueries({
                queryKey: groupKeys.detail(groupId),
                refetchType: "none",
            });
            return queryClient.invalidateQueries({
                queryKey: groupKeys.lists(),
            });
        },
    });
}
