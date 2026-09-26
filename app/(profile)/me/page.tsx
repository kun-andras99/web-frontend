import { getCurrentUser } from "@/features/auth/lib/session";
// import { getProfileByUserId } from "@/features/profile/data/profile";
import MeUserHeader from "@/features/user/components/MeUserHeader";

export default async function MePage() {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    return (
        <main>
            <h1>Felhasználó oldala</h1>
            <MeUserHeader userId={user.id} />
        </main>
    );
}
