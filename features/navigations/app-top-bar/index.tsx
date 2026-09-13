"use client";

import SideDrawer from "@/features/_components/drawer/SideDrawer";
import type { NavigationTab } from "@/features/navigations/navigation.types";
import { usePageTitle } from "@/features/navigations/usePageTitle";
import { usePathname, useRouter } from "next/navigation";

export interface AppTopBarProps {
    tabs: NavigationTab;
    className?: string;
}

export default function AppTopBar({ tabs, className = "" }: AppTopBarProps) {
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
            <div className={`top-bar`}>
                <div className="page-title">
                    <p>{pageTitle}</p>
                </div>
                <div className={`content`}>
                    <div className="user-container">
                        <div className="image">
                            <SideDrawer />
                        </div>
                    </div>
                    <div>másik</div>
                </div>
            </div>
            <div className={`tab-list for-mobile`}>
                <div className={`icon-container `}>
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
