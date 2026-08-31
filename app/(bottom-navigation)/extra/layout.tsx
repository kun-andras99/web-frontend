import { extraRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export default function ExtraLayout({ children }: { children: ReactNode }) {
    if (!extraRoutes) {
        return null;
    }

    return (
        <div>
            <AppTopBar tabs={extraRoutes} />

            {children}
        </div>
    );
}
