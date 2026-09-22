import DisplayHeaderTitle from "@/features/(app)/navigations/header-title";
import BaseDrawer from "@/features/_components/drawer/BaseDrawer";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";

export default function MainLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    return (
        <div className="main-layout-body">
            {/* <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} /> */}
            <header className="header">
                {/* leftmenu */}
                <DisplayHeaderTitle />
                <BaseDrawer />
            </header>

            {/* <BodySidebar user={user} /> */}
            <main>{children}</main>
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
