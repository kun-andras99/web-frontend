"use client";

import { NavigationTab } from "@/features/navigations/navigation.types";
import { usePageTitle } from "@/features/navigations/usePageTitle";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export interface AppTopBarProps {
    tabs: NavigationTab;
    leftSlot?: ReactNode;
    rightSlot?: ReactNode;
    className?: string;

    /**
     * True, amikor a main tartalom görgetett állapotban van.
     */
    isScrolled?: boolean;
}

export default function AppTopBar({
    tabs,
    leftSlot,
    rightSlot,
    className = "",
    isScrolled = false,
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
        <div
            className={`w-full touch-pan-y overflow-hidden top-wrap ${
                isScrolled ? "is-scrolled" : ""
            }`}>
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

                    <div
                        className={`tab-list`}>
                        <div className="icon-container">
                            {tabs.screens?.map((tab) => {
                                const tabUrl = `${tab.fromUrl}${tab.url}`;

                                const isActive = pathname === tabUrl;

                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => handleTabChange(tabUrl)}
                                        className="tab-item">
                                        <div className="icon">
                                            {isActive
                                                ? tab.activeIcon
                                                : tab.icon}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
