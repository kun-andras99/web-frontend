"use client";

import { SessionUser } from "@/features/auth/types/auth-index";
import { APP_BOTTOM_BAR_ROUTES } from "@/features/navigations/navigation.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppBottomBar({user}: {user: SessionUser | null}) {
    const pathname = usePathname();

    return (
        <div className={`bottom-bar`}>
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
