import BottomNavigation from "@/features/(app)/navigations/bottom-navigation";
import DisplayHeaderTitle from "@/features/(app)/navigations/header-title";
import MobileTopNav from "@/features/(app)/navigations/mobile-top-nav";
import { GUEST_TOP_MENU_ROUTES } from "@/features/(app)/navigations/navigation.config";
import BaseDrawer from "@/features/_components/drawer/BaseDrawer";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";

export default function MainLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    return (
        <div className="main-layout-body">
            <header className="header">
                {/* leftmenu */}
                <DisplayHeaderTitle />
                <BaseDrawer />
            </header>
            {user && <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} />}
            {/* <BodySidebar user={user} /> */}
            <main>{children}</main>
            {user && <BottomNavigation user={user} />}
            {/* <aside className="right-sidebar">
                <section className="love-wall-container">
                    <div className="messages">
                        {Array.from({ length: 20 }, (_, index) => (
                            <div className="message" key={index}>
                                <span>kep</span>

                                <div className="wrapper">
                                    <div className="data">
                                        <span>nev</span>
                                        <span>ido</span>
                                    </div>

                                    <div className="content">
                                        itt az üzenet tartalma
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="love-wall-actions">
                        <input type="text" name="" id="" />
                        <button type="submit">S</button>
                    </div>
                </section>
            </aside> */}
        </div>
    );
}
