import MainLayout from "@/features/_components/layout/MainLayout";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ChildrenProp } from "@/lib/utils/props";

export default async function PublicPagesLayout({ children }: ChildrenProp) {
    const user = await getCurrentUser();

    return <MainLayout user={user}>{children}</MainLayout>;
}
