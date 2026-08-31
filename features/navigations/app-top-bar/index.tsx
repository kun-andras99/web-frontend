"use client";

import { AppBottomBarRoute } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export interface AppTopBarProps {
    tabs: AppBottomBarRoute;
}

export default function AppTopBar({ tabs }: AppTopBarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const handleTabChange = (url: string) => {
        if (pathname === url) {
            return;
        }
        router.replace(url);
    };
    return (
        <div className="w-full touch-pan-y overflow-hidden">
            <div className="top-bar">
                <div className="content">
                    <div className="image">
                        <Image
                            className="top-avatar-pic"
                            src="/assets/images/user-blank-1.png"
                            alt="Profile"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="tab-list">
                        {tabs.screens.map((tab) => {
                            const tabUrl = `${tab.fromUrl}${tab.url}`;

                            const isActive = pathname === tabUrl;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tabUrl)}
                                    className={`${isActive ? "" : "tab-item"}`}>
                                    {isActive ? (
                                        <div className="flex active-tab-item">
                                            <div className="icon">
                                                {tab.activeIcon}
                                                <div className="title">
                                                    {tab.title}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="icon">{tab.icon}</div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
