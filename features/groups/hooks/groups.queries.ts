import { fetchGroup, fetchGroupMembersPage, fetchGroupsPage, fetchJoinRequestsPage } from "@/features/groups/api/groups.api";
import { groupKeys } from "@/features/groups/hooks/group.keys";
import type { GroupsFilters } from "@/features/groups/schemas/groups.schema";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const groupsInfiniteQueryOptions = (filters: GroupsFilters = {}) =>
    infiniteQueryOptions({
        queryKey: groupKeys.list(filters), 
        queryFn: ({ pageParam, signal }) =>
            fetchGroupsPage(
                { search: filters.search, cursor: pageParam },
                signal, 
            ),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 5 * 60 * 1000,
    });

export const groupDetailQueryOptions = (groupId: string) =>
    queryOptions({
        queryKey: groupKeys.detail(groupId),
        queryFn: ({ signal }) => fetchGroup(groupId, signal),
        staleTime: 60 * 1000,
    });

export const groupMembersInfiniteQueryOptions = (groupId: string) =>
    infiniteQueryOptions({
        queryKey: groupKeys.members(groupId),
        queryFn: ({ pageParam, signal }) =>
            fetchGroupMembersPage(groupId, { cursor: pageParam }, signal),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 60 * 1000,
    });

export const groupJoinRequestsInfiniteQueryOptions = (groupId: string) =>
    infiniteQueryOptions({
        queryKey: groupKeys.joinRequests(groupId),
        queryFn: ({ pageParam, signal }) =>
            fetchJoinRequestsPage(groupId, { cursor: pageParam }, signal),
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
        staleTime: 30 * 1000,
    });
