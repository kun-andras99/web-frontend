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
            <div className="w-full touch-pan-y overflow-hidden top-wrap">
                <div
                    className="top-bar [clip-path:polygon(0px_0px,100%_0px,100%_56px,70%_56px,70%_88px,30%_88px,30%_56px,0px_56px)]
">
                    <div className="content">
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
                        <div className="z-100 flex flex-col items-center justify-center h-[50px]">
                            <p>{pageTitle}</p>
                        </div>

                        {rightSlot ? (
                            <div className="header__right">{rightSlot}</div>
                        ) : null}
                        <div className="tab-list">
                            {tabs.screens?.map((tab) => {
                                const tabUrl = `${tab.fromUrl}${tab.url}`;

                                console.log(tabUrl);
                                console.log({ pathname });

                                const isActive = pathname === tabUrl;

                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => handleTabChange(tabUrl)}
                                        className={
                                            // `${isActive ? " active-tab-item tab-item" : "tab-item"}`
                                            "tab-item"
                                        }>
                                        {isActive ? (
                                            <div className="icon-container">
                                                <div className="icon">
                                                    {tab.activeIcon}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="icon-container">
                                                <div className="icon">
                                                    {tab.icon}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
