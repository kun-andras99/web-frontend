import { getCurrentUser } from "@/features/auth/lib/session";
import { getProfileByUserId } from "@/features/profile/data/profile";
import MeUserHeader from "@/features/user/components/MeUserHeader";

export default async function MePage() {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    const profile = await getProfileByUserId(user.id);

    if (!profile) {
        return null;
    }

    return (
        <main>
            <h1>Felhasználó oldala</h1>
            <MeUserHeader userId={user.id} />
        </main>
    );
}
