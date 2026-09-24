import BackButton from "@/features/(app)/(ui)/back-button/BackButton";
import BackButtonIconSVG from "@/features/(app)/(ui)/back-button/BackButtonIconSvg";
import DisplayHeaderTitle from "@/features/(app)/(ui)/DisplayHeaderTitle";
import BaseDrawer from "@/features/(app)/(ui)/drawer/BaseDrawer";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="main-layout-body">
            <header className="header">
                <DisplayHeaderTitle />
                <BaseDrawer />
                <BackButton className="back-button">
                    <BackButtonIconSVG size={18} />
                </BackButton>
            </header>
            {/* <BodySidebar user={user} /> */}
            <main>{children}</main>
        </div>
    );
}
