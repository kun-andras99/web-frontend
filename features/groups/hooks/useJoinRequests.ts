"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { groupJoinRequestsInfiniteQueryOptions } from "./groups.queries";

export function useJoinRequests(groupId: string) {
    return useInfiniteQuery(groupJoinRequestsInfiniteQueryOptions(groupId));
}
