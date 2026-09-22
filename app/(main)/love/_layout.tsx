import MobileTopNav from "@/features/(app)/navigations/mobile-top-nav";
import { GUEST_TOP_MENU_ROUTES } from "@/features/(app)/navigations/navigation.config";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ReactNode } from "react";

export default async function LoveLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await getCurrentUser();

    if (!user) return null;

    return (
        <>
            {user && <MobileTopNav tabs={GUEST_TOP_MENU_ROUTES} />}
            {children}
        </>
    );
}
