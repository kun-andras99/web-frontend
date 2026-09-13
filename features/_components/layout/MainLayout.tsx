import BodySidebar from "@/features/navigations/body-sidebar";
import MobileTopNav from "@/features/navigations/mobile-top-nav";
import { GUEST_TOP_MENU_ROUTES } from "@/features/navigations/navigation.config";
import TopBar from "@/features/navigations/top-bar";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";
export default function MainLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    return (
        <div className="app-body">
            <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} />
            <TopBar user={user} />
            <BodySidebar user={user} />
            <main>{children}</main>
            <aside className="right-sidebar">psst...</aside>
        </div>
    );
}
