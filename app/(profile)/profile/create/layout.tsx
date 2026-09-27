import DisplayHeaderTitle from "@/features/(app)/(ui)/DisplayHeaderTitle";
import { ReactNode } from "react";

export default function ProfileCreateLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="main-layout-body">
            <header className="header">
                <DisplayHeaderTitle />
            </header>
            <main>{children}</main>
        </div>
    );
}
