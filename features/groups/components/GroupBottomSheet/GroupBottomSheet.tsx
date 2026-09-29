"use client";

import { useEffect, useRef } from "react";
import type { GroupDTO } from "../../schemas/groups.schema";
import GroupActions from "./GroupActions";
import { BACKDROP_FADE_DISTANCE_PX, SNAP_BACK_TRANSITION } from "./constants";
import { useDialogBehavior } from "./useDialogBehavior";
import { useSheetDrag } from "./useSheetDrag";
import { useSheetHistory } from "./useSheetHistory";

interface GroupBottomSheetProps {
    group: GroupDTO | null;
    onClose: () => void;
}

const VISIBILITY_LABELS: Record<GroupDTO["visibility"], string> = {
    PUBLIC: "Nyilvános",
    PRIVATE: "Privát",
};

export default function GroupBottomSheet({
    group,
    onClose,
}: GroupBottomSheetProps) {
    const sheetRef = useRef<HTMLDivElement>(null);
    const isOpen = group !== null;
    const groupId = group?.id;

    const { dragOffset, isDragging, handleProps } = useSheetDrag({
        sheetRef,
        onClose,
    });
    useSheetHistory(isOpen, onClose);
    useDialogBehavior(isOpen, onClose);

    // megnyitáskor (és csoportváltáskor) a fókusz a dialogra kerül
    useEffect(() => {
        if (groupId) sheetRef.current?.focus();
    }, [groupId]);

    if (!group) return null;

    const backdropOpacity = Math.max(
        0,
        1 - dragOffset / BACKDROP_FADE_DISTANCE_PX,
    );

    return (
        <div className="group-bottom-sheet-overlay" onClick={onClose}>
            <div
                className="group-bottom-sheet-backdrop"
                style={{ opacity: backdropOpacity }}
            />

            <div
                ref={sheetRef}
                className="group-bottom-sheet"
                style={{
                    transform: `translateY(${dragOffset}px)`,
                    transition: isDragging ? "none" : SNAP_BACK_TRANSITION,
                }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="group-bottom-sheet-title"
                tabIndex={-1}
                onClick={(event) => event.stopPropagation()}>
                <div
                    className="group-bottom-sheet-handle"
                    aria-hidden
                    {...handleProps}>
                    <div className="indicator" />
                </div>

                <div className="group-bottom-sheet-header">
                    <div>
                        <h2 id="group-bottom-sheet-title">{group.name}</h2>
                        <span>
                            {group.memberCount} tag ·{" "}
                            {VISIBILITY_LABELS[group.visibility]}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="group-bottom-sheet-close"
                        onClick={onClose}
                        aria-label="Csoport bezárása">
                        &times;
                    </button>
                </div>

                <div className="group-bottom-sheet-content">
                    <div className="group-bottom-sheet-image">
                        {/* később csoportkép */}
                    </div>

                    {group.description && (
                        <p className="group-bottom-sheet-description">
                            {group.description}
                        </p>
                    )}

                    {/* key: csoportváltáskor a mutation hibaállapota nulláról indul */}
                    <GroupActions key={group.id} group={group} />
                </div>
            </div>
        </div>
    );
}
