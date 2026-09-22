"use client";

import type { MobileTopNavigationTab } from "@/features/(app)/navigations/navigation.types";
import { getMobileScreenFullPath } from "@/features/(app)/navigations/navigation.utils";
import { useMobileTopPageTitle } from "@/features/(app)/navigations/usePageTitle";
import { useAuth } from "@/features/auth/components/auth-provider";
import { usePathname } from "next/navigation";

export interface MobileTopNavProps {
    tabs?: MobileTopNavigationTab[];
}

export default function DisplayHeaderTitle({ tabs }: MobileTopNavProps) {
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

    return (
        <section className="display-header-title">
            <h2>{pageTitle}</h2>
            {/* {(activeTab?.screens?.length ?? 0) > 0 && (
                    <div className={`tab-list`}>
                        <div className={`icon-container`}>
                            {activeTab?.screens?.map((screen) => {
                                const isActive =
                                    pathname === screen.fromUrl + screen.url;
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
                )}*/}
        </section>
    );
}
