"use client";

import ProfileHeader from "@/features/profile/components/profile-header";
import ProfileHero from "@/features/profile/components/profile-hero";
import ProfileTabs from "@/features/profile/components/profile-tabs";
import { useProfileScroll } from "@/features/profile/hooks/use-profile-scroll";
import { useProfileTabs } from "@/features/profile/hooks/use-profile-tab";
import ProfileTabScreen from "@/features/profile/screens/user-profile/profile-tab-screen";
import { ProfileWithRelations } from "@/features/profile/types/profile.types";
import { useRef } from "react";

interface UserProfileScreenProps {
    user: ProfileWithRelations;
}

export default function UserProfileScreen({ user }: UserProfileScreenProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const tabContentRef = useRef<HTMLDivElement>(null);

    const { isCollapsed } = useProfileScroll(scrollRef, {
        threshold: 150,
    });

    const { activeTab, activeIndex, goToTab } = useProfileTabs();

    const handleTabChange = (tab: typeof activeTab) => {
        goToTab(tab);

        requestAnimationFrame(() => {
            const element = tabContentRef.current;
            const container = scrollRef.current;

            if (!element || !container) return;

            const offset = 100;

            const top = element.offsetTop - offset;

            container.scrollTo({
                top,
                behavior: "smooth",
            });
        });
    };

    return (
        <div className="fixed inset-0">
            <ProfileHeader
                user={user}
                // avatarUrl={user.avatarUrl}
                isCollapsed={isCollapsed}
                onBack={() => window.history.back()}
            />

            <div
                ref={scrollRef}
                className="
                    h-full
                    overflow-y-auto
                ">
                <ProfileHero user={user} isCollapsed={isCollapsed} />

                <ProfileTabs activeTab={activeTab} onChange={goToTab} />

                <div ref={tabContentRef}>
                    <ProfileTabScreen
                        activeIndex={activeIndex}
                        activeTab={activeTab}
                        user={user}
                        onTabChange={handleTabChange}
                    />
                </div>
            </div>
        </div>
    );
}
