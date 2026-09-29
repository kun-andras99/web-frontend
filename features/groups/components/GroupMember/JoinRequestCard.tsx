"use client";

import { useMemo } from "react";
import { useJoinRequests } from "../../hooks/useJoinRequests";
import { useRespondToJoinRequest } from "../../hooks/useMemberActions";
import type { JoinRequestAction } from "../../schemas/groups.schema";
import { getGroupErrorMessage } from "../../utils/group-errors";
import { formatDate } from "../../utils/group-ui";
import Avatar from "../GroupDetail/Avatar";

export default function JoinRequestsCard({ groupId }: { groupId: string }) {
    const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
        useJoinRequests(groupId);
    const respond = useRespondToJoinRequest(groupId);

    const requests = useMemo(
        () => data?.pages.flatMap((page) => page.items) ?? [],
        [data],
    );
    if (requests.length === 0) return null;

    const answer = (requestId: string, action: JoinRequestAction) =>
        respond.mutate({ requestId, action });

    return (
        <section className="gd-card" aria-labelledby="gd-requests-title">
            <div className="gd-card-head">
                <h2 id="gd-requests-title" className="gd-card-title">
                    Csatlakozási kérelmek
                </h2>
                <span className="gd-pill">
                    {requests.length}
                    {hasNextPage ? "+" : ""}
                </span>
            </div>

            <ul className="gd-members">
                {requests.map((request) => {
                    const name = request.nickname ?? "Névtelen";
                    return (
                        <li key={request.id} className="gd-member">
                            <Avatar
                                name={name}
                                seed={request.requesterId}
                                size="sm"
                            />
                            <div className="gd-member-info">
                                <span className="gd-member-name">{name}</span>
                                <span className="gd-member-since">
                                    Kérelem: {formatDate(request.createdAt)}
                                </span>
                            </div>
                            <div className="gd-member-actions">
                                <button
                                    type="button"
                                    className="gd-btn gd-btn--primary"
                                    disabled={respond.isPending}
                                    onClick={() =>
                                        answer(request.id, "APPROVE")
                                    }>
                                    Elfogadás
                                </button>
                                <button
                                    type="button"
                                    className="gd-btn"
                                    disabled={respond.isPending}
                                    onClick={() =>
                                        answer(request.id, "REJECT")
                                    }>
                                    Elutasítás
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {hasNextPage && (
                <button
                    type="button"
                    className="gd-btn gd-more-btn"
                    disabled={isFetchingNextPage}
                    onClick={() => void fetchNextPage()}>
                    {isFetchingNextPage ? "Betöltés..." : "Továbbiak"}
                </button>
            )}

            {respond.error && (
                <p role="alert" className="gd-error">
                    {getGroupErrorMessage(respond.error)}
                </p>
            )}
        </section>
    );
}
