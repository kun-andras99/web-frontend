"use client";

import {
    useChangeMemberRole,
    useRemoveMember,
} from "../../hooks/useMemberActions";
import type { GroupMemberDTO } from "../../schemas/groups.schema";
import { getGroupErrorMessage } from "../../utils/group-errors";
import { formatDate } from "../../utils/group-ui";
import Avatar from "../GroupDetail/Avatar";

interface MemberRowProps {
    groupId: string;
    member: GroupMemberDTO;
    viewer: { isOwner: boolean; isAdmin: boolean };
}

export default function MemberRow({ groupId, member, viewer }: MemberRowProps) {
    const changeRole = useChangeMemberRole(groupId);
    const remove = useRemoveMember(groupId);

    const name = member.nickname ?? "Névtelen";
    // ugyanazok a szabályok, mint a szerveren (a szerver ettől függetlenül ellenőriz)
    const canChangeRole = viewer.isOwner && !member.isOwner;
    const canRemove =
        viewer.isAdmin &&
        !member.isOwner &&
        (member.role !== "ADMIN" || viewer.isOwner);

    const isBusy = changeRole.isPending || remove.isPending;
    const error = changeRole.error ?? remove.error;
    const roleLabel = member.isOwner
        ? "Létrehozó"
        : member.role === "ADMIN"
          ? "Admin"
          : null;

    return (
        <li className="gd-member">
            <Avatar name={name} seed={member.userId} size="sm" />

            <div className="gd-member-info">
                <span className="gd-member-name">{name}</span>
                <span className="gd-member-since">
                    Csatlakozott: {formatDate(member.joinedAt)}
                </span>
            </div>

            {roleLabel && <span className="gd-role">{roleLabel}</span>}

            {(canChangeRole || canRemove) && (
                <div className="gd-member-actions">
                    {canChangeRole && (
                        <button
                            type="button"
                            className="gd-btn"
                            disabled={isBusy}
                            onClick={() =>
                                changeRole.mutate({
                                    userId: member.userId,
                                    role:
                                        member.role === "ADMIN"
                                            ? "MEMBER"
                                            : "ADMIN",
                                })
                            }>
                            {member.role === "ADMIN"
                                ? "Admin elvétele"
                                : "Adminná tesz"}
                        </button>
                    )}
                    {canRemove && (
                        <button
                            type="button"
                            className="gd-btn gd-btn--danger"
                            disabled={isBusy}
                            onClick={() => {
                                if (
                                    window.confirm(
                                        `Biztosan eltávolítod ezt a tagot: ${name}?`,
                                    )
                                ) {
                                    remove.mutate(member.userId);
                                }
                            }}>
                            Eltávolítás
                        </button>
                    )}
                </div>
            )}

            {error && (
                <p role="alert" className="gd-error gd-member-error">
                    {getGroupErrorMessage(error)}
                </p>
            )}
        </li>
    );
}
