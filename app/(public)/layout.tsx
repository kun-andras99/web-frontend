import BottomLayout from "@/features/_components/ui/bottom-layout";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ReactNode } from "react";

export default async function PublicLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await getCurrentUser();

    return (
        <>
            {user?.id ? (
                <BottomLayout user={user}>{children}</BottomLayout>
            ) : (
                children
            )}
        </>
    );
}
