"use client";

import type { ProfileTab, ProfileUser } from "../../types/profile.types";

import AlbumsView from "@/features/profile/components/UserProfile/TabContents/AlbumsView";
import StatisticsTabView from "@/features/profile/components/UserProfile/TabContents/StatisticsTabView";
import UserDatasView from "@/features/profile/components/UserProfile/TabContents/UserDatasView";
import UserDressView from "@/features/profile/components/UserProfile/TabContents/UserDressView";
import UserPinView from "@/features/profile/components/UserProfile/TabContents/UserPinView";
import { ProfileGallery } from "@/features/profile/types/gallery.types";

interface ProfileTabContentProps {
    tab: ProfileTab;
    user: ProfileUser;
    isOwnProfile: boolean;
    galleries: ProfileGallery[];
}

export default function ProfileTabContent({
    tab,
    user,
    galleries,
    isOwnProfile,
}: ProfileTabContentProps) {
    switch (tab) {
        case "statistics":
            return <StatisticsTabView user={user} />;
        case "dress":
            return <UserDressView user={user} />;
        case "datas":
            return <UserDatasView user={user} />;
        case "albums":
            return (
                <AlbumsView
                    user={user}
                    galleries={galleries}
                    isOwnProfile={isOwnProfile}
                />
            );

        case "pin":
            return <UserPinView user={user} />;

        default:
            return null;
    }
}
