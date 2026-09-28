import MainLayout from "@/features/(app)/(ui)/_layout/MainLayout";
import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ChildrenProp } from "@/lib/utils/props";

export default async function MainPagesLayout({ children }: ChildrenProp) {
    const user = await getCurrentUser();

    return (
        <MainLayout user={user}>
            <BottomPageWrapper>{children}</BottomPageWrapper>
        </MainLayout>
    );
}
