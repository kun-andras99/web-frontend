import { getCurrentUser } from "@/features/auth/lib/session";
import { communityRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export default async function CommunityLayout({
    children,
}: {
    children: ReactNode;
}) {

    if (!communityRoutes) {
        return null;
    }

    return (
        <div>
            <AppTopBar tabs={communityRoutes} />
            {children}
        </div>
    );
}
