"use client";

import { useCancelJoinRequest } from "@/features/groups/hooks/useCancelJoinRequest";
import { getGroupErrorMessage } from "@/features/groups/utils/group-errors";
import Link from "next/link";
import { useJoinGroup } from "../../hooks/useJoinGroup";
import { useRespondToInvitation } from "../../hooks/useRespondToInvitation";
import type { GroupDTO } from "../../schemas/groups.schema";

export default function GroupActions({ group }: { group: GroupDTO }) {
    const join = useJoinGroup();
    const respond = useRespondToInvitation();

    const cancel = useCancelJoinRequest();
    const isBusy = join.isPending || respond.isPending || cancel.isPending;
    const error = join.error ?? respond.error ?? cancel.error;

    // mindkét mutation közös "foglalt" állapota: egyszerre csak egy művelet mehet

    function renderAction() {
        switch (group.viewerState) {
            case "ADMIN":
            case "MEMBER":
                return (
                    <Link
                        href={`/group/${group.id}`} // igazítsd a saját route-odhoz
                        className="group-bottom-sheet-open">
                        Csoport megnyitása
                    </Link>
                );

            case "PENDING":
                return (
                    <div className="group-bottom-sheet-invitation">
                        <button
                            type="button"
                            className="group-bottom-sheet-join"
                            disabled>
                            Kérelem elküldve
                        </button>
                        <button
                            type="button"
                            className="group-bottom-sheet-decline"
                            disabled={isBusy}
                            onClick={() => cancel.mutate(group.id)}>
                            Kérelem visszavonása
                        </button>
                    </div>
                );

            case "INVITED":
                return (
                    <div className="group-bottom-sheet-invitation">
                        <p>Meghívtak ebbe a csoportba.</p>
                        <button
                            type="button"
                            className="group-bottom-sheet-join"
                            disabled={isBusy}
                            onClick={() =>
                                respond.mutate({
                                    groupId: group.id,
                                    action: "ACCEPT",
                                })
                            }>
                            Meghívó elfogadása
                        </button>
                        <button
                            type="button"
                            className="group-bottom-sheet-decline"
                            disabled={isBusy}
                            onClick={() =>
                                respond.mutate({
                                    groupId: group.id,
                                    action: "DECLINE",
                                })
                            }>
                            Elutasítás
                        </button>
                    </div>
                );

            case "NONE":
                return (
                    <button
                        type="button"
                        className="group-bottom-sheet-join"
                        disabled={isBusy}
                        onClick={() => join.mutate(group.id)}>
                        {group.visibility === "PUBLIC"
                            ? "Csatlakozás"
                            : "Csatlakozási kérelem küldése"}
                    </button>
                );
        }
    }

    return (
        <div className="group-bottom-sheet-actions" aria-busy={isBusy}>
            {renderAction()}
            {error && <p role="alert">{getGroupErrorMessage(error)}</p>}
        </div>
    );
}
