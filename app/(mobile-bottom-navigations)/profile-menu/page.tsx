import { requireUser } from "@/features/auth/lib/requireUser";
import MainProfile from "@/features/profile/components/MainProfile";

export default async function DrawerProfilePage() {
    const user = await requireUser();

    if (!user) return null;

    return <MainProfile />;
}
