import QuickLoginForm from "@/features/navigations/body-sidebar/components/QuickLoginForm";
import SidebarMainMenus from "@/features/navigations/body-sidebar/components/SidebarMainMenus";
import { SessionUserProps } from "@/lib/utils/props";

export default function BodySidebar({ user }: SessionUserProps) {
    return (
        <aside className="left-sidebar">
            {!user ? <QuickLoginForm /> : <SidebarMainMenus />}
        </aside>
    );
}
