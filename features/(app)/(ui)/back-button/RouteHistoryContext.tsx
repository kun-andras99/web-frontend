"use client";

import { usePathname } from "next/navigation";
import {
    createContext,
    JSX,
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

interface RouteHistoryContextType {
    previousPath: string | null;
    currentPath: string | null;
}

interface RouteHistoryProviderProps {
    children: ReactNode;
}

const STORAGE_KEY = "route-history";

const RouteHistoryContext = createContext<RouteHistoryContextType | undefined>(
    undefined,
);

interface StoredRouteHistory {
    previousPath: string | null;
    currentPath: string | null;
}

function getStoredHistory(): StoredRouteHistory {
    if (typeof window === "undefined") {
        return {
            previousPath: null,
            currentPath: null,
        };
    }

    try {
        const stored = sessionStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return {
                previousPath: null,
                currentPath: null,
            };
        }

        return JSON.parse(stored);
    } catch {
        return {
            previousPath: null,
            currentPath: null,
        };
    }
}

export function RouteHistoryProvider({
    children,
}: RouteHistoryProviderProps): JSX.Element {
    const pathname = usePathname();

    const storedHistory = getStoredHistory();

    const [previousPath, setPreviousPath] = useState<string | null>(
        storedHistory.previousPath,
    );

    const [currentPath, setCurrentPath] = useState<string | null>(
        pathname ?? storedHistory.currentPath,
    );

    const currentPathRef = useRef<string | null>(
        storedHistory.currentPath ?? pathname,
    );

    useEffect(() => {
        if (!pathname) {
            return;
        }

        const previous = currentPathRef.current;

        // Első betöltés / refresh
        if (previous === pathname) {
            return;
        }

        // Route váltás
        setPreviousPath(previous);
        setCurrentPath(pathname);

        currentPathRef.current = pathname;

        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                previousPath: previous,
                currentPath: pathname,
            }),
        );
    }, [pathname]);

    return (
        <RouteHistoryContext.Provider
            value={{
                previousPath,
                currentPath,
            }}>
            {children}
        </RouteHistoryContext.Provider>
    );
}

export function useRouteHistory(): RouteHistoryContextType {
    const context = useContext(RouteHistoryContext);

    if (!context) {
        throw new Error(
            "useRouteHistory csak RouteHistoryProvider-en belül használható",
        );
    }

    return context;
}
