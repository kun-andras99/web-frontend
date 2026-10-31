"use client";

import { listMessages } from "@/app/api/love-wall/_mock/store";

import BottomNavigation from "@/features/(app)/(ui)/MainBottomNavigation";
// import MobileTopNav from "@/features/(app)/(ui)/mobile-top-nav";
import LeftSidebar from "@/features/(app)/(ui)/sidebar/LeftSidebar";
// import { GUEST_TOP_MENU_ROUTES } from "@/features/(app)/navigations/navigation.config";
import LoveWall from "@/features/love-wall/components/LoveWall";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";
import { useState } from "react";

export default function MainLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    const [loveWallOpen, setLoveWallOpen] = useState(false);
    const { items, nextCursor } = listMessages(null);

    return (
        <>
            {/* <BaseDrawer /> */}
            {/* {user && <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} />} */}
            {/* <BodySidebar user={user} /> */}
            <aside id="left-sidebar">
                <LeftSidebar user={user} />
            </aside>
            <main id="main">{children}</main>
            <aside id="right-sidebar" className={loveWallOpen ? "is-open" : ""}>
                <LoveWall
                    initialMessages={items}
                    initialCursor={nextCursor}
                    isOpen={loveWallOpen}
                    onOpen={() => setLoveWallOpen(true)}
                    onClose={() => setLoveWallOpen(false)}
                />
            </aside>
            {user && <BottomNavigation />}
        </>
    );
}
