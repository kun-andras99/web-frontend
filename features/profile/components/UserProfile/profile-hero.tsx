"use client";

import { ProfileAvatarChange } from "@/features/profile/components/AvatarChange";
import { PROFILE_AVATAR_MOCK_IMAGES } from "@/features/profile/components/AvatarChange/mock/avatarChangeMock";
import { ProfileUser } from "@/features/profile/types/profile.types";
// import { ProfileWithRelations } from "@/features/profile/types/profile.types";

interface ProfileHeroProps {
    user: ProfileUser;
}

export default function ProfileHero({ user }: ProfileHeroProps) {
    return (
        <div className="profile-card">
            <div className="data-wrapper">
                <ProfileAvatarChange
                    username={user.userData?.nickname}
                    images={PROFILE_AVATAR_MOCK_IMAGES}
                    autoPlay={true}
                    interval={5000}
                />
            </div>
        </div>
    );
}
