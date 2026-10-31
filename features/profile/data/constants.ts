import { BottomTabIconSVGProps } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.props";
import ManBodyIconSVG from "@/features/profile/components/icons/ManBodyIconSVG";
import ManChestIconSVG from "@/features/profile/components/icons/ManChestIconSVG";
import UserAlbumIconSVG from "@/features/profile/components/icons/UserAlbumIconSVG";
import UserPinIconSVG from "@/features/profile/components/icons/UserPinIconSVG";
import WomanChestIconSVG from "@/features/profile/components/icons/WomanChestIconSVG";
import { ProfileTab } from "@/features/profile/types/profile.types";
import { ComponentType } from "react";
import StatsIconSVG from "../components/icons/StatsIconSVG";
import WomanDressIconSVG from "../components/icons/WomanDressIconSVG";

export interface ProfileTabConfig {
    id: ProfileTab;
    label: string;
    icon: ComponentType<BottomTabIconSVGProps>;
    iconHover: ComponentType<BottomTabIconSVGProps>;
    show?: boolean;
}

export const PROFILE_TABS = (
    gender: string | null | undefined,
): ProfileTabConfig[] => {
    const isWoman = gender === "WOMAN" || gender === "TRANS_WOMAN";

    const DressIcon = isWoman ? WomanDressIconSVG : ManChestIconSVG;

    const ChestIcon = isWoman ? WomanChestIconSVG : ManBodyIconSVG;
    // const visibility = user?.tabVisibility || {};

    return [
        {
            id: "statistics",
            label: "Statistics",
            icon: StatsIconSVG,
            iconHover: StatsIconSVG,
            // show: visibility.statistics !== false,
        },
        {
            id: "dress",
            label: "Lifestyle and dress",
            icon: DressIcon,
            iconHover: StatsIconSVG,
            // show: isWoman && visibility.dress !== false,
        },
        {
            id: "datas",
            label: "Personal datas",
            icon: ChestIcon,
            iconHover: ChestIcon,
            // show: visibility.datas !== false,
        },
        {
            id: "albums",
            label: "User albums",
            icon: UserAlbumIconSVG,
            iconHover: UserAlbumIconSVG,
            // show: visibility.albums !== false,
        },
        {
            id: "pin",
            label: "User pins",
            icon: UserPinIconSVG,
            iconHover: UserPinIconSVG,
            // show: visibility.pin !== false,
        },
    ];
};
