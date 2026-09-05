import { loveRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export default function LoveLayout({ children }: { children: ReactNode }) {
    if (!loveRoutes) {
        return null;
    }

    return (
        <>
            <AppTopBar tabs={loveRoutes} />

            {children}
        </>
    );
}
