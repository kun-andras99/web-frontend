"use client";

import { useState } from "react";

interface ModalActionRowProps {
    title: string;
    description?: string;
    label: string;
    onConfirm: () => void;
    disabled?: boolean;
    danger?: boolean;
    /** Igaz: az első kattintás csak megerősítést kér. */
    requireConfirm?: boolean;
}

export default function ModalActionRow({
    title,
    description,
    label,
    onConfirm,
    disabled = false,
    danger = false,
    requireConfirm = false,
}: ModalActionRowProps) {
    const [confirming, setConfirming] = useState(false);

    function handleClick() {
        if (requireConfirm && !confirming) {
            setConfirming(true);
            return;
        }
        setConfirming(false);
        onConfirm();
    }

    const buttonTone = danger
        ? "bg-red-500/15 text-red-300 hover:bg-red-500/25"
        : "bg-white/10 text-white hover:bg-white/15";

    return (
        <section className="py-3">
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            {description && (
                <p className="mt-0.5 text-xs text-white/50">{description}</p>
            )}

            <div className="mt-2 flex flex-wrap items-center gap-2">
                {confirming ? (
                    <>
                        <span className="text-xs text-white/70">Biztosan?</span>
                        <button
                            type="button"
                            disabled={disabled}
                            onClick={handleClick}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold disabled:opacity-50 ${buttonTone}`}>
                            Igen
                        </button>
                        <button
                            type="button"
                            onClick={() => setConfirming(false)}
                            className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white">
                            Mégse
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        disabled={disabled}
                        onClick={handleClick}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold disabled:opacity-50 ${buttonTone}`}>
                        {label}
                    </button>
                )}
            </div>
        </section>
    );
}
