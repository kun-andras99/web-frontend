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
            <div className="groups-page">
                <h2>Love & dating</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Making friends</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>LMBTQ+ community</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Trans</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Gender exploration</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Flirt & fun</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Hobby & lifestyle</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Kinky & fetish</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>BDSM</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Leather</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Furry & pet play</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Fantasies & desires</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Couples</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Switch</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <h2>Nightlife & party</h2>
                {groups.length === 0 ? (
                    <p>Még nincsenek csoportok.</p>
                ) : (
                    <>
                        <div className="scroll-x-box group-list">
                            {groups.map((group) => (
                                <article
                                    key={group.id}
                                    className="group-card"
                                    onClick={() =>
                                        setSelectedGroupId(group.id)
                                    }>
                                    <div className="group-card__image-container">
                                        <div className="image"></div>
                                        <div className="top">
                                            <div className="members">
                                                {group.memberCount}
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <h3>{group.name}</h3>
                                        </div>
                                    </div>

                                    <div className="group-card__content">
                                        <div className="tags">
                                            <span className="tag">#nő</span>
                                            <span className="tag">#hetero</span>
                                            <span className="tag">#bi</span>
                                            <span className="tag">
                                                #transCis
                                            </span>
                                        </div>
                                        {group.description && (
                                            <p>{group.description}</p>
                                        )}
                                    </div>
                                </article>
                            ))}

                            {isFetchingNextPage && (
                                <div ref={sentinelRef} aria-hidden>
                                    <p>Több csoport betöltése...</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            <GroupBottomSheet
                group={selectedGroup}
                onClose={() => setSelectedGroupId(null)}
            />
        </BottomPageWrapper>
    );
}
