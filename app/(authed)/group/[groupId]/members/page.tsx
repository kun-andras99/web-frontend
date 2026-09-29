import { getCurrentUser } from "@/features/auth/lib/session";
import GroupMembersScreen from "@/features/groups/components/GroupMembersScreen";
import {
    groupDetailQueryOptions,
    groupJoinRequestsInfiniteQueryOptions,
    groupMembersInfiniteQueryOptions,
} from "@/features/groups/hooks/groups.queries";
import { DEFAULT_GROUPS_PAGE_SIZE } from "@/features/groups/schemas/groups.schema";
import { loadGroupDetail } from "@/features/groups/server/groups.loaders";
import {
    listJoinRequests,
    listMembers,
} from "@/features/groups/server/groups.service";
import { HttpError } from "@/lib/api/route-handler";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

interface Props {
    params: Promise<{ groupId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { groupId } = await params;
    const user = await getCurrentUser();
    if (!user) return { title: "Tagok" };

    try {
        const group = await loadGroupDetail(groupId, user.id);
        return { title: `Tagok – ${group.name}`, robots: { index: false } };
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) {
            return { title: "A csoport nem található" };
        }
        throw error;
    }
}

export default async function GroupMembersPage({ params }: Props) {
    const { groupId } = await params;

    const user = await getCurrentUser();
    if (!user) redirect("/login");

    const queryClient = getServerQueryClient();
    const page = { limit: DEFAULT_GROUPS_PAGE_SIZE };

    let group;
    try {
        group = await queryClient.fetchQuery({
            ...groupDetailQueryOptions(groupId),
            queryFn: () => loadGroupDetail(groupId, user.id),
        });
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) notFound();
        throw error;
    }

    const isAdmin = group.viewerRole === "ADMIN";

    // csak azt töltjük elő, amit a néző látni fog
    await Promise.all([
        group.membersVisible
            ? queryClient.prefetchInfiniteQuery({
                  ...groupMembersInfiniteQueryOptions(groupId),
                  queryFn: () => listMembers(groupId, user.id, page),
              })
            : undefined,
        isAdmin
            ? queryClient.prefetchInfiniteQuery({
                  ...groupJoinRequestsInfiniteQueryOptions(groupId),
                  queryFn: () => listJoinRequests(groupId, user.id, page),
              })
            : undefined,
    ]);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GroupMembersScreen groupId={groupId} />
        </HydrationBoundary>
    );
}
