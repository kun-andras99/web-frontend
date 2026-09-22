"use client";

import type { MobileTopNavigationTab } from "@/features/(app)/navigations/navigation.types";
import { getMobileScreenFullPath } from "@/features/(app)/navigations/navigation.utils";
import { notificationsMock } from "@/features/notification/data/notifications.mock";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface MobileTopNavProps {
    tabs?: MobileTopNavigationTab[];
}

export default function MobileTopNav({ tabs }: MobileTopNavProps) {
    const pathname = usePathname();

    const unreadCount = notificationsMock.filter(
        (notification) => notification.readAt === null,
    ).length;

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

    console.log("unreadCount:", unreadCount);

    return (
        <>
            {(activeTab?.screens?.length ?? 0) > 0 && (
                <div className={`top-tab-links`}>
                    <div className={`top-tab-links__container`}>
                        {activeTab?.screens?.map((screen) => {
                            const screenPath = `${screen.fromUrl}${screen.url}`;

                            const isActive = pathname === screenPath;

                            const name =
                                screen.title.charAt(0).toUpperCase() +
                                screen.title.slice(1);

                            const isNotifications =
                                screenPath === "/inbox/notifications";

                            return (
                                <React.Fragment key={screen.id}>
                                    <Link
                                        href={`${screen.fromUrl}${screen.url}`}>
                                        <div
                                            className={`icon ${
                                                isActive ? "active" : ""
                                            }`}>
                                            <div className="container">
                                                {isActive
                                                    ? screen.activeIcon
                                                    : screen.icon}

                                                <span>
                                                    {name}{" "}
                                                    {isNotifications &&
                                                        unreadCount > 0 && (
                                                            <span className="notification-count">
                                                                +{unreadCount}
                                                            </span>
                                                        )}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
