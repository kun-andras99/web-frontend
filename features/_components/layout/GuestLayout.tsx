import BaseDrawer from "@/features/_components/drawer/BaseDrawer";
import { ChildrenProp } from "@/lib/utils/props";

export default function GuestLayout({ children }: ChildrenProp) {
    return (
        <div className="guest-layout-body">
            {/* <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} /> */}
            <header>
                <h2>Kamaftu</h2>
                <BaseDrawer />
            </header>
            <main>{children}</main>
        </div>
    );
}
