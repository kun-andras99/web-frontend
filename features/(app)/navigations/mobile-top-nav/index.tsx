"use client";

import type { MobileTopNavigationTab } from "@/features/(app)/navigations/navigation.types";
import { getMobileScreenFullPath } from "@/features/(app)/navigations/navigation.utils";
import { useMobileTopPageTitle } from "@/features/(app)/navigations/usePageTitle";
import SideDrawer from "@/features/_components/drawer/SideDrawer";
import { useAuth } from "@/features/auth/components/auth-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface MobileTopNavProps {
    tabs?: MobileTopNavigationTab[];
}

export default function MobileTopNav({ tabs }: MobileTopNavProps) {
    const pathname = usePathname();
    const pageTitle = useMobileTopPageTitle("");
    const user = useAuth();

    const active = tabs
        ?.flatMap((tab) =>
            (tab.screens ?? []).map((screen) => ({
                tab,
                screen,
            })),
        )
        .find(({ screen }) => {
            const tabUrl = getMobileScreenFullPath(screen);
            return pathname === tabUrl;
        });

    const activeTab = active?.tab;

    // console.log(activeTab);

    return (
        <section className="mobile-top-header">
            <div className={`top-wrap`}>
                <div className={`top-bar`}>
                    <div className={`content`}>
                        {user ? (
                            <div className="user-container">
                                <div className="image">
                                    <SideDrawer />
                                </div>
                                <div>másik</div>
                            </div>
                        ) : null}

                        <div className="page-title">
                            <p>{pageTitle}</p>
                        </div>
                    </div>
                </div>
                {(activeTab?.screens?.length ?? 0) > 0 && (
                    <div className={`tab-list`}>
                        <div className={`icon-container`}>
                            {activeTab?.screens?.map((screen) => {
                                const isActive =
                                    pathname === screen.fromUrl + screen.url;
                                // screen neve nagybetűvel kezdve
                                const name =
                                    screen.name.charAt(0).toUpperCase() +
                                    screen.name.slice(1);

                                return (
                                    <React.Fragment key={screen.id}>
                                        <Link
                                            href={`${screen.fromUrl}${screen.url}`}>
                                            <div
                                                className={`icon ${isActive ? "active" : null}`}>
                                                <div className="container">
                                                    {isActive ? (
                                                        <>
                                                            {screen.activeIcon}
                                                            <span>{name}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {screen.icon}
                                                            <span>{name}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
