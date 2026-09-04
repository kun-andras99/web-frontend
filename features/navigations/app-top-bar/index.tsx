"use client";

import { NavigationTab } from "@/features/navigations/navigation.types";
import { usePageTitle } from "@/features/navigations/usePageTitle";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export interface AppTopBarProps {
    tabs: NavigationTab;
    leftSlot?: ReactNode;
    /** Jobb oldali slot, pl. akció gombok / menü */
    rightSlot?: ReactNode;
    className?: string;
}

export default function AppTopBar({
    tabs,
    leftSlot,
    rightSlot,
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
        <>
            <div className="w-full touch-pan-y overflow-hidden">
                <div className="top-bar">
                    <div className="content">
                        {leftSlot ? (
                            <div className="header__left">{leftSlot}</div>
                        ) : null}
                        <div className="image">
                            <Image
                                className="top-avatar-pic"
                                src="/assets/images/user-blank-1.png"
                                alt="Profile"
                                width={34}
                                height={34}
                            />
                        </div>
                        <div className="z-100 flex flex-col items-center justify-center h-[50px]">
                            <p>{pageTitle}</p>
                        </div>

                        {rightSlot ? (
                            <div className="header__right">{rightSlot}</div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="tab-list">
                {tabs.screens?.map((tab) => {
                    const tabUrl = `${tab.fromUrl}/${tab.url}`;

                    const isActive = pathname === tabUrl;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tabUrl)}
                            className={`${isActive ? "" : "tab-item"}`}>
                            {/* {isActive ? (
                                        <div className="flex active-tab-item">
                                            <div className="icon">
                                                {tab.activeIcon}
                                                <div className="title">
                                                    {tab.title}
                                                </div>
                                            </div>
                                        </div>
                                    ) : ( */}
                            <div className="icon">{tab.icon}</div>
                            {/* )} */}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
