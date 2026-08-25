import AppBottomBar from "@/features/navigations/app-bottom-bar";
import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export default function PublicLayout({
    children
 }: {
    children: ReactNode
 }) {
    return (
        <div className="test">
            <AppTopBar />
            <main>
            {children}
            </main>
            <AppBottomBar />
        </div>
    );
}
