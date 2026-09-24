"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface GroupBottomSheetProps {
    group: {
        id: string;
        name: string;
        description: string | null;
        memberCount: number;
        isMember?: boolean;
    } | null;
    onClose: () => void;
}

const CLOSE_THRESHOLD_RATIO = 0.2;
const CLOSE_THRESHOLD_PX = 200;

export default function GroupBottomSheet({
    group,
    onClose,
}: GroupBottomSheetProps) {
    const sheetRef = useRef<HTMLDivElement>(null);

    const pointerIdRef = useRef<number | null>(null);

    const startYRef = useRef(0);
    const currentYRef = useRef(0);

    const historyAddedRef = useRef(false);

    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    /**
     * Meghatározza, hogy mennyit kell lehúzni
     * a sheet bezárásához.
     *
     * Maximum 200px.
     */
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

    /**
     * Telefon / browser Back gomb.
     *
     * A sheet megnyitásakor létrehozunk egy history state-et.
     * Így az első Back a sheetet zárja be.
     */
    useEffect(() => {
        if (!group) {
            return;
        }

        if (!historyAddedRef.current) {
            window.history.pushState(
                {
                    ...window.history.state,
                    groupBottomSheet: true,
                },
                "",
            );

            historyAddedRef.current = true;
        }

        const handlePopState = () => {
            historyAddedRef.current = false;
            onClose();
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [group, onClose]);

    /**
     * Ha a sheet normál módon záródik,
     * visszalépünk a hozzáadott history state-ből.
     */
    useEffect(() => {
        if (group) {
            return;
        }

        if (
            historyAddedRef.current &&
            window.history.state?.groupBottomSheet
        ) {
            historyAddedRef.current = false;

            window.history.back();
        }
    }, [group]);

    /**
     * Pointer Down
     */
    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>,
    ) => {
        if (
            event.pointerType === "mouse" &&
            event.button !== 0
        ) {
            return;
        }

        pointerIdRef.current = event.pointerId;

        startYRef.current = event.clientY;
        currentYRef.current = event.clientY;

        setIsDragging(true);

        event.currentTarget.setPointerCapture(event.pointerId);
    };

    /**
     * Pointer Move
     */
    const handlePointerMove = (
        event: React.PointerEvent<HTMLDivElement>,
    ) => {
        if (pointerIdRef.current !== event.pointerId) {
            return;
        }

        const deltaY =
            event.clientY - startYRef.current;

        /**
         * Felfelé húzásnál nem mozgatjuk a sheetet.
         */
        const offset = Math.max(0, deltaY);

        currentYRef.current = event.clientY;

        setDragOffset(offset);
    };

    /**
     * Pointer Up
     */
    const finishDrag = (
        event: React.PointerEvent<HTMLDivElement>,
    ) => {
        if (pointerIdRef.current !== event.pointerId) {
            return;
        }

        const deltaY =
            currentYRef.current - startYRef.current;

        const offset = Math.max(0, deltaY);

        const threshold = getCloseThreshold();

        pointerIdRef.current = null;

        setIsDragging(false);

        /**
         * Elérte a 20%-ot / maximum 200px-t.
         */
        if (offset >= threshold) {
            setDragOffset(0);
            onClose();
            return;
        }

        /**
         * Nem érte el a küszöböt,
         * ezért visszapattan.
         */
        setDragOffset(0);
    };

    /**
     * Pointer Cancel
     */
    const handlePointerCancel = (
        event: React.PointerEvent<HTMLDivElement>,
    ) => {
        if (pointerIdRef.current !== event.pointerId) {
            return;
        }

        pointerIdRef.current = null;

        setIsDragging(false);
        setDragOffset(0);
    };

    /**
     * Sheet animáció.
     */
    const sheetStyle = {
        transform: `translateY(${dragOffset}px)`,

        transition: isDragging
            ? "none"
            : "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
    };

    /**
     * A háttér is halványodik,
     * ahogy lefelé húzzuk a sheetet.
     */
    const backdropOpacity = Math.max(
        0,
        1 - dragOffset / 200,
    );

    /**
     * Ha nincs kiválasztott csoport,
     * nem renderelünk semmit.
     */
    if (!group) {
        return null;
    }

    return (
        <div
            className="group-bottom-sheet-overlay"
            onClick={onClose}
        >
            <div
                className="group-bottom-sheet-backdrop"
                style={{
                    opacity: backdropOpacity,
                }}
            />

            <div
                ref={sheetRef}
                className="group-bottom-sheet"
                style={sheetStyle}
                role="dialog"
                aria-modal="true"
                aria-labelledby="group-bottom-sheet-title"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                {/* HANDLE */}
                <div
                    className="group-bottom-sheet-handle"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={finishDrag}
                    onPointerCancel={handlePointerCancel}
                    role="button"
                    tabIndex={0}
                    aria-label="Húzd lefelé a bezáráshoz"
                >
                    <div className="indicator" />
                </div>

                {/* HEADER */}
                <div className="group-bottom-sheet-header">
                    <div>
                        <h2 id="group-bottom-sheet-title">
                            {group.name}
                        </h2>

                        <span>
                            {group.memberCount}{" "}
                            {group.memberCount === 1
                                ? "tag"
                                : "tag"}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="group-bottom-sheet-close"
                        onClick={onClose}
                        aria-label="Csoport bezárása"
                    >
                        &times;
                    </button>
                </div>

                {/* CONTENT */}
                <div className="group-bottom-sheet-content">
                    <div className="group-bottom-sheet-image">
                        {/* később csoportkép */}
                    </div>

                    {group.description && (
                        <p className="group-bottom-sheet-description">
                            {group.description}
                        </p>
                    )}

                    {!group.isMember ? (
                        <button
                            type="button"
                            className="group-bottom-sheet-join"
                        >
                            Csatlakozás
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="group-bottom-sheet-open"
                        >
                            Csoport megnyitása
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}