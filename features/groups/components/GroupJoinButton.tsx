"use client";

import { ApiError } from "@/lib/http/errors";
import { useJoinGroup } from "../hooks/useJoinGroup";
import { useRespondToInvitation } from "../hooks/useRespondToInvitation";
import type { GroupDTO } from "../schemas/groups.schema";

const ERROR_MESSAGES: Record<string, string> = {
    GROUP_NOT_FOUND: "A csoport már nem létezik.",
    INVITATION_NOT_FOUND: "Ez a meghívó már nem érvényes.",
};

function getErrorMessage(error: unknown): string {
    if (error instanceof ApiError && error.code && ERROR_MESSAGES[error.code]) {
        return ERROR_MESSAGES[error.code];
    }
    return "Váratlan hiba történt, próbáld újra.";
}

export default function GroupJoinButton({ group }: { group: GroupDTO }) {
    const join = useJoinGroup();
    const respond = useRespondToInvitation();
    const error = join.error ?? respond.error;

    function renderAction() {
        switch (group.viewerState) {
            case "ADMIN":
            case "MEMBER":
                return <span>Tag vagy</span>;

            case "PENDING":
                return <button disabled>Kérelem elküldve</button>;

            case "INVITED":
                return (
                    <div>
                        <button
                            disabled={respond.isPending}
                            onClick={() =>
                                respond.mutate({
                                    groupId: group.id,
                                    action: "ACCEPT",
                                })
                            }>
                            Meghívó elfogadása
                        </button>
                        <button
                            disabled={respond.isPending}
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
                        disabled={join.isPending}
                        onClick={() => join.mutate(group.id)}>
                        {group.visibility === "PUBLIC"
                            ? "Csatlakozás"
                            : "Csatlakozási kérelem"}
                    </button>
                );
        }
    }

    return (
        <div className="group-join">
            {renderAction()}
            {error && <p role="alert">{getErrorMessage(error)}</p>}
        </div>
    );
}
