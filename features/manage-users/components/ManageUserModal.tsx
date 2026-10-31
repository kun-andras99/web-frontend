"use client";

import UserAvatar from "@/features/(app)/(ui)/UserAvatar";
import { useEffect, useId, useRef } from "react";
import { useUpdateRelationship } from "../hooks/useUpdateRelationship";
import type {
    ManagedUserDTO,
    RelationshipChanges,
} from "../schemas/manage-users.schema";
import { getManageUsersErrorMessage } from "../utils/manage-users-errors";
import ModalActionRow from "./ModalActionRow";
import StatusBadge from "./StatusBadge";

interface ManageUserModalProps {
    user: ManagedUserDTO | null;
    onClose: () => void;
}

export default function ManageUserModal({
    user,
    onClose,
}: ManageUserModalProps) {
    if (!user) return null;
    // key: másik felhasználónál a mutation hibája és a megerősítések nulláról indulnak
    return <ModalContent key={user.id} user={user} onClose={onClose} />;
}

function ModalContent({
    user,
    onClose,
}: {
    user: ManagedUserDTO;
    onClose: () => void;
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const titleId = useId();
    const update = useUpdateRelationship();

    const name = user.nickname ?? "Névtelen";
    const isFriend = user.statuses.includes("FRIEND");
    const isFavorite = user.statuses.includes("FAVORITE");
    const isBlocked = user.statuses.includes("BLOCKED");

    useEffect(() => {
        const dialog = dialogRef.current;
        // a guard a React StrictMode dupla effektfuttatása miatt kell
        if (dialog && !dialog.open) dialog.showModal();
    }, []);

    // Egyetlen bezárási út: a natív `close` esemény hívja az onClose-t (Escape, gomb és háttérkattintás is).
    const requestClose = () => dialogRef.current?.close();

    const apply = (changes: RelationshipChanges) =>
        update.mutate({ userId: user.id, changes });
    const busy = update.isPending;

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby={titleId}
            onClose={onClose}
            onClick={(event) => {
                // a háttérre (a dialog elemre magára) kattintva bezár, a tartalomra nem
                if (event.target === event.currentTarget) requestClose();
            }}
            className="m-auto max-h-[85dvh] w-[min(92vw,420px)] overflow-y-auto rounded-2xl border border-white/10 bg-neutral-900 p-0 text-white backdrop:bg-black/60 backdrop:backdrop-blur-sm">
            <div className="p-5">
                <header className="flex items-center gap-3">
                    <UserAvatar
                        alt={user.nickname ?? "/assets/images/user-blank-1.png"}
                        url={user.avatarUrl ?? null}
                        className="h-12 w-12"
                    />
                    <div className="min-w-0">
                        <h2
                            id={titleId}
                            className="truncate text-base font-bold">
                            {name}
                        </h2>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                            {user.statuses.map((status) => (
                                <StatusBadge key={status} status={status} />
                            ))}
                        </div>
                    </div>
                </header>

                <div className="mt-3 divide-y divide-white/10">
                    <ModalActionRow
                        title="Kedvenc"
                        description={
                            isBlocked
                                ? "Tiltott felhasználót nem jelölhetsz kedvencnek."
                                : undefined
                        }
                        label={
                            isFavorite
                                ? "Eltávolítás a kedvencek közül"
                                : "Hozzáadás a kedvencekhez"
                        }
                        disabled={busy || isBlocked}
                        onConfirm={() => apply({ favorite: !isFavorite })}
                    />

                    {isFriend ? (
                        <ModalActionRow
                            title="Barát"
                            description="A barátság megszűnik, újra barátkérés kell hozzá."
                            label="Barátság megszüntetése"
                            danger
                            requireConfirm
                            disabled={busy}
                            onConfirm={() => apply({ friend: false })}
                        />
                    ) : (
                        <section className="py-3">
                            <h3 className="text-sm font-semibold">Barát</h3>
                            <p className="mt-0.5 text-xs text-white/50">
                                Jelenleg nem vagytok barátok.
                            </p>
                        </section>
                    )}

                    <ModalActionRow
                        title="Tiltás"
                        description={
                            isBlocked
                                ? "A feloldás után újra láthatjátok egymást."
                                : "A tiltás megszünteti a barátságot, és eltávolítja a kedvencek közül."
                        }
                        label={
                            isBlocked
                                ? "Tiltás feloldása"
                                : "Felhasználó tiltása"
                        }
                        danger={!isBlocked}
                        requireConfirm={!isBlocked}
                        disabled={busy}
                        onConfirm={() => apply({ blocked: !isBlocked })}
                    />
                </div>

                {update.isError && (
                    <p role="alert" className="mt-2 text-xs text-red-400">
                        {getManageUsersErrorMessage(update.error)}
                    </p>
                )}

                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        onClick={requestClose}
                        className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/15">
                        Bezárás
                    </button>
                </div>
            </div>
        </dialog>
    );
}
