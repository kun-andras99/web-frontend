"use client";

import ProfileTabContent from "@/features/profile/components/profile-tab-content";
import { PROFILE_TABS } from "@/features/profile/data/constants";
import { ProfileTab } from "@/features/profile/types/profile.types";
import { PointerEvent, useRef, useState } from "react";

interface ProfileTabViewProps {
    activeIndex: number;
    activeTab: ProfileTab;
    // user: ProfileWithRelations;
    onTabChange: (tab: ProfileTab) => void;
}

const SWIPE_THRESHOLD = 60;

export default function ProfileTabScreen({
    activeIndex,
    activeTab,
    onTabChange,
}: ProfileTabViewProps) {
    const startX = useRef<number | null>(null);
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // javitani
    const tabs = PROFILE_TABS("man");

    const tabContentRefs = useRef<Record<ProfileTab, HTMLDivElement | null>>({
        statistics: null,
        dress: null,
        datas: null,
        albums: null,
        pin: null,
    });

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        startX.current = event.clientX;
        setIsDragging(true);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (!isDragging || startX.current === null) {
            return;
        }

        const delta = event.clientX - startX.current;

        setDragX(delta);
    };

    const handlePointerUp = () => {
        if (!isDragging || startX.current === null) {
            return;
        }

        const delta = dragX;

        if (Math.abs(delta) >= SWIPE_THRESHOLD) {
            if (delta < 0 && activeIndex < tabs.length - 1) {
                onTabChange(tabs[activeIndex + 1].id);
            }

            if (delta > 0 && activeIndex > 0) {
                onTabChange(tabs[activeIndex - 1].id);
            }
        }

        startX.current = null;
        setDragX(0);
        setIsDragging(false);
    };

    const handlePointerCancel = () => {
        startX.current = null;
        setDragX(0);
        setIsDragging(false);
    };

    return (
        <div
            className="
                relative
                overflow-hidden
                touch-pan-y
            "
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}>
            <div
                className="
                    flex
                    w-full
                ">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        data-tab={tab.id}
                        ref={(element) => {
                            tabContentRefs.current[tab.id] = element;
                        }}
                        className="
                            w-full
                            min-w-full
                            min-h-full
                            shrink-0
                        ">
                        <ProfileTabContent tab={activeTab} />
                    </div>
                ))}
            </div>
        </div>
    );
}
