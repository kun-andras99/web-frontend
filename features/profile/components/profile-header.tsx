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
        <header className="fixed inset-x-0 top-0 z-50 h-16">
            <div className="relative flex h-full items-center px-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="
                        relative z-20
                        flex size-10 items-center justify-center
                        rounded-full
                        bg-black/10
                        backdrop-blur-xl
                        transition
                        hover:bg-black/20
                    ">
                    <ArrowLeft className="size-5" />
                </button>

                <motion.div
                    initial={false}
                    animate={{
                        opacity: isCollapsed ? 1 : 0,
                        scale: isCollapsed ? 1 : 0.92,
                        x: isCollapsed ? 0 : -10,
                    }}
                    transition={{
                        duration: 0.1,
                        ease: "easeOut",
                    }}
                    className="
                        pointer-events-none
                        absolute inset-x-0
                        flex items-center justify-center
                    ">
                    <div className="flex items-center gap-2">
                        <div className="relative size-8 overflow-hidden rounded-full">
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

                        <span className="text-sm font-semibold">
                            {user?.username}
                        </span>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
