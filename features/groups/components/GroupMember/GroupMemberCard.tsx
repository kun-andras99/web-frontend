import Link from "next/link";
import type { GroupDetailDTO } from "../../schemas/groups.schema";
import { formatDate, ROLE_LABELS } from "../../utils/group-ui";
import Avatar from "../GroupDetail/Avatar";
export default function GroupMembersCard({ group }: { group: GroupDetailDTO }) {
    const { memberPreview, memberCount, membersVisible } = group;

    return (
        <section className="gd-card" aria-labelledby="gd-members-title">
            <div className="gd-card-head">
                <span className="gd-pill">{memberCount}</span>
            </div>

            {!membersVisible ? (
                <div className="gd-locked">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden>
                        <rect x="4" y="11" width="16" height="10" rx="2.5" />
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    <p>A tagok listája csak a csoport tagjainak látható.</p>
                </div>
            ) : (
                <>
                    <ul className="gd-members">
                        {memberPreview.map((member) => {
                            const name = member.nickname ?? "Névtelen";
                            return (
                                <li key={member.userId} className="gd-member">
                                    <Avatar
                                        name={name}
                                        seed={member.userId}
                                        size="sm"
                                    />
                                    <div className="gd-member-info">
                                        <span className="gd-member-name">
                                            {name}
                                        </span>
                                        <span className="gd-member-since">
                                            Csatlakozott:{" "}
                                            {formatDate(member.joinedAt)}
                                        </span>
                                    </div>
                                    {member.role === "ADMIN" && (
                                        <span className="gd-role">
                                            {ROLE_LABELS.ADMIN}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    {membersVisible && (
                        <Link
                            href={`/group/${group.id}/members`}
                            className="gd-more gd-link">
                            Összes tag megtekintése ({memberCount})
                        </Link>
                    )}
                </>
            )}
        </section>
    );
}
