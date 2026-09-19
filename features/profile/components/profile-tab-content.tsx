"use client";

import type { ProfileTab } from "../types/profile.types";

import AlbumsView from "@/features/profile/screens/user-profile/tabs/AlbumsView";
import StatisticsTabView from "@/features/profile/screens/user-profile/tabs/StatisticsTabView";
import UserDatasView from "@/features/profile/screens/user-profile/tabs/UserDatasView";
import UserDressView from "@/features/profile/screens/user-profile/tabs/UserDressView";
import UserPinView from "@/features/profile/screens/user-profile/tabs/UserPinView";

interface ProfileTabContentProps {
    tab: ProfileTab;
    // user: ProfileWithRelations;
}

export default function ProfileTabContent({ tab }: ProfileTabContentProps) {
    switch (tab) {
        case "statistics":
            return <StatisticsTabView />;
        case "dress":
            return <UserDressView />;
        case "datas":
            return <UserDatasView />;
        case "albums":
            return <AlbumsView />;

        case "pin":
            return <UserPinView />;

        default:
            return null;
    }
}
