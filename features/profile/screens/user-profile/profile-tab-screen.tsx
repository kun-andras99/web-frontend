"use client";

import ProfileTabContent from "@/features/profile/components/profile-tab-content";
import { PROFILE_TABS } from "@/features/profile/data/constants";
import {
    ProfileTab,
    ProfileWithRelations,
} from "@/features/profile/types/profile.types";
import { PointerEvent, useRef, useState } from "react";

interface ProfileTabViewProps {
    activeIndex: number;
    activeTab: ProfileTab;
    user: ProfileWithRelations;
    onTabChange: (tab: ProfileTab) => void;
}

const SWIPE_THRESHOLD = 60;

export default function ProfileTabScreen({
    activeIndex,
    activeTab,
    user,
    onTabChange,
}: ProfileTabViewProps) {
    const startX = useRef<number | null>(null);
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const tabContentRefs = useRef<Record<ProfileTab, HTMLDivElement | null>>({
        about: null,
        photos: null,
        interests: null,
        "looking-for": null,
        activity: null,
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
            if (delta < 0 && activeIndex < PROFILE_TABS.length - 1) {
                onTabChange(PROFILE_TABS[activeIndex + 1].id);
            }

            if (delta > 0 && activeIndex > 0) {
                onTabChange(PROFILE_TABS[activeIndex - 1].id);
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
                {PROFILE_TABS.map((tab) => (
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
                        <ProfileTabContent tab={activeTab} user={user} />
                    </div>
                ))}
            </div>
        </div>
    );
}
