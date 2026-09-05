"use client";

import type { NavigationTab } from "@/features/navigations/navigation.types";
import { usePageTitle } from "@/features/navigations/usePageTitle";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode } from "react";

export interface AppTopBarProps {
    tabs: NavigationTab;
    leftSlot?: ReactNode;
    rightSlot?: ReactNode;
    className?: string;
}

export default function AppTopBar({
    tabs,
    leftSlot,
    rightSlot,
    className = "",
}: AppTopBarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const pageTitle = usePageTitle("dd");

    const handleTabChange = (url: string) => {
        if (pathname === url) {
            return;
        }

        router.replace(url);
    };

    return (
        <div className={`top-wrap`}>
            <div className={`top-bar ${className}`}>
                <div className={`content`}>
                    {leftSlot ? (
                        <div className="header__left">{leftSlot}</div>
                    ) : null}

                    <div className="image">
                        <Image
                            className="top-avatar-pic"
                            src="/assets/images/user-blank-1.png"
                            alt="Profile"
                            width={36}
                            height={36}
                        />
                    </div>

                    <div className="page-title">
                        <p>{pageTitle}</p>
                    </div>

                    {rightSlot ? (
                        <div className="header__right">{rightSlot}</div>
                    ) : null}
                </div>
            </div>
            <div className={`tab-list`}>
                <div className="icon-container">
                    {tabs.screens?.map((tab) => {
                        const tabUrl = `${tab.fromUrl}${tab.url}`;

                        const isActive = pathname === tabUrl;

                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => handleTabChange(tabUrl)}
                                className={`${isActive ? "active-tab-item tab-item" : "tab-item"}`}>
                                <div className="icon">
                                    {isActive ? tab.activeIcon : tab.icon}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
