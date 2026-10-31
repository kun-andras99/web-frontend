"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { MESSAGE_MAX_LENGTH } from "../schemas/chat.schema";

interface MessageComposerProps {
    draft: string;
    onDraftChange: (value: string) => void;
    onSend: (content: string) => void;
    error: string | null;
}

export default function MessageComposer({
    draft,
    onDraftChange,
    onSend,
    error,
}: MessageComposerProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const trimmed = draft.trim();

    // automatikus magasság (legfeljebb 160 px)
    useEffect(() => {
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
    }, [draft]);

    function submit() {
        if (trimmed) onSend(trimmed);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
        if (
            event.key === "Enter" &&
            !event.shiftKey &&
            !event.nativeEvent.isComposing
        ) {
            event.preventDefault();
            submit();
        }
    }

    return (
        <div className="border-t border-white/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
            {error && (
                <p role="alert" className="mb-2 text-xs text-red-400">
                    {error}
                </p>
            )}

            <div className="flex items-end gap-2">
                <textarea
                    ref={textareaRef}
                    value={draft}
                    onChange={(event) => onDraftChange(event.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    maxLength={MESSAGE_MAX_LENGTH}
                    placeholder="Írj üzenetet..."
                    aria-label="Üzenet"
                    className="max-h-40 min-h-[40px] flex-1 resize-none rounded-2xl bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                />
                <button
                    type="button"
                    onClick={submit}
                    disabled={!trimmed}
                    className="h-10 rounded-full bg-indigo-500 px-4 text-sm font-semibold text-white disabled:opacity-40">
                    Küldés
                </button>
            </div>

            {draft.length > MESSAGE_MAX_LENGTH - 500 && (
                <p className="mt-1 text-right text-[10px] text-white/40">
                    {draft.length} / {MESSAGE_MAX_LENGTH}
                </p>
            )}
        </div>
    );
}
