"use client";

import { ProfileWithRelations } from "@/features/profile/types/profile.types";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ProfileHeaderProps {
    user: ProfileWithRelations;
    avatarUrl?: string | null;
    isCollapsed: boolean;
    onBack: () => void;
}

export default function ProfileHeader({
    user,
    avatarUrl,
    isCollapsed,
    onBack,
}: ProfileHeaderProps) {
    return (
        <header className="fixed inset-x-0 top-0 z-10 h-[50px]">
            <div className="relative flex h-[50px] items-center ">
                <button
                    type="button"
                    onClick={onBack}
                    className="
                        relative z-10
                        flex size-10 items-center justify-center
                        hover:bg-black/20
                    ">
                    <ArrowLeft className="size-5" />
                </button>

                <motion.div
                    initial={false}
                    animate={{
                        opacity: isCollapsed ? 1 : 0,
                        scale: isCollapsed ? 1 : 0.9,
                        // x: isCollapsed ? -110 : -130,
                        left: isCollapsed ? 0 : -8,
                        paddingLeft: isCollapsed ? 40 : 32,
                        top: isCollapsed ? 0 : 0,
                        background: isCollapsed
                            ? "var(--background)"
                            : "transparent",
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
                    <div className="flex items-center gap-2">
                        <div className="relative h-[50px] overflow-hidden rounded-full">
                            {avatarUrl && (
                                <Image
                                    src={avatarUrl}
                                    alt={`alt`}
                                    fill
                                    sizes="32px"
                                    className="object-cover"
                                />
                            )}
                        </div>

                        <span className="text-sm font-semibold text-[18px]">
                            {user?.username}
                        </span>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
