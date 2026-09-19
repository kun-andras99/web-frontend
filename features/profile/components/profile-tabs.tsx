"use client";

import { BOTTOM_ICON_COLORS } from "@/features/(app)/navigations/top-bar/icons/icons/icons.data";
import { PROFILE_TABS } from "@/features/profile/data/constants";
import { useProfileTabScroll } from "@/features/profile/hooks/use-profile-tab-scroll";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { ProfileTab } from "../types/profile.types";

interface ProfileTabsProps {
    activeTab: ProfileTab;
    onChange: (tab: ProfileTab) => void;
    usergender: string | null | undefined;
}

export default function ProfileTabs({
    activeTab,
    onChange,
    usergender,
}: ProfileTabsProps) {
    const tabsContainerRef = useRef<HTMLDivElement>(null);

    useProfileTabScroll(tabsContainerRef, activeTab);

    const tabs = PROFILE_TABS(usergender).filter((tab) => tab.show !== false);

    return (
        <div
            className="
                sticky top-[50px] z-10 profile-icon-tabs-wrapper
            ">
            <div
                ref={tabsContainerRef}
                className="overflow-x-auto scrollbar-none profile-icon-tabs-container">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            data-profile-tab={tab.id}
                            onClick={() => onChange(tab.id)}
                            className="relative profile-icon-button">
                            <div
                                className={`profile-icon-container 
                                    ${
                                        isActive
                                            ? "active-profile-icon-container"
                                            : "inactive-profile-icon-container"
                                    }`}>
                                {isActive ? (
                                    <Icon
                                        size={24}
                                        startColor={
                                            BOTTOM_ICON_COLORS.active
                                                .profileIconColor
                                        }
                                    />
                                ) : (
                                    <Icon
                                        size={24}
                                        startColor={
                                            BOTTOM_ICON_COLORS.inactive
                                                .profileIconColor
                                        }
                                    />
                                )}
                                {/* {tab.label} */}
                            </div>

                            {isActive && (
                                <motion.div
                                    layoutId="profile-tab-indicator"
                                    className="
                                    rounded-bl-[5px] rounded-br-[5px]
                                        absolute
                                        z-10
                                        bottom-[1]
                                        h-[3px]
                                        w-[44px]
                                        left-1/2
                                        -translate-x-1/2
                                        rounded-full
                                        profile-tab-indicator
                                    "
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 35,
                                    }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
