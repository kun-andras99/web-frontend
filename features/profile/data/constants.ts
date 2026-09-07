import { ProfileTab } from "@/features/profile/types/profile.types";

export interface ProfileTabConfig {
    id: ProfileTab;
    label: string;
}

export const PROFILE_TABS: ProfileTabConfig[] = [
    {
        id: "about",
        label: "About",
    },
    {
        id: "photos",
        label: "Photos",
    },
    {
        id: "interests",
        label: "Interests",
    },
    {
        id: "looking-for",
        label: "Looking for",
    },
    {
        id: "activity",
        label: "Activity",
    },
];
