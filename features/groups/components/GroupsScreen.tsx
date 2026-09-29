"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import GroupBottomSheet from "@/features/groups/components/GroupBottomSheet";
import { useGroups } from "@/features/groups/hooks/useGroups";
import { ApiError } from "@/lib/http/errors";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function useLoadMoreOnVisible(onVisible: () => void, enabled: boolean) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node || !enabled) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) onVisible();
            },
            { rootMargin: "200px" },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [onVisible, enabled]);

    return ref;
}

function getLoadErrorMessage(error: unknown): string {
    if (error instanceof ApiError && error.isForbidden) {
        return "Nincs jogosultságod a csoportok megtekintéséhez.";
    }
    return "Hiba történt a csoportok betöltésekor.";
}

export default function GroupsScreen() {
    const {
        data,
        isPending,
        isError,
        error,
        refetch,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGroups();

    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

    const groups = useMemo(
        () => data?.pages.flatMap((page) => page.items) ?? [],
        [data],
    );
    const selectedGroup = useMemo(
        () => groups.find((group) => group.id === selectedGroupId) ?? null,
        [groups, selectedGroupId],
    );

    const loadMore = useCallback(() => void fetchNextPage(), [fetchNextPage]);
    const sentinelRef = useLoadMoreOnVisible(
        loadMore,
        Boolean(hasNextPage) && !isFetchingNextPage,
    );

    if (isPending) {
        return (
            <BottomPageWrapper>
                <p>Csoportok betöltése...</p>
            </BottomPageWrapper>
        );
    }

    if (isError) {
        return (
            <BottomPageWrapper>
                <p>{getLoadErrorMessage(error)}</p>
                <button onClick={() => void refetch()}>Újrapróbálás</button>
            </BottomPageWrapper>
        );
    }

    return (
        <BottomPageWrapper>
            <h2>Csoportok</h2>

            {groups.length === 0 ? (
                <p>Még nincsenek csoportok.</p>
            ) : (
                <div className="gp-lists">
                    {groups.map((group) => (
                        <article
                            key={group.id}
                            className="group-card"
                            onClick={() => setSelectedGroupId(group.id)}>
                            <div className="group-card-image"></div>

                            <div className="group-card-content">
                                <h3>{group.name}</h3>
                                {group.description && (
                                    <p>{group.description}</p>
                                )}

                                <div className="group-card-meta">
                                    <span>{group.memberCount} tag</span>
                                </div>
                            </div>
                        </article>
                    ))}

                    <div ref={sentinelRef} aria-hidden />
                    {isFetchingNextPage && <p>Több csoport betöltése...</p>}
                </div>
            )}

            <GroupBottomSheet
                group={selectedGroup}
                onClose={() => setSelectedGroupId(null)}
            />
        </BottomPageWrapper>
    );
}
