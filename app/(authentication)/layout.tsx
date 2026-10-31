import MainLayout from "@/features/(app)/(ui)/_layout/MainLayout";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ChildrenProp } from "@/lib/utils/props";

export default async function AuthenticationLayout({ children }: ChildrenProp) {
    const user = await getCurrentUser();

    return <MainLayout user={user}>{children}</MainLayout>;
}
