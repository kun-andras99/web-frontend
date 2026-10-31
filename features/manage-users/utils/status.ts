import type {
    ManageFilter,
    RelationStatus,
} from "../schemas/manage-users.schema";

export const STATUS_LABELS: Record<RelationStatus, string> = {
    FRIEND: "Barát",
    FAVORITE: "Kedvenc",
    BLOCKED: "Tiltva",
};

export const STATUS_CLASSES: Record<RelationStatus, string> = {
    FRIEND: "bg-emerald-500/15 text-emerald-300",
    FAVORITE: "bg-amber-500/15 text-amber-300",
    BLOCKED: "bg-red-500/15 text-red-300",
};

export const FILTER_OPTIONS: ReadonlyArray<{
    value: ManageFilter;
    label: string;
}> = [
    { value: "all", label: "Összes" },
    { value: "friends", label: "Barátok" },
    { value: "favorites", label: "Kedvencek" },
    { value: "blocked", label: "Tiltottak" },
];

export const EMPTY_MESSAGES: Record<ManageFilter, string> = {
    all: "Még nincs barátod, kedvenced vagy tiltott felhasználód.",
    friends: "Még nincs barátod.",
    favorites: "Még nincs kedvenc felhasználód.",
    blocked: "Nem tiltottál le senkit.",
};
