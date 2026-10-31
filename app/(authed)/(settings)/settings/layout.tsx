import MainLayout from "@/features/(app)/(ui)/_layout/MainLayout";
import { requireUser } from "@/features/auth/lib/requireUser";
import { ChildrenProp } from "@/lib/utils/props";

export default async function SettingsPagesLayout({ children }: ChildrenProp) {
    const user = await requireUser();

    if (!user) return null;

    return <MainLayout user={user}>{children}</MainLayout>;
}
