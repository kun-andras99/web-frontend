import type { GroupDetailDTO, GroupMemberRole } from "../schemas/groups.schema";

export const VISIBILITY_LABELS: Record<GroupDetailDTO["visibility"], string> = {
    PUBLIC: "Nyilvános",
    PRIVATE: "Privát",
};

export const ROLE_LABELS: Record<GroupMemberRole, string> = {
    ADMIN: "Admin",
    MEMBER: "Tag",
};

const firstChar = (word: string) => Array.from(word)[0] ?? "";

export function getInitials(name: string): string {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "?";

    const first = firstChar(words[0]);
    const last = words.length > 1 ? firstChar(words[words.length - 1]) : "";
    return (first + last).toUpperCase();
}

/** Determinisztikus színárnyalat: ugyanaz a csoport / user mindig ugyanolyan színű. */
export function hueFromString(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
    }
    return hash % 360;
}

// UTC: a szerver és a böngésző időzónája eltérhet, ami hydration hibát okozna
const longDate = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
});
const shortDate = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
});

export const formatDate = (iso: string) => longDate.format(new Date(iso));
export const formatShortDate = (iso: string) => shortDate.format(new Date(iso));

export function getViewerBadge(group: GroupDetailDTO): string | null {
    if (group.viewerRole === "ADMIN") return ROLE_LABELS.ADMIN;
    if (group.viewerState === "MEMBER") return ROLE_LABELS.MEMBER;
    return null;
}
