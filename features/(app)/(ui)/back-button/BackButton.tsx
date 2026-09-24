"use client";

import {
    NAVIGATION_HISTORY_EVENT,
    NAVIGATION_HISTORY_KEY,
    type NavigationHistory,
} from "@/features/(app)/(ui)/back-button/NavigationHistoryProvider";
import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";

interface BackButtonProps {
    children?: React.ReactNode;
    className?: string;
}

function getHistory(): NavigationHistory | null {
    if (typeof window === "undefined") {
        return null;
    }

    const stored = sessionStorage.getItem(NAVIGATION_HISTORY_KEY);

    if (!stored) {
        return null;
    }

    try {
        return JSON.parse(stored) as NavigationHistory;
    } catch {
        return null;
    }
}

function subscribe(callback: () => void) {
    window.addEventListener(NAVIGATION_HISTORY_EVENT, callback);

    return () => {
        window.removeEventListener(NAVIGATION_HISTORY_EVENT, callback);
    };
}

function getSnapshot() {
    const history = getHistory();

    return Boolean(history?.previousPath);
}

function getServerSnapshot() {
    return false;
}

export default function BackButton({
    children,
    className = "",
}: BackButtonProps) {
    const router = useRouter();

    const canGoBack = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );

    if (!canGoBack) {
        return null;
    }

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className={className}>
            <div className="back-button__content">{children}</div>
        </button>
    );
}
