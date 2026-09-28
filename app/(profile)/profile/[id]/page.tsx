import { getCurrentUser } from "@/features/auth/lib/session";
import { getProfileUserFull } from "@/features/auth/server/getCurrentUserFull";
import ProfileHeader from "@/features/profile/(pages)/user-profile/components/profileHeader";
import ProfileName from "@/features/profile/(pages)/user-profile/components/ProfileName";
import ProfileTabs from "@/features/profile/(pages)/user-profile/components/profileTabs";
// import { getProfileByUserId } from "@/features/profile/data/profile";
import Image from "next/image";
import { redirect } from "next/navigation";

interface UserPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function UserProfilePage({ params }: UserPageProps) {
    const { id } = await params;
    const currentUser = await getCurrentUser();
    const user = await getProfileUserFull(id);

    if (!currentUser) redirect("/sign-in");
    if (!user) redirect("/sign-in");

    return (
        <main>
            <div className="profile">
                <div className="profile__bg-box">
                    <div className="profile-header"></div>
                    {user.userData?.description ? (
                        <p className="description">
                            {user.userData?.description}
                        </p>
                    ) : null}
                    <ProfileHeader user={user} />
                    <div className="profile-card">
                        <div className="data-wrapper">
                            <Image
                                className="avatar-img"
                                src={user.userData?.avatarUrl ?? ""}
                                alt={user.userData?.nickname ?? ""}
                                width={120}
                                height={120}
                            />
                        </div>
                    </div>
                </div>
                <div className="profile__full-data">
                    <div className="top-container">
                        <ProfileName user={user} />
                    </div>
                    <div className="container"></div>
                </div>
                <div className="relative -top-[45px]">
                    <ProfileTabs user={user} />
                </div>
            </div>
        </main>
    );
}
