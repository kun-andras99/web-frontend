"use client";

import type { ProfileTab, ProfileUser } from "../../../types/profile.types";

import AlbumsView from "@/features/profile/(pages)/user-profile/tabs/AlbumsView";
import StatisticsTabView from "@/features/profile/(pages)/user-profile/tabs/StatisticsTabView";
import UserDatasView from "@/features/profile/(pages)/user-profile/tabs/UserDatasView";
import UserDressView from "@/features/profile/(pages)/user-profile/tabs/UserDressView";
import UserPinView from "@/features/profile/(pages)/user-profile/tabs/UserPinView";

interface ProfileTabContentProps {
    tab: ProfileTab;
    user: ProfileUser;
}

export default function ProfileTabContent({
    tab,
    user,
}: ProfileTabContentProps) {
    switch (tab) {
        case "statistics":
            return <StatisticsTabView user={user} />;
        case "dress":
            return <UserDressView user={user} />;
        case "datas":
            return <UserDatasView user={user} />;
        case "albums":
            return <AlbumsView user={user} />;

        case "pin":
            return <UserPinView user={user} />;

        default:
            return null;
    }
}
