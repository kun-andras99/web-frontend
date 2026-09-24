import AuthLayout from "@/features/(app)/(ui)/_layout/AuthLayout";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ChildrenProp } from "@/lib/utils/props";

export default async function AuthenticationLayout({ children }: ChildrenProp) {
    const user = await getCurrentUser();

    return <AuthLayout user={user}>{children}</AuthLayout>;
}
