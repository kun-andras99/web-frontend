import { communityRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode } from "react";

export interface BottomLayoutProps {
    children: ReactNode;
}

export default async function CommunityLayout({ children }: BottomLayoutProps) {
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
