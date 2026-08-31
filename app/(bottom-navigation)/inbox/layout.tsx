import { inboxRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export default function InboxLayout({ children }: { children: ReactNode }) {
    if (!inboxRoutes) {
        return null;
    }

    return (
        <div>
            <AppTopBar tabs={inboxRoutes} />

            {children}
        </div>
    );
}
