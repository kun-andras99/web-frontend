"use client";

import SideDrawer from "@/features/_components/drawer/SideDrawer";
import { useAuth } from "@/features/auth/components/auth-provider";
import type { MobileTopNavigationTab } from "@/features/navigations/navigation.types";
import { getMobileScreenFullPath } from "@/features/navigations/navigation.utils";
import { useMobileTopPageTitle } from "@/features/navigations/usePageTitle";
import { usePathname, useRouter } from "next/navigation";

export interface MobileTopNavProps {
    tabs?: MobileTopNavigationTab[];
    className?: string;
}

export default function MobileTopNav({
    tabs,
    className = "",
}: MobileTopNavProps) {
    const pathname = usePathname();
    const router = useRouter();
    const pageTitle = useMobileTopPageTitle("");
    const user = useAuth();

    const handleTabChange = (url: string) => {
        if (pathname === url) {
            return;
        }

        router.replace(url);
    };

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
                <div className={`tab-list for-mobile`}>
                    <div className={`icon-container `}>
                        {tabs?.map((tab) =>
                            tab.screens?.map((screen) => {
                                const tabUrl = getMobileScreenFullPath(screen);
                                const isActive = pathname === tabUrl;

                                return (
                                    <div key={screen.id}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleTabChange(tabUrl)
                                            }
                                            className={
                                                isActive
                                                    ? "active-tab-item tab-item"
                                                    : "tab-item"
                                            }>
                                            <div className="icon">
                                                {isActive
                                                    ? screen.activeIcon
                                                    : screen.icon}
                                            </div>
                                        </button>
                                    </div>
                                );
                            }),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
