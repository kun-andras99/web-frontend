import { getCurrentUser } from "@/features/auth/lib/session";
import { getProfileUserFull } from "@/features/auth/server/getCurrentUserFull";
import ProfileHeader from "@/features/profile/(pages)/user-profile/components/profileHeader";
import ProfileName from "@/features/profile/(pages)/user-profile/components/ProfileName";
import ProfileTabs from "@/features/profile/(pages)/user-profile/components/profileTabs";
import { recordProfileVisit } from "@/features/profile/repository/profile-visit";
import { prisma } from "@/lib/prisma";
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

    if (!currentUser) {
        redirect("/sign-in");
    }

    if (!user) {
        return null;
    }

    const isOwnProfile = currentUser.id === user.id;

    if (!isOwnProfile) {
        await recordProfileVisit(currentUser.id, user.id);
    }

    const galleries = await prisma.gallery.findMany({
        where: {
            ownerId: id,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            images: {
                orderBy: {
                    uploadedAt: "asc",
                },
                select: {
                    id: true,
                    url: true,
                    uploadedAt: true,

                    gallery: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });

    if (!galleries) return null;

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
                            {user.userData?.avatarUrl ? (
                                <Image
                                    className="avatar-img"
                                    src={user.userData?.avatarUrl}
                                    alt={user.userData?.nickname ?? ""}
                                    width={120}
                                    height={120}
                                />
                            ) : (
                                <Image
                                    className="avatar-img"
                                    src={`/asstes/images/user-blank-1.png`}
                                    alt={user.userData?.nickname ?? ""}
                                    width={120}
                                    height={120}
                                />
                            )}
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
                    <ProfileTabs
                        user={user}
                        galleries={galleries}
                        isOwnProfile={isOwnProfile}
                    />
                </div>
            </div>
        </main>
    );
}
