"use client";
import React from "react";

import { appMenus } from "@/features/(app)/navigations/navigation.config";
import { SessionUserProps } from "@/lib/utils/props";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation({ user }: SessionUserProps) {
    const pathname = usePathname();

    return (
        <section className="main-bottom-navigation">
            <div className="content">
                {appMenus.map((route) => {
                    const isActive =
                        pathname === route.url ||
                        pathname.startsWith(`${route.url}/`);

                    return (
                        <React.Fragment key={route.id}>
                            <Link href={route.url} className={`link`}>
                                <div
                                    className={`icon ${isActive ? "active" : ""}`}>
                                    {isActive ? (
                                        <>{route.activeIcon}</>
                                    ) : (
                                        route.icon
                                    )}
                                </div>
                            </Link>
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    );
}
