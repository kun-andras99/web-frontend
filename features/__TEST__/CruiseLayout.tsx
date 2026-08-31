"use client";

import {
    TopTabAppBar,
    useRouteTitle,
} from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export default function CruiseLayout({ children }: { children: ReactNode }) {
    const title = useRouteTitle();
    return (
        <div>
            <TopTabAppBar
                actions={[
                    {
                        id: "search",
                        icon: null,
                        label: "Keresés",
                        onClick: () => {
                            // pl. keresés modal megnyitása
                        },
                    },
                    {
                        id: "notifications",
                        icon: null,
                        label: "Értesítések",
                        href: "/notifications",
                    },
                ]}
            />
            {children}
        </div>
    );
}
