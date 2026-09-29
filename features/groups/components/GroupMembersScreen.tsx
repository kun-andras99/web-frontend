"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import JoinRequestsCard from "@/features/groups/components/GroupMember/JoinRequestCard";
import MemberRow from "@/features/groups/components/GroupMember/MemberRow";
import { useLoadMoreOnVisible } from "@/lib/hooks/useLoadMoreOnVisible";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";
import { useGroup } from "../hooks/useGroup";
import { useGroupMembers } from "../hooks/useGroupMembers";
import { getGroupErrorMessage } from "../utils/group-errors";
import { hueFromString } from "../utils/group-ui";

export default function GroupMembersScreen({ groupId }: { groupId: string }) {
    const { data: group, isPending, isError, refetch } = useGroup(groupId);
    const members = useGroupMembers(groupId, group?.membersVisible ?? false);

    const list = useMemo(
        () => members.data?.pages.flatMap((page) => page.items) ?? [],
        [members.data],
    );
    const sentinelRef = useLoadMoreOnVisible(
        () => void members.fetchNextPage(),
        Boolean(members.hasNextPage) && !members.isFetchingNextPage,
    );

    if (isPending) {
        return (
            <BottomPageWrapper>
                <div className="gd-page" aria-busy="true">
                    <div className="gd-skeleton gd-skeleton--card" />
                    <div className="gd-skeleton gd-skeleton--card" />
                </div> 
            </BottomPageWrapper>
        );
    }

    if (isError) {
        return (
            <BottomPageWrapper>
                <div className="gd-page">
                    <div className="gd-card gd-state">
                        <h2>Nem sikerült betölteni a csoportot</h2>
                        <button
                            type="button"
                            className="gd-button"
                            onClick={() => void refetch()}>
                            Újrapróbálás
                        </button>
                    </div>
                </div>
            </BottomPageWrapper>
        );
    }
    const isOwner = group.viewerState === "MEMBER";
    const viewer = {
        isOwner,
        isAdmin: isOwner || group.viewerRole === "ADMIN",
    };

    return (
        <BottomPageWrapper>
            <div
                className="gd-page"
                style={
                    { "--gd-hue": hueFromString(group.id) } as CSSProperties
                }>
                <div className="gd-topbar">
                    <Link
                        href={`/group/${group.id}`}
                        className="gd-topbar-back"
                        aria-label="Vissza a csoporthoz">
                        ‹
                    </Link>
                    <div>
                        <h1 className="gd-topbar-title">Tagok</h1>
                        <span className="gd-topbar-sub">{group.name}</span>
                    </div>
                </div>

                {viewer.isAdmin && <JoinRequestsCard groupId={group.id} />}

                <section
                    className="gd-card"
                    aria-labelledby="gd-all-members-title">
                    <div className="gd-card-head">
                        <h2 id="gd-all-members-title" className="gd-card-title">
                            Összes tag
                        </h2>
                        <span className="gd-pill">{group.memberCount}</span>
                    </div>

                    {!group.membersVisible ? (
                        <p className="gd-about gd-about--empty">
                            A tagok listája csak a csoport tagjainak látható.
                        </p>
                    ) : members.isPending ? (
                        <p className="gd-about gd-about--empty">
                            Tagok betöltése...
                        </p>
                    ) : members.isError ? (
                        <div>
                            <p role="alert" className="gd-error">
                                {getGroupErrorMessage(members.error)}
                            </p>
                            <button
                                type="button"
                                className="gd-btn"
                                onClick={() => void members.refetch()}>
                                Újrapróbálás
                            </button>
                        </div>
                    ) : (
                        <>
                            <ul className="gd-members">
                                {list.map((member) => (
                                    <MemberRow
                                        key={member.userId}
                                        groupId={group.id}
                                        member={member}
                                        viewer={viewer}
                                    />
                                ))}
                            </ul>
                            <div ref={sentinelRef} aria-hidden />
                            {members.isFetchingNextPage && (
                                <p className="gd-more">Több tag betöltése...</p>
                            )}
                        </>
                    )}
                </section>
            </div>
        </BottomPageWrapper>
    );
}
