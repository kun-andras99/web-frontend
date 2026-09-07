"use client";

import type { SessionUser } from "@/features/auth/types/auth-index";
import { createContext, useContext, type ReactNode } from "react";

export const CurrentUserContext = createContext<SessionUser | null>(null);

interface AuthProviderProps {
    user: SessionUser | null;
    children?: ReactNode;
}

/**
 * A gyökér (Server Component) layoutban töltsd fel a `user` propot egy
 * `await getCurrentUser()` hívással — így a kliens komponensfa bármely
 * pontján elérhető a bejelentkezett felhasználó, külön fetch/loading
 * állapot nélkül.
 */
export function AuthProvider({ user, children }: AuthProviderProps) {
    return (
        <CurrentUserContext.Provider value={user}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(CurrentUserContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
}
