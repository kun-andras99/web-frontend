"use client";

import { useProfileScroll } from "@/features/profile/hooks/Profile/Tabs/useProfileScroll";
import { ProfileUser } from "@/features/profile/types/profile.types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ProfileHeaderProps {
    user: ProfileUser;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const { isCollapsed } = useProfileScroll(scrollRef, {
        threshold: 206,
    });

    return (
        <motion.div
            initial={false}
            animate={{
                opacity: isCollapsed ? 1 : 0,
                scale: isCollapsed ? 1 : 0.9,
                // x: isCollapsed ? -110 : -130,
                left: isCollapsed ? 0 : -8,
                paddingLeft: isCollapsed ? 40 : 32,
                top: isCollapsed ? 0 : 0,
                background: isCollapsed ? "var(--background)" : "transparent",
            }}
            transition={{
                duration: 0.15,
                ease: "easeOut",
            }}
            className="
                        pointer-events-none
                        absolute inset-x-0
                        flex items-center 
                        bg-[var(--background)]
                    ">
            <div className="">
                <div className="">
                    {user.userData?.avatarUrl ? (
                        <Image
                            src={user.userData?.avatarUrl}
                            alt={`alt`}
                            fill
                            sizes="32px"
                            className="object-cover"
                        />
                    ) : (
                        "nincs kép"
                    )}
                </div>
            </div>
        </motion.div>
    );
}
