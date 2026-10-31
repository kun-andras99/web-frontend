"use client";

import { Pen, X } from "lucide-react";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type KeyboardEvent,
} from "react";

interface DrawerUserCardInputProps {
    nickname: string;
    onSave: (nickname: string) => Promise<void>;
    debounceMs?: number;
}

export default function DrawerUserCardInput({
    nickname,
    onSave,
    debounceMs = 700,
}: DrawerUserCardInputProps) {
    const [value, setValue] = useState(nickname);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const savedValueRef = useRef(nickname);
    const valueRef = useRef(nickname);
    const saveRef = useRef(onSave);
    const savingRef = useRef(false);
    const requestIdRef = useRef(0);

    useEffect(() => {
        saveRef.current = onSave;
    }, [onSave]);

    useEffect(() => {
        setValue(nickname);
        valueRef.current = nickname;
        savedValueRef.current = nickname;
    }, [nickname]);

    const save = useCallback(async (nextValue: string) => {
        const normalized = nextValue.trim();

        if (
            !normalized ||
            normalized === savedValueRef.current ||
            savingRef.current
        ) {
            return;
        }

        const requestId = ++requestIdRef.current;

        savingRef.current = true;
        setIsSaving(true);
        setError(null);

        try {
            await saveRef.current(normalized);

            savedValueRef.current = normalized;
            valueRef.current = normalized;
            setValue(normalized);
        } catch {
            setError("A becenév mentése nem sikerült.");
        } finally {
            if (requestId === requestIdRef.current) {
                savingRef.current = false;
                setIsSaving(false);
            }
        }
    }, []);

    useEffect(() => {
        const normalized = value.trim();

        if (!normalized || normalized === savedValueRef.current) {
            return;
        }

        const timeout = window.setTimeout(() => {
            void save(normalized);
        }, debounceMs);

        return () => window.clearTimeout(timeout);
    }, [value, debounceMs, save]);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        event.stopPropagation();

        if (event.key === "Enter") {
            event.preventDefault();
            void save(value);
        }

        if (event.key === "Escape") {
            event.preventDefault();

            setValue(savedValueRef.current);
            valueRef.current = savedValueRef.current;
            setError(null);
        }
    };

    return (
        <div
            className="drawer-user-card-input"
            onClick={(event) => event.stopPropagation()}>
            <div className="drawer-user-card-input__wrapper">
                <input
                    type="text"
                    value={value}
                    maxLength={30}
                    minLength={2}
                    aria-label="Becenév"
                    aria-invalid={Boolean(error)}
                    onChange={(event) => {
                        const nextValue = event.target.value;

                        setValue(nextValue);
                        valueRef.current = nextValue;
                        setError(null);
                    }}
                    onKeyDown={handleKeyDown}
                    onBlur={() => {
                        void save(value);
                    }}
                    placeholder="Set a nickname"
                />

                {nickname ? (
                    <X
                        className="drawer-user-card-input__icon"
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />
                ) : (
                    <Pen
                        className="drawer-user-card-input__icon"
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />
                )}
            </div>

            <span className="drawer-user-card-input__status" aria-live="polite">
                {isSaving ? "Mentés..." : (error ?? "")}
            </span>
        </div>
    );
}
