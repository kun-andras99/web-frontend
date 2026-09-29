import Link from "next/link";
import type { GroupDetailDTO } from "../../schemas/groups.schema";
import { getViewerBadge, VISIBILITY_LABELS } from "../../utils/group-ui";
import Avatar from "./Avatar";

export default function GroupHero({ group }: { group: GroupDetailDTO }) {
    const viewerBadge = getViewerBadge(group);

    return (
        <header className="gd-hero">
            <div className="gd-cover">
                <Link
                    href="/groups"
                    className="gd-back"
                    aria-label="Vissza a csoportokhoz">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden>
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </Link>
            </div>

            <div className="gd-hero-body">
                <Avatar name={group.name} seed={group.id} size="lg" />

                <h1 className="gd-title">{group.name}</h1>
                <p className="gd-byline">
                    Létrehozta{" "}
                    <strong>
                        {group.creatorNickname ?? "ismeretlen felhasználó"}
                    </strong>
                </p>

                <div className="gd-badges">
                    <span className="gd-badge gd-badge--neutral">
                        {VISIBILITY_LABELS[group.visibility]}
                    </span>
                    {viewerBadge && (
                        <span className="gd-badge">{viewerBadge}</span>
                    )}
                </div>
            </div>
        </header>
    );
}
