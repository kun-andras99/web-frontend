import { BottomTabIconSVGProps } from "@/features/navigations/top-bar/icons/icons/icons.props";
import ManBodyIconSVG from "@/features/profile/icons/ManBodyIconSVG";
import ManChestIconSVG from "@/features/profile/icons/ManChestIconSVG";
import UserAlbumIconSVG from "@/features/profile/icons/UserAlbumIconSVG";
import UserPinIconSVG from "@/features/profile/icons/UserPinIconSVG";
import WomanChestIconSVG from "@/features/profile/icons/WomanChestIconSVG";
import { ProfileTab } from "@/features/profile/types/profile.types";
import { ComponentType } from "react";
import StatsIconSVG from "../icons/StatsIconSVG";
import WomanDressIconSVG from "../icons/WomanDressIconSVG";

export interface ProfileTabConfig {
    id: ProfileTab;
    label: string;
    icon: ComponentType<BottomTabIconSVGProps>;
    iconHover: ComponentType<BottomTabIconSVGProps>;
}

export const PROFILE_TABS = (gender: string): ProfileTabConfig[] => {
    const isWoman = gender === "woman";

    const DressIcon = isWoman ? WomanDressIconSVG : ManBodyIconSVG;

    const ChestIcon = isWoman ? WomanChestIconSVG : ManChestIconSVG;

    return [
        {
            id: "statistics",
            label: "Statistics",
            icon: StatsIconSVG,
            iconHover: StatsIconSVG,
        },
        {
            id: "dress",
            label: "Lifestyle and dress",
            icon: DressIcon,
            iconHover: StatsIconSVG,
        },

        {
            id: "datas",
            label: "Personal datas",
            icon: ChestIcon,
            iconHover: ChestIcon,
        },

        {
            id: "albums",
            label: "User albums",
            icon: UserAlbumIconSVG,
            iconHover: UserAlbumIconSVG,
        },

        {
            id: "pin",
            label: "User pins",
            icon: UserPinIconSVG,
            iconHover: UserPinIconSVG,
        },
    ];
};
