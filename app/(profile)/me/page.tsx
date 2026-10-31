// import { getProfileUserFull } from "@/features/auth/server/getCurrentUserFull";
// import { getProfileByUserId } from "@/features/profile/data/profile";
// import UserProfileScreen from "@/features/profile/(pages)/user-profile";
import { redirect } from "next/navigation";
import { requireCurrentUser } from "@/features/auth/lib/session";

// interface UserPageProps {
//     params: Promise<{
//         id: string;
//     }>;
// }

export default async function MePage(
    // { params }: UserPageProps
) {
    // const { id } = await params;
    const currentUser = await requireCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    // const user = await getProfileUserFull(id);

    // if (!user) return;

    // return <UserProfileScreen user={user} />;
}
