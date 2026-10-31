import { requireCurrentUser } from "@/features/auth/lib/session";
import { prisma } from "@/lib/prisma";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function UserProfileEditPage({ params }: PageProps) {
    const { id } = await params;
    const currentUser = await requireCurrentUser();

    if (currentUser.id !== id) {
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
                </div>
                <div className="profile__full-data">
                    <div className="top-container"></div>
                    <div className="container"></div>
                </div>
                <div className="relative -top-[45px]">
                    {/* <ProfileTabs
                        user={user}
                        galleries={galleries}
                        isOwnProfile={isOwnProfile}
                    /> */}
                </div>
            </div>
        </main>
    );
}
