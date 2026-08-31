import { cruiseRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export default function CruiseLayout({ children }: { children: ReactNode }) {
    if (!cruiseRoutes) {
        return null;
    }

    return (
        <div>
            <AppTopBar tabs={cruiseRoutes} />

            {children}
        </div>
    );
}
