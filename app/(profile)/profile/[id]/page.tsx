import { getCurrentUser } from "@/features/auth/lib/session";
// import { getProfileByUserId } from "@/features/profile/data/profile";
import UserProfileScreen from "@/features/profile/screens/user-profile";
import { redirect } from "next/navigation";

interface UserPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function UserProfilePage({ params }: UserPageProps) {
    const { id } = await params;
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    // const user = usersMock.find((user) => user.id === id);

    // if (!user) redirect("/love");
    // const profile = await getProfileByUserId(id);

    // if (!profile) {
    //     redirect("/love");
    // }

    return <UserProfileScreen />;
}
