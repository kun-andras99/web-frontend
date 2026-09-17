"use client";

import Image from "next/image";

import { ProfileAvatarIndicators } from "@/features/profile/avatar-change/components/ProfileAvatarIndicators";
import { ProfileAvatarLikesSheet } from "@/features/profile/avatar-change/components/ProfileAvatarLikesSheet";
import { useProfileAvatar } from "@/features/profile/avatar-change/hooks/useProfileAvatar";
import { ProfileAvatarChangeProps } from "@/features/profile/avatar-change/types/avatar-change.types";
import { ProfileAvatarModal } from "./ProfileAvatarModal";

export function ProfileAvatarChange({
    username,
    images,
    autoPlay = true,
    interval = 5000,
    onLikeChange,
}: ProfileAvatarChangeProps) {
    const {
        activeIndex,
        activeImage,
        isModalOpen,
        isLikesSheetOpen,
        images: localImages,
        selectAvatar,
        nextAvatar,
        previousAvatar,
        openModal,
        closeModal,
        openLikesSheet,
        closeLikesSheet,
        toggleLike,
    } = useProfileAvatar({
        images,
        autoPlay,
        interval,
        onLikeChange,
    });

    if (!activeImage) {
        return null;
    }

    return (
        <>
            <div className="image-wrapper">
                <ProfileAvatarIndicators
                    count={localImages.length}
                    activeIndex={activeIndex}
                    onSelect={selectAvatar}
                />

                <button
                    type="button"
                    className="image-container"
                    onClick={openModal}
                    aria-label={`Open profile photos for ${username}`}>
                    <Image
                        src={activeImage.url}
                        width={90}
                        height={90}
                        alt={activeImage.alt ?? `${username}'s profile image`}
                        className="rounded-full"
                        priority
                    />
                </button>
            </div>

            {isModalOpen && (
                <ProfileAvatarModal
                    image={activeImage}
                    activeIndex={activeIndex}
                    totalImages={localImages.length}
                    onClose={closeModal}
                    onNext={nextAvatar}
                    onPrevious={previousAvatar}
                    onToggleLike={() => toggleLike(activeImage.id)}
                    onOpenLikes={openLikesSheet}
                />
            )}

            {isLikesSheetOpen && (
                <ProfileAvatarLikesSheet
                    users={activeImage.likes?.map((like) => like.user) ?? []}
                    likesCount={activeImage.likesCount}
                    onClose={closeLikesSheet}
                />
            )}
        </>
    );
}
