"use client";

import { ProfileUser } from "@/features/profile/types/profile.types";
import { calculateAge } from "@/lib/_lib/validations/profile";
// import { ProfileWithRelations } from "@/features/profile/types/profile.types";

interface ProfileHeroProps {
    user: ProfileUser;
}

export default function ProfileName({ user }: ProfileHeroProps) {
    return (
        <>
            <h2 className="nickname">{user.userData?.nickname}</h2>
            <span className="data">
                {calculateAge(user.userData?.birth)} éves{" "}
                {user.userData?.gender}
            </span>
            <span className="data">
                {user.userData?.sexuality} negyed lakója.
            </span>
            küldj neki üzenetet most
        </>
    );
}
