"use client";

import { APP_BOTTOM_BAR_ROUTES } from "@/features/navigations/navigation.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavigationBar() {
    const pathname = usePathname();

    return (
        <section className="flex flex-1 items-center justify-center">
            <section className={`main-navigation-bar`}>
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
            </section>
        </section>
    );
}
