"use client";

import { BOTTOM_ICON_COLORS } from "@/features/(app)/(ui)/top-bar/icons/icons/icons.data";
import ProfileTabScreen from "@/features/profile/(pages)/user-profile/components/profileTabScreen";
import { useProfileTabNavigation } from "@/features/profile/(pages)/user-profile/hooks/useProfileTabNavigation";
import { useProfileTabs } from "@/features/profile/(pages)/user-profile/hooks/useProfileTabs";
import { ProfileGallery } from "@/features/profile/types/gallery.types";
import type { ProfileUser } from "@/features/profile/types/profile.types";

interface ProfileTabsProps {
    user: ProfileUser;
    galleries: ProfileGallery[];
    isOwnProfile: boolean;
}

export default function ProfileTabs({
    user,
    galleries,
    isOwnProfile,
}: ProfileTabsProps) {
    const { tabs, activeTab, activeIndex, goToTab } = useProfileTabs(
        user.userData?.gender,
        undefined,
    );

    const { tabsRef, navigateToTab } = useProfileTabNavigation({
        activeTab,
        goToTab,
    });

    return (
        <>
            <div
                className="
                    sticky
                    top-[56px]
                    z-5
                    profile-icon-tabs-wrapper
                ">
                <div
                    ref={tabsRef}
                    className="
                        overflow-x-auto
                        scrollbar-none
                        profile-icon-tabs-container
                    ">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;

                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                data-profile-tab={tab.id}
                                onClick={() => navigateToTab(tab.id)}
                                className="profile-icon-button shrink-0">
                                <div
                                    className={`
                                        profile-icon-container
                                        ${
                                            isActive
                                                ? "active-profile-icon-container"
                                                : "inactive-profile-icon-container"
                                        }
                                    `}>
                                    {isActive ? (
                                        <>
                                            <Icon
                                                size={24}
                                                startColor={
                                                    BOTTOM_ICON_COLORS.active
                                                        .profileIconColor
                                                }
                                            />

                                            {tab.label}
                                        </>
                                    ) : (
                                        tab.label
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <ProfileTabScreen
                user={user}
                isOwnProfile={isOwnProfile}
                galleries={galleries}
                tabs={tabs}
                activeTab={activeTab}
                activeIndex={activeIndex}
                goToTab={navigateToTab}
            />
        </>
    );
}
