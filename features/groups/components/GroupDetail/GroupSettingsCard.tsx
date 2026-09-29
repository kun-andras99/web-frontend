"use client";

import {
    useDeleteGroup,
    useLeaveGroup,
} from "@/features/groups/hooks/useGroupSettings";
import type { GroupDetailDTO } from "@/features/groups/schemas/groups.schema";
import { getGroupErrorMessage } from "@/features/groups/utils/group-errors";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GroupEditForm from "./GroupEditForm";

export default function GroupSettingsCard({
    group,
}: {
    group: GroupDetailDTO;
}) {
    const router = useRouter();
    const leave = useLeaveGroup();
    const remove = useDeleteGroup();
    const [editing, setEditing] = useState(false);

    const isOwner = group.viewerState === "MEMBER";
    const isAdmin = group.viewerRole === "ADMIN";
    const isBusy = leave.isPending || remove.isPending;
    const error = leave.error ?? remove.error;

    function handleLeave() {
        if (
            window.confirm(`Biztosan kilépsz a(z) „${group.name}” csoportból?`)
        ) {
            leave.mutate(group.id);
        }
    }

    function handleDelete() {
        const confirmed = window.confirm(
            `Biztosan törlöd a(z) „${group.name}” csoportot? Ez nem vonható vissza.`,
        );
        if (confirmed) {
            remove.mutate(group.id, {
                onSuccess: () => router.replace("/groups"),
            });
        }
    }

    return (
        <section className="gd-card" aria-labelledby="gd-settings-title">
            <div className="gd-card-head">
                <h2 id="gd-settings-title" className="gd-card-title">
                    Beállítások
                </h2>
            </div>

            {editing ? (
                <GroupEditForm group={group} onDone={() => setEditing(false)} />
            ) : (
                <div className="gd-settings">
                    {isAdmin && (
                        <button
                            type="button"
                            className="gd-btn"
                            onClick={() => setEditing(true)}>
                            Csoport szerkesztése
                        </button>
                    )}
                    {!isOwner && (
                        <button
                            type="button"
                            className="gd-btn gd-btn--danger"
                            disabled={isBusy}
                            onClick={handleLeave}>
                            Kilépés a csoportból
                        </button>
                    )}
                    {isOwner && (
                        <button
                            type="button"
                            className="gd-btn gd-btn--danger"
                            disabled={isBusy}
                            onClick={handleDelete}>
                            Csoport törlése
                        </button>
                    )}
                    {isAdmin && (
                        <button
                            type="button"
                            className="gd-btn gd-btn--danger"
                            disabled={isBusy}
                            onClick={handleDelete}>
                            Csoport törlése
                        </button>
                    )}
                </div>
            )}

            {error && (
                <p role="alert" className="gd-error">
                    {getGroupErrorMessage(error)}
                </p>
            )}
        </section>
    );
}
