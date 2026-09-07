"use client";

import { motion } from "framer-motion";

import { PROFILE_TABS } from "@/features/profile/data/constants";
import type { ProfileTab } from "../types/profile.types";

interface ProfileTabsProps {
    activeTab: ProfileTab;
    onChange: (tab: ProfileTab) => void;
}

export default function ProfileTabs({ activeTab, onChange }: ProfileTabsProps) {
    return (
        <div
            className="
                sticky top-16 z-40
                border-b border-black/10
                bg-background/80
                backdrop-blur-2xl
            ">
            <div className="flex overflow-x-auto scrollbar-none">
                {PROFILE_TABS.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => onChange(tab.id)}
                            className="
                                relative
                                min-w-max
                                px-4 py-4
                                text-sm
                                font-medium
                                text-muted-foreground
                            ">
                            <span className={isActive ? "text-foreground" : ""}>
                                {tab.label}
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="profile-tab-indicator"
                                    className="
                                        absolute
                                        inset-x-3
                                        bottom-0
                                        h-[5px]
                                        w-[5px]
                                        left-1/2
                                        -translate-x-1/2
                                        rounded-full
                                        bg-foreground
                                    "
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 35,
                                    }}
                                    style={{
                                        transform: `translateX(-40px)`,
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
