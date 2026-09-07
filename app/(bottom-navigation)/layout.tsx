import BottomLayout from "@/features/_components/ui/bottom-layout";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ReactNode } from "react";

export default async function BottomTabLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await getCurrentUser();

    console.log(user);
    return (
        <>{user ? <BottomLayout user={user}>{children}</BottomLayout> : ""}</>
    );
}
