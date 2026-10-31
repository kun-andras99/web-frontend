import {
    getCurrentUser,
    requireCurrentUser,
} from "@/features/auth/lib/session";
import GroupDetailScreen from "@/features/groups/components/GroupDetailScreen";
import { groupDetailQueryOptions } from "@/features/groups/hooks/groups.queries";
import { loadGroupDetail } from "@/features/groups/server/groups.loaders";
import { HttpError } from "@/lib/api/route-handler";
import { getServerQueryClient } from "@/lib/query/server-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface GroupPageProps {
    params: Promise<{ groupId: string }>;
}

export async function generateMetadata({
    params,
}: GroupPageProps): Promise<Metadata> {
    const { groupId } = await params;
    const user = await getCurrentUser();
    if (!user) return { title: "Csoport" };

    try {
        const group = await loadGroupDetail(groupId, user.id);
        return {
            title: group.name,
            description: group.description?.slice(0, 160) ?? undefined,
            robots: { index: false },
        };
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) {
            return { title: "A csoport nem található" };
        }
        throw error;
    }
}

export default async function GroupPage({ params }: GroupPageProps) {
    const { groupId } = await params;

    const currentUser = await requireCurrentUser();

    const queryClient = getServerQueryClient();

    try {
        await queryClient.fetchQuery({
            ...groupDetailQueryOptions(groupId),
            queryFn: () => loadGroupDetail(groupId, currentUser.id),
        });
    } catch (error) {
        if (error instanceof HttpError && error.status === 404) notFound();
        throw error;
    }

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GroupDetailScreen groupId={groupId} />
        </HydrationBoundary>
    );
}
