import AppTopBar from "@/features/navigations/app-top-bar";
import { inboxRoutes } from "@/features/navigations/navigation.config";
import { ReactNode } from "react";

export default async function InboxLayout({
    children,
}: {
    children: ReactNode;
}) {
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
