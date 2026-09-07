"use client";

import { ProfileWithRelations } from "@/features/profile/types/profile.types";
import { motion } from "framer-motion";

interface ProfileHeroProps {
    user: ProfileWithRelations;
    isCollapsed: boolean;
}

export default function ProfileHero({ user, isCollapsed }: ProfileHeroProps) {
    return (
        <section className="px-4 pt-20">
            <motion.div
                animate={{
                    opacity: isCollapsed ? 0 : 1,
                    y: isCollapsed ? -20 : 0,
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeOut",
                }}
                className="overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5] w-full">
                    {/* {user.avatarUrl && (
                        <Image
                            src={user.avatarUrl}
                            alt={user.username}
                            fill
                            priority
                            sizes="
                                (max-width: 640px) 100vw,
                                640px
                            "
                            className="object-cover"
                        />
                    )} */}

                    <div
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
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
