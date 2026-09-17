"use client";

import { ProfileAvatarLikeUser } from "@/features/profile/avatar-change/types/avatar-change.types";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface ProfileAvatarLikesSheetProps {
    users: ProfileAvatarLikeUser[];
    likesCount: number;
    onClose: () => void;
}

const CLOSE_THRESHOLD_RATIO = 0.2;
const CLOSE_THRESHOLD_PX = 200;

export function ProfileAvatarLikesSheet({
    users,
    likesCount,
    onClose,
}: ProfileAvatarLikesSheetProps) {
    const sheetRef = useRef<HTMLDivElement>(null);

    const pointerIdRef = useRef<number | null>(null);

    const startYRef = useRef(0);
    const currentYRef = useRef(0);

    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const getCloseThreshold = useCallback(() => {
        const sheet = sheetRef.current;

        if (!sheet) {
            return CLOSE_THRESHOLD_PX;
        }

        const sheetHeight = sheet.getBoundingClientRect().height;

        return Math.min(
            sheetHeight * CLOSE_THRESHOLD_RATIO,
            CLOSE_THRESHOLD_PX,
        );
    }, []);

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "mouse" && event.button !== 0) {
            return;
        }

        pointerIdRef.current = event.pointerId;

        startYRef.current = event.clientY;
        currentYRef.current = event.clientY;

        setIsDragging(true);

        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (pointerIdRef.current !== event.pointerId) {
            return;
        }

        const deltaY = event.clientY - startYRef.current;

        // Felfelé húzásnál nem mozdítjuk a sheetet.
        const offset = Math.max(0, deltaY);

        currentYRef.current = event.clientY;

        setDragOffset(offset);
    };

    const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        if (pointerIdRef.current !== event.pointerId) {
            return;
        }

        const deltaY = currentYRef.current - startYRef.current;

        const offset = Math.max(0, deltaY);

        const threshold = getCloseThreshold();

        pointerIdRef.current = null;

        setIsDragging(false);

        if (offset >= threshold) {
            setDragOffset(0);
            onClose();
            return;
        }

        setDragOffset(0);
    };

    const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
        if (pointerIdRef.current !== event.pointerId) {
            return;
        }

        pointerIdRef.current = null;

        setIsDragging(false);
        setDragOffset(0);
    };

    const sheetStyle = {
        transform: `translateY(${dragOffset}px)`,
        transition: isDragging
            ? "none"
            : "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
    };

    const backdropOpacity = Math.max(0, 1 - dragOffset / 200);

    return (
        <div className="profile-avatar-sheet-overlay" onClick={onClose}>
            <div
                className="profile-avatar-sheet-backdrop"
                style={{
                    opacity: backdropOpacity,
                }}
            />
            <div
                ref={sheetRef}
                className="profile-avatar-likes-sheet"
                style={sheetStyle}
                role="dialog"
                aria-modal="true"
                aria-labelledby="profile-avatar-likes-title"
                onClick={(event) => event.stopPropagation()}>
                <div
                    className="profile-avatar-sheet-handle"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={finishDrag}
                    onPointerCancel={handlePointerCancel}
                    role="button"
                    tabIndex={0}
                    aria-label="Drag to close">
                    <div className="indicator"></div>
                </div>

                <div className="profile-avatar-sheet-header">
                    <div>
                        <h2 id="profile-avatar-likes-title">Likes</h2>
                        {likesCount} {likesCount === 1 ? "like" : "likes"}
                    </div>

                    <button
                        type="button"
                        className="profile-avatar-sheet-close"
                        onClick={onClose}
                        aria-label="Close likes">
                        &times;
                    </button>
                </div>

                <div className="profile-avatar-likes-list">
                    {users.length === 0 ? (
                        <div className="profile-avatar-empty-likes">
                            <p>No likes yet</p>
                        </div>
                    ) : (
                        users.map((user) => (
                            <div
                                key={user.id}
                                className="profile-avatar-like-user">
                                <Image
                                    src={
                                        user.avatarUrl ??
                                        "/assets/images/user-blank-1.png"
                                    }
                                    width={48}
                                    height={48}
                                    alt={user.username}
                                    className="rounded-full"
                                />

                                <div className="profile-avatar-like-user-info">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
