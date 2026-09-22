import DisplayHeaderTitle from "@/features/(app)/navigations/header-title";
import BaseDrawer from "@/features/_components/drawer/BaseDrawer";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";

export default function AuthLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    return (
        <div className="main-layout-body">
            <header className="header">
                <DisplayHeaderTitle />
                <BaseDrawer />
            </header>
            {/* <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} /> */}
            {/* <BaseDrawer />
            <BodySidebar user={user} /> */}
            <main>{children}</main>
            {/* <aside className="right-sidebar">psst...</aside> */}
        </div>
    );
}
