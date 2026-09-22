import BodySidebar from "@/features/(app)/navigations/body-sidebar";
import BaseDrawer from "@/features/_components/drawer/BaseDrawer";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";

export default function AuthLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    return (
        <div className="app-body">
            {/* <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} /> */}
            <BaseDrawer />
            <BodySidebar user={user} />
            <main>{children}</main>
            <aside className="right-sidebar">psst...</aside>
        </div>
    );
}
