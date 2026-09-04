"use client";

import { APP_BOTTOM_BAR_ROUTES } from "@/features/navigations/navigation.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AppBottomBarProps {
    isHidden: boolean;
}

export default function AppBottomBar({ isHidden }: AppBottomBarProps) {
    const pathname = usePathname();

    return (
        <div className={`bottom-bar ${isHidden ? "hidden" : ""}`}>
            <div className="content">
                {APP_BOTTOM_BAR_ROUTES.map((route) => {
                    const isActive =
                        pathname === route.url ||
                        pathname.startsWith(`${route.url}/`);

                    return (
                        <div
                            className={`icon ${isActive ? "active" : ""}`}
                            key={route.id}>
                            <Link href={route.url} className={`link`}>
                                {isActive ? route.activeIcon : route.icon}
                                {/* <span className="text-xs font-medium">
                            {route.title}
                            </span> */}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
