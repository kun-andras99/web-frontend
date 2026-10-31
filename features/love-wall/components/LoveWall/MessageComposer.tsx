"use client";

import {
    COUNTER_THRESHOLD,
    MAX_MESSAGE_LENGTH,
} from "@/features/love-wall/constants";
import { type FormEvent, type KeyboardEvent, useId, useState } from "react";

interface Props {
    /** `true`, ha a küldés sikerült */
    onSubmit: (message: string) => Promise<boolean>;
}

function getCounterLabel(remaining: number): string {
    if (remaining < 0) return "Nem lehet több karakter";
    if (remaining <= COUNTER_THRESHOLD) return String(remaining);
    return "";
}

export default function MessageComposer({ onSubmit }: Props) {
    const [value, setValue] = useState("");
    const [isSending, setIsSending] = useState(false);
    const fieldId = useId();

    const trimmed = value.trim();
    const remaining = MAX_MESSAGE_LENGTH - value.length;
    const canSend = trimmed.length > 0 && remaining >= 0 && !isSending;

    const isOver = remaining < 0;
    const counterLabel = getCounterLabel(remaining);

    const submit = async () => {
        if (!canSend) return;

        setIsSending(true);
        setValue("");
        const ok = await onSubmit(trimmed);
        if (!ok) setValue(trimmed); // hiba esetén nem vész el a szöveg
        setIsSending(false);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        void submit();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            void submit();
        }
    };

    return (
        <form className="composer" onSubmit={handleSubmit}>
            <label className="composer__label" htmlFor={fieldId}>
                Írj egy üzenetet
            </label>
            <textarea
                id={fieldId}
                className="composer__field"
                rows={3}
                value={value}
                placeholder="Mit szeretnél üzenni?"
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className="composer__footer">
                <span
                    className={`composer__counter${isOver ? " composer__counter--over" : ""}`}
                    aria-live="polite">
                    {counterLabel}
                </span>
                <button
                    type="submit"
                    className="composer__submit"
                    disabled={!canSend}>
                    Küldés
                </button>
            </div>
        </form>
    );
}
