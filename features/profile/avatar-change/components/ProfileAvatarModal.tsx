"use client";

import { ProfileAvatarImage } from "@/features/profile/avatar-change/types/avatar-change.types";
import Image from "next/image";

interface ProfileAvatarModalProps {
    image: ProfileAvatarImage;
    activeIndex: number;
    totalImages: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    onToggleLike: () => void;
    onOpenLikes: () => void;
}

export function ProfileAvatarModal({
    image,
    activeIndex,
    totalImages,
    onClose,
    onNext,
    onPrevious,
    onToggleLike,
    onOpenLikes,
}: ProfileAvatarModalProps) {
    return (
        <div
            className="profile-avatar-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Profile photo viewer"
            onClick={onClose}>
            <div
                className="profile-avatar-viewer"
                onClick={(event) => event.stopPropagation()}>
                <button
                    type="button"
                    className="profile-avatar-close"
                    onClick={onClose}
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                <div className="profile-avatar-counter">
                    {activeIndex + 1} / {totalImages}
                </div>

                <button
                    type="button"
                    className="profile-avatar-arrow left"
                    onClick={onPrevious}
                    aria-label="Previous photo">
                    ‹
                </button>

                <div className="profile-avatar-large-image">
                    <Image
                        src={image.url}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        alt={image.alt ?? "Profile image"}
                        className="profile-avatar-large-img"
                        priority
                    />
                </div>

                <button
                    type="button"
                    className="profile-avatar-arrow right"
                    onClick={onNext}
                    aria-label="Next photo">
                    ›
                </button>

                <div className="profile-avatar-action-bar">
                    <button
                        type="button"
                        className={`profile-avatar-like-button ${
                            image.isLiked ? "liked" : ""
                        }`}
                        onClick={onToggleLike}
                        aria-label={
                            image.isLiked ? "Unlike photo" : "Like photo"
                        }
                        aria-pressed={image.isLiked}>
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill={image.isLiked ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="profile-avatar-likes-count"
                        onClick={onOpenLikes}
                        aria-label={`View ${image.likesCount} likes`}>
                        {image.likesCount} likes
                    </button>
                </div>
            </div>
        </div>
    );
}
