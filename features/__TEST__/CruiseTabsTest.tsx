"use client";

import { appBottomBarRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    {
        name: "visitors",
        title: "Visitors",
        url: "/cruise/visitors",
    },
    {
        name: "visited",
        title: "Visited",
        url: "/cruise/visited",
    },
];

export default function CruiseTabs() {
    const pathname = usePathname();

    const cruiseTabs = appBottomBarRoutes.find(
        (route) => route.name === "cruise",
    );

    return (
        <div className="w-full touch-pan-y overflow-hidden">
            <div className="tab-list">
                {cruiseTabs?.screens.map((tab) => {
                    const isActive = pathname === tab.fromUrl + tab.url;

                    return (
                        <Link key={tab.name} href={tab.fromUrl + tab.url}>
                            <span className={isActive ? "active-text" : "text"}>
                                {tab.title}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
