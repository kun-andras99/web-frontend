import { loveRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import { ReactNode } from "react";

export default async function LoveLayout({
    children,
}: {
    children: ReactNode;
}) {
    if (!loveRoutes) {
        return null;
    }

    return (
        <>
            {/* <AppTopBar tabs={loveRoutes} /> */}

            {children}
        </>
    );
}
