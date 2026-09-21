import BodySidebar from "@/features/(app)/navigations/body-sidebar";
import MobileTopNav from "@/features/(app)/navigations/mobile-top-nav";
import { GUEST_TOP_MENU_ROUTES } from "@/features/(app)/navigations/navigation.config";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";

export default function AuthLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    return (
        <div className="app-body">
            <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} />
            <BodySidebar user={user} />
            <main>{children}</main>
            <aside className="right-sidebar">psst...</aside>
        </div>
    );
}
