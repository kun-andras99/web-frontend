"use client";

import { useGroups } from "@/features/groups/hooks/useGroups";

export default function GroupsScreen() {
    const { data: groups, isLoading, isError, error } = useGroups();
    if (isLoading) {
        return (
            <div>
                <h2>Csoportok</h2>

                <div className="groups-list">
                    <p>Csoportok betöltése...</p>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <h2>Csoportok</h2>

                <div className="groups-list">
                    <p>
                        {error instanceof Error
                            ? error.message
                            : "Hiba történt a csoportok betöltésekor."}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Csoportok</h2>

            <div className="groups-list">
                {groups?.map((group) => (
                    <article key={group.id} className="group-card">
                        <div className="group-card-image">
                            {/* később ide jöhet a csoport képe */}
                        </div>

                        <div className="group-card-content">
                            <h3>{group.name}</h3>

                            {group.description && <p>{group.description}</p>}

                            <div className="group-card-meta">
                                <span>
                                    {group.memberCount}{" "}
                                    {group.memberCount === 1 ? "tag" : "tag"}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
