"use client";

import type { MobileTopNavigationTab } from "@/features/(app)/navigations/navigation.types";
import { getMobileScreenFullPath } from "@/features/(app)/navigations/navigation.utils";
import { useMobileTopPageTitle } from "@/features/(app)/navigations/usePageTitle";
import { usePathname } from "next/navigation";

export interface MobileTopNavProps {
    tabs?: MobileTopNavigationTab[];
}

export default function DisplayHeaderTitle({ tabs }: MobileTopNavProps) {
    const pathname = usePathname();
    const pageTitle = useMobileTopPageTitle("");

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

    return (
        <section className="display-header-title">
            <h2>{pageTitle}</h2>
        </section>
    );
}
