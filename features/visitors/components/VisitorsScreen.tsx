"use client";

import VisitorCard from "@/features/visitors/components/VisitorCard";
import VisitorsEmpty from "@/features/visitors/components/VisitorsEmpty";
import VisitorsNewBanner from "@/features/visitors/components/VisitorsNewBanner";
import { useNewVisitors } from "@/features/visitors/hooks/useNewVisitors";
import { useVisitors } from "@/features/visitors/hooks/useVisitors";
import { getVisitorsErrorMessage } from "@/features/visitors/utils/visitors-errors";
import { useLoadMoreOnVisible } from "@/lib/hooks/useLoadMoreOnVisible";
import { useMemo, useState } from "react";

export default function VisitorsScreen() {
    const {
        data,
        isPending,
        isError,
        error,
        refetch,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useVisitors();

    const visitors = useMemo(
        () => data?.pages.flatMap((page) => page.items) ?? [],
        [data],
    );

    const { hasNew, showNew } = useNewVisitors(
        visitors[0]?.visitedAt ?? null,
        !isPending && !isError,
    );
    const [isShowingNew, setIsShowingNew] = useState(false);

    const sentinelRef = useLoadMoreOnVisible(
        () => void fetchNextPage(),
        Boolean(hasNextPage) && !isFetchingNextPage,
    );

    async function handleShowNew() {
        setIsShowingNew(true);
        try {
            await showNew();
        } finally {
            setIsShowingNew(false);
        }
    }

    if (isPending) {
        return (
            <p className="py-6 text-center text-sm text-white/40">
                Betöltés...
            </p>
        );
    }

    if (isError) {
        return (
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-5 text-center">
                <p role="alert" className="text-sm text-white/75">
                    {getVisitorsErrorMessage(error)}
                </p>
                <button
                    type="button"
                    onClick={() => void refetch()}
                    className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white">
                    Újrapróbálás
                </button>
            </div>
        );
    }

    return (
        <div>
            {hasNew && (
                <VisitorsNewBanner
                    onClick={() => void handleShowNew()}
                    isLoading={isShowingNew}
                />
            )}

            {visitors.length === 0 ? (
                <VisitorsEmpty />
            ) : (
                <>
                    <div className="grid grid-cols-2 gap-[1px]">
                        {visitors.map((visitor) => (
                            <VisitorCard
                                key={visitor.visitId}
                                visitor={visitor}
                            />
                        ))}
                    </div>

                    <div ref={sentinelRef} aria-hidden />

                    {isFetchingNextPage && (
                        <p className="py-4 text-center text-xs text-white/40">
                            Több látogató betöltése...
                        </p>
                    )}
                </>
            )}
        </div>
    );
}
