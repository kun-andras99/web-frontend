"use client";

import { ProfileAvatarImage } from "@/features/profile/avatar-change/types/avatar-change.types";
import { useCallback, useEffect, useMemo, useState } from "react";

interface UseProfileAvatarOptions {
    images: ProfileAvatarImage[];
    autoPlay?: boolean;
    interval?: number;
    onLikeChange?: (imageId: string, isLiked: boolean) => Promise<void> | void;
}

type AvatarHistoryState = {
    type: "profile-avatar";
    modal: boolean;
    likesSheet: boolean;
};

interface LocalLikeState {
    isLiked: boolean;
    likesCount: number;
}

export function useProfileAvatar({
    images,
    autoPlay = true,
    interval = 5000,
    onLikeChange,
}: UseProfileAvatarOptions) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [timerKey, setTimerKey] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLikesSheetOpen, setIsLikesSheetOpen] = useState(false);

    /**
     * Only temporary client-side like changes live here.
     *
     * The actual profile images remain in `images`,
     * which is the source of truth.
     */
    const [localLikeStates, setLocalLikeStates] = useState<
        Record<string, LocalLikeState>
    >({});

    /**
     * Merge server/database data with optimistic
     * client-side like changes.
     */
    const localImages = useMemo<ProfileAvatarImage[]>(
        () =>
            images.map((image) => {
                const localState = localLikeStates[image.id];

                if (!localState) {
                    return image;
                }

                return {
                    ...image,
                    isLiked: localState.isLiked,
                    likesCount: localState.likesCount,
                };
            }),
        [images, localLikeStates],
    );

    /**
     * Make sure activeIndex is always valid
     * without synchronizing it inside an effect.
     */
    const safeActiveIndex =
        images.length === 0 ? 0 : Math.min(activeIndex, images.length - 1);

    const activeImage = localImages[safeActiveIndex] ?? null;

    /*
     * -------------------------------------------------
     * HISTORY
     * -------------------------------------------------
     */

    const pushHistoryState = useCallback((state: AvatarHistoryState) => {
        window.history.pushState(state, "", window.location.href);
    }, []);

    const openModal = useCallback(() => {
        if (isModalOpen) {
            return;
        }

        setIsModalOpen(true);

        pushHistoryState({
            type: "profile-avatar",
            modal: true,
            likesSheet: false,
        });
    }, [isModalOpen, pushHistoryState]);

    const closeModal = useCallback(() => {
        if (!isModalOpen) {
            return;
        }

        window.history.back();
    }, [isModalOpen]);

    const openLikesSheet = useCallback(() => {
        if (!isModalOpen || isLikesSheetOpen) {
            return;
        }

        setIsLikesSheetOpen(true);

        pushHistoryState({
            type: "profile-avatar",
            modal: true,
            likesSheet: true,
        });
    }, [isModalOpen, isLikesSheetOpen, pushHistoryState]);

    const closeLikesSheet = useCallback(() => {
        if (!isLikesSheetOpen) {
            return;
        }

        window.history.back();
    }, [isLikesSheetOpen]);

    /*
     * -------------------------------------------------
     * BROWSER BACK
     * -------------------------------------------------
     */

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            const state = event.state as AvatarHistoryState | null;

            if (state?.type !== "profile-avatar") {
                setIsLikesSheetOpen(false);
                setIsModalOpen(false);

                return;
            }

            setIsModalOpen(state.modal);
            setIsLikesSheetOpen(state.likesSheet);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);
    const resetAutoPlayTimer = useCallback(() => {
        setTimerKey((current) => current + 1);
    }, []);

    const selectAvatar = useCallback(
        (index: number) => {
            if (index < 0 || index >= images.length) {
                return;
            }

            setActiveIndex(index);
            resetAutoPlayTimer();
        },
        [images.length, resetAutoPlayTimer],
    );

    const nextAvatar = useCallback(() => {
        if (images.length <= 1) {
            return;
        }

        setActiveIndex((currentIndex) => {
            return (currentIndex + 1) % images.length;
        });

        resetAutoPlayTimer();
    }, [images.length, resetAutoPlayTimer]);

    const previousAvatar = useCallback(() => {
        if (images.length <= 1) {
            return;
        }

        setActiveIndex((currentIndex) => {
            return (currentIndex - 1 + images.length) % images.length;
        });

        resetAutoPlayTimer();
    }, [images.length, resetAutoPlayTimer]);

    /*
     * -------------------------------------------------
     * AUTOPLAY
     * -------------------------------------------------
     */

    useEffect(() => {
        if (
            !autoPlay ||
            isModalOpen ||
            isLikesSheetOpen ||
            images.length <= 1
        ) {
            return;
        }

        const timer = window.setTimeout(() => {
            setActiveIndex((currentIndex) => {
                return (currentIndex + 1) % images.length;
            });
        }, interval);

        return () => {
            window.clearTimeout(timer);
        };
    }, [
        autoPlay,
        interval,
        isModalOpen,
        isLikesSheetOpen,
        images.length,
        timerKey,
    ]);

    /*
     * -------------------------------------------------
     * KEYBOARD
     * -------------------------------------------------
     */

    useEffect(() => {
        if (!isModalOpen && !isLikesSheetOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (isLikesSheetOpen) {
                    closeLikesSheet();
                } else {
                    closeModal();
                }

                return;
            }

            if (
                isModalOpen &&
                !isLikesSheetOpen &&
                event.key === "ArrowRight"
            ) {
                nextAvatar();
            }

            if (isModalOpen && !isLikesSheetOpen && event.key === "ArrowLeft") {
                previousAvatar();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        isModalOpen,
        isLikesSheetOpen,
        closeModal,
        closeLikesSheet,
        nextAvatar,
        previousAvatar,
    ]);

    /*
     * -------------------------------------------------
     * LIKE
     * -------------------------------------------------
     */

    const toggleLike = useCallback(
        async (imageId: string) => {
            const image = localImages.find((item) => item.id === imageId);

            if (!image) {
                return;
            }

            const nextIsLiked = !image.isLiked;

            const nextLikesCount = Math.max(
                0,
                image.likesCount + (nextIsLiked ? 1 : -1),
            );

            setLocalLikeStates((current) => ({
                ...current,
                [imageId]: {
                    isLiked: nextIsLiked,
                    likesCount: nextLikesCount,
                },
            }));

            try {
                await onLikeChange?.(imageId, nextIsLiked);
            } catch (error) {
                setLocalLikeStates((current) => {
                    const next = {
                        ...current,
                    };

                    delete next[imageId];

                    return next;
                });

                console.error("Failed to update profile image like:", error);
            }
        },
        [localImages, onLikeChange],
    );

    return {
        activeIndex: safeActiveIndex,
        activeImage,

        images: localImages,

        isModalOpen,
        isLikesSheetOpen,

        selectAvatar,
        nextAvatar,
        previousAvatar,

        openModal,
        closeModal,

        openLikesSheet,
        closeLikesSheet,

        toggleLike,
    };
}
