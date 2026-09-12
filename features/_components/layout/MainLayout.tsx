import BodySidebar from "@/features/navigations/body-sidebar";
import TopBar from "@/features/navigations/top-bar";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";

export default function MainLayout({
    children,
    user,
}: ChildrenProp & SessionUserProps) {
    return (
        <div className="app-body">
            <TopBar user={user} />
            <BodySidebar user={user} />
            {children}
            <aside className="right-sidebar">psst...</aside>
        </div>
    );
}
