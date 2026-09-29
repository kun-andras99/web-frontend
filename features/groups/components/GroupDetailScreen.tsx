"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import GroupActions from "@/features/groups/components/GroupBottomSheet/GroupActions";
import GroupHero from "@/features/groups/components/GroupDetail/GroupHero";
import GroupSettingsCard from "@/features/groups/components/GroupDetail/GroupSettingsCard";
import GroupStats from "@/features/groups/components/GroupDetail/GroupStats";
import GroupMembersCard from "@/features/groups/components/GroupMember/GroupMemberCard";
import { useGroup } from "@/features/groups/hooks/useGroup";
import { hueFromString } from "@/features/groups/utils/group-ui";
import { ApiError } from "@/lib/http/errors";
import Link from "next/link";
import type { CSSProperties } from "react";

function GroupDetailSkeleton() {
    return (
        <div className="gd-page" aria-busy="true" aria-label="Betöltés">
            <div className="gd-skeleton gd-skeleton--hero" />
            <div className="gd-skeleton gd-skeleton--card" />
            <div className="gd-skeleton gd-skeleton--card" />
        </div>
    );
}

export default function GroupDetailScreen({ groupId }: { groupId: string }) {
    const {
        data: group,
        isPending,
        isError,
        error,
        refetch,
    } = useGroup(groupId);

    if (isPending) {
        return (
            <BottomPageWrapper>
                <GroupDetailSkeleton />
            </BottomPageWrapper>
        );
    }

    if (isError) {
        const notFound = error instanceof ApiError && error.isNotFound;

        return (
            <BottomPageWrapper>
                <div className="gd-page">
                    <div className="gd-card gd-state">
                        <h2>
                            {notFound
                                ? "A csoport nem található"
                                : "Nem sikerült betölteni a csoportot"}
                        </h2>
                        <p>
                            {notFound
                                ? "Lehet, hogy időközben törölték."
                                : "Ellenőrizd a kapcsolatot, és próbáld újra."}
                        </p>
                        {notFound ? (
                            <Link href="/communits/groups" className="gd-button">
                                Vissza a csoportokhoz
                            </Link>
                        ) : (
                            <button
                                type="button"
                                className="gd-button"
                                onClick={() => void refetch()}>
                                Újrapróbálás
                            </button>
                        )}
                    </div>
                </div>
            </BottomPageWrapper>
        );
    }

    const isMember =
        group.viewerState === "ADMIN" || group.viewerState === "MEMBER";

    return (
        <BottomPageWrapper>
            <div
                className="gd-page"
                style={
                    { "--gd-hue": hueFromString(group.id) } as CSSProperties
                }>
                <GroupHero group={group} />

                {/* csatlakozás / meghívó / kérelem: csak a nem tagoknak */}
                {!isMember && (
                    <section className="gd-card gd-actions">
                        <GroupActions group={group} />
                    </section>
                )}

                <GroupStats group={group} />

                <section className="gd-card" aria-labelledby="gd-about-title">
                    <div className="gd-card-head">
                        <h2 id="gd-about-title" className="gd-card-title">
                            Rólunk
                        </h2>
                    </div>
                    {group.description ? (
                        <p className="gd-about">{group.description}</p>
                    ) : (
                        <p className="gd-about gd-about--empty">
                            Ehhez a csoporthoz még nem tartozik leírás.
                        </p>
                    )}
                </section>

                <GroupMembersCard group={group} />
                {isMember && <GroupSettingsCard group={group} />}
            </div>
        </BottomPageWrapper>
    );
}
