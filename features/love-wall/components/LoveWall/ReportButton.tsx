"use client";

import { useState } from "react";

interface Props {
    reported: boolean;
    onConfirm: () => void;
}

function FlagIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M4 22V4" />
            <path d="M4 4h13l-2 4 2 4H4" />
        </svg>
    );
}

/** Kétlépéses jelentés: véletlen kattintás ellen. */
export default function ReportButton({ reported, onConfirm }: Props) {
    const [confirming, setConfirming] = useState(false);

    if (reported) {
        return (
            <span className="report-button report-button--done" role="status">
                <FlagIcon />
                <span>Jelentve</span>
            </span>
        );
    }

    if (confirming) {
        return (
            <span className="report-confirm">
                <button
                    type="button"
                    className="report-confirm__yes"
                    onClick={() => {
                        setConfirming(false);
                        onConfirm();
                    }}>
                    Jelentés
                </button>
                <button
                    type="button"
                    className="report-confirm__no"
                    onClick={() => setConfirming(false)}>
                    Mégse
                </button>
            </span>
        );
    }

    return (
        <button
            type="button"
            className="report-button"
            aria-label="Üzenet jelentése"
            onClick={() => setConfirming(true)}>
            <FlagIcon />
        </button>
    );
}
