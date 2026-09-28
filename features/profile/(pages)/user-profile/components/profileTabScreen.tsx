"use client";

import ProfileTabContent from "@/features/profile/(pages)/user-profile/components/profileTabContent";
import { useProfileTabHeight } from "@/features/profile/(pages)/user-profile/hooks/useProfileTabHeight";
import { useProfileTabSwipe } from "@/features/profile/(pages)/user-profile/hooks/useProfileTabSwipe";
import { useProfileTabTranslate } from "@/features/profile/(pages)/user-profile/hooks/useProfileTabTranslate";
import { useProfileTabWidth } from "@/features/profile/(pages)/user-profile/hooks/useProfileTabWidth";
import { ProfileTabConfig } from "@/features/profile/data/constants";
import { ProfileGallery } from "@/features/profile/types/gallery.types";
import type {
    ProfileTab,
    ProfileUser,
} from "@/features/profile/types/profile.types";
import { useRef } from "react";

interface ProfileTabScreenProps {
    user: ProfileUser;
    isOwnProfile: boolean;
    tabs: readonly ProfileTabConfig[];
    activeTab: ProfileTab;
    activeIndex: number;
    goToTab: (tab: ProfileTab) => void;
    galleries: ProfileGallery[];
}

export default function ProfileTabScreen({
    user,
    tabs,
    activeTab,
    activeIndex,
    goToTab,
    galleries,
    isOwnProfile,
}: ProfileTabScreenProps) {
    const tabRefs = useRef<Partial<Record<ProfileTab, HTMLDivElement | null>>>(
        {},
    );

    const { height } = useProfileTabHeight({
        activeTab,
        tabRefs,
    });

    const tabWidth = useProfileTabWidth();

    const {
        dragX,
        isDragging,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handlePointerCancel,
    } = useProfileTabSwipe({
        activeIndex,
        tabs,
        goToTab,
    });

    const translateX = useProfileTabTranslate({
        activeIndex,
        dragX,
        tabWidth,
    });

    return (
        <div
            className="
                relative
                w-full
                overflow-hidden
                touch-pan-y
            "
            style={{
                height: height !== null ? `${height}px` : undefined,
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}>
            <div
                className={`
                    absolute
                    inset-0
                    flex
                    w-full
                    ${
                        isDragging
                            ? ""
                            : "transition-transform duration-300 ease-out"
                    }
                `}
                style={{
                    width: `${tabs.length * tabWidth}px`,
                    transform: translateX,
                }}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        ref={(element) => {
                            tabRefs.current[tab.id] = element;
                        }}
                        data-tab={tab.id}
                        className="
                            relative
                            w-full
                            min-h-[calc(100dvh-97px)]
                            min-w-0
                            shrink-0
                            self-start
                        "
                        style={{
                            width: `${tabWidth}px`,
                        }}>
                        <ProfileTabContent
                            user={user}
                            isOwnProfile={isOwnProfile}
                            galleries={galleries}
                            tab={tab.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
