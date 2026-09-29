"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { groupMembersInfiniteQueryOptions } from "./groups.queries";

export function useGroupMembers(groupId: string, enabled = true) {
    return useInfiniteQuery({
        ...groupMembersInfiniteQueryOptions(groupId),
        enabled,
    });
}
