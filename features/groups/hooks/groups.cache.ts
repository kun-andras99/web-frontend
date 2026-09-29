import type {
    GroupDetailDTO,
    GroupDTO,
    GroupsPageDTO,
    InvitationAction,
} from "@/features/groups/schemas/groups.schema";
import type {
    InfiniteData,
    QueryClient,
    QueryKey,
} from "@tanstack/react-query";
import { groupKeys } from "./group.keys";

type GroupsInfiniteData = InfiniteData<GroupsPageDTO, string | undefined>;

export interface GroupCacheSnapshot {
    groupId: string;
    lists: Array<[QueryKey, GroupsInfiniteData | undefined]>;
    detail: GroupDetailDTO | undefined;
}

function patchGroupInLists(
    queryClient: QueryClient,
    groupId: string,
    patch: (group: GroupDTO) => GroupDTO,
) {
    queryClient.setQueriesData<GroupsInfiniteData>(
        { queryKey: groupKeys.lists() },
        (data) => {
            if (!data) return data;
            return {
                ...data,
                pages: data.pages.map((page) => ({
                    ...page,
                    items: page.items.map((group) =>
                        group.id === groupId ? patch(group) : group,
                    ),
                })),
            };
        },
    );
}

function patchGroupDetail(
    queryClient: QueryClient,
    groupId: string,
    patch: (group: GroupDTO) => GroupDTO,
) {
    queryClient.setQueryData<GroupDetailDTO>(
        groupKeys.detail(groupId),
        (detail) => detail && { ...detail, ...patch(detail) },
    );
}

/** Leállítja a futó lekéréseket, menti az állapotot, majd rárakja az optimista módosítást. */
export async function applyOptimisticGroupPatch(
    queryClient: QueryClient,
    groupId: string,
    patch: (group: GroupDTO) => GroupDTO,
): Promise<{ snapshot: GroupCacheSnapshot }> {
    await Promise.all([
        queryClient.cancelQueries({ queryKey: groupKeys.lists() }),
        queryClient.cancelQueries({ queryKey: groupKeys.detail(groupId) }),
    ]);

    const snapshot: GroupCacheSnapshot = {
        groupId,
        lists: queryClient.getQueriesData<GroupsInfiniteData>({
            queryKey: groupKeys.lists(),
        }),
        detail: queryClient.getQueryData<GroupDetailDTO>(
            groupKeys.detail(groupId),
        ),
    };

    patchGroupInLists(queryClient, groupId, patch);
    patchGroupDetail(queryClient, groupId, patch);

    return { snapshot };
}

export function restoreGroupCaches(
    queryClient: QueryClient,
    snapshot: GroupCacheSnapshot,
) {
    for (const [key, data] of snapshot.lists) {
        queryClient.setQueryData(key, data);
    }
    if (snapshot.detail) {
        queryClient.setQueryData(
            groupKeys.detail(snapshot.groupId),
            snapshot.detail,
        );
    }
}

// ---- tiszta patch függvények (változatlanok) ----

export function optimisticJoin(group: GroupDTO): GroupDTO {
    return group.visibility === "PUBLIC"
        ? {
              ...group,
              viewerState: "MEMBER",
              memberCount: group.memberCount + 1,
          }
        : { ...group, viewerState: "PENDING" };
}

export function optimisticInvitationAnswer(
    group: GroupDTO,
    action: InvitationAction,
): GroupDTO {
    return action === "ACCEPT"
        ? {
              ...group,
              viewerState: "MEMBER",
              memberCount: group.memberCount + 1,
          }
        : { ...group, viewerState: "NONE" };
}

export function optimisticCancelRequest(group: GroupDTO): GroupDTO {
    return { ...group, viewerState: "NONE" };
}