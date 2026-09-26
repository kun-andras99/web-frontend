import DisplayHeaderTitle from "@/features/(app)/(ui)/DisplayHeaderTitle";
import BaseDrawer from "@/features/(app)/(ui)/drawer/BaseDrawer";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="main-layout-body">
            <header className="header">
                <DisplayHeaderTitle />
                <BaseDrawer />
            </header>
            {/* <BodySidebar user={user} /> */}
            <main>{children}</main>
        </div>
    );
}
