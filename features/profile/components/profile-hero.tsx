"use client";

import { SessionUserProps } from "@/lib/utils/props";
// import { ProfileWithRelations } from "@/features/profile/types/profile.types";
import { motion } from "framer-motion";

interface ProfileHeroProps {
    // user: ProfileWithRelations;
    isCollapsed: boolean;
}

export default function ProfileHero({
    user,
    isCollapsed,
}: ProfileHeroProps & SessionUserProps) {
    return (
        <section className=" ">
            <motion.div
                animate={{
                    opacity: isCollapsed ? 0 : 1,
                    y: isCollapsed ? -1 : 0,
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeOut",
                }}
                className="overflow-hidden">
                <div className="relative w-full">
                    {/* {user?.avatarUrl && (
                        <Image
                            src={user?.avatarUrl}
                            alt={user?.username}
                            fill
                            priority
                            sizes="
                                (max-width: 640px) 100vw,
                                640px
                            "
                            className="object-cover"
                        />
                    )} */}

                    <div className="profile-card">
                        <div className="data-wrapper">
                            {/* <ProfileAvatarChange
                                username={user?.username}
                                images={PROFILE_AVATAR_MOCK_IMAGES}
                                autoPlay={true}
                                interval={5000}
                            /> */}
                            <div className="data-container">
                                <div>
                                    {/* <p>
                                        {user?.username},{" "}
                                        <span>
                                            {user?.userData?.birth
                                                ? new Date(
                                                      user?.userData.birth,
                                                  ).toLocaleDateString("en-GB")
                                                : "Not specified"}
                                            , {user?.userData?.gender}
                                        </span>
                                    </p>
                                    <p className="text-[#ccc] text-[14px]">
                                        {user?.lat} - {user?.lng}
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="activity-wrapper">
                            <div className="message-btn">
                                <span>Üzenet küldése</span>
                            </div>
                            <div className="activity-btn">
                                <span>...</span>
                            </div>
                        </div>
                    </div>

                    {/* <div
                        className="
                            absolute inset-x-0 bottom-0
                            bg-gradient-to-t
                            from-black/80
                            via-black/30
                            to-transparent
                            p-6 pt-32
                        ">
                        <div className="text-white">
                            <h1 className="text-3xl font-bold">
                                {user?.username}
                            </h1>
                        </div>
                    </div> */}
                </div>
            </motion.div>
        </section>
    );
}
