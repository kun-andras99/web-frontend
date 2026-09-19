import BodySidebar from "@/features/(app)/navigations/body-sidebar";
import MobileTopNav from "@/features/(app)/navigations/mobile-top-nav";
import { GUEST_TOP_MENU_ROUTES } from "@/features/(app)/navigations/navigation.config";
import TopBar from "@/features/(app)/navigations/top-bar";
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
            <aside className="right-sidebar">
                <section className="love-wall-container">
                    <div className="messages">
                        {Array.from({ length: 20 }, (_, index) => (
                            <div className="message" key={index}>
                                <span>kep</span>

                                <div className="wrapper">
                                    {/* ikonokkal megjelenitve */}
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
            </aside>
        </div>
    );
}
