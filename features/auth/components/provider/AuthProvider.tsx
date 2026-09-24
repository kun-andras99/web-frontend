"use client";

import type { SessionUser } from "@/features/auth/types/auth-index";
import { ChildrenProp, SessionUserProps } from "@/lib/utils/props";
import { createContext, ReactNode, useContext } from "react";

export const CurrentUserContext = createContext<SessionUser | null | undefined>(
    undefined,
);

interface AuthProviderProps extends SessionUserProps {
    children: ReactNode;
}

/**
 * A gyökér (Server Component) layoutban töltsd fel a `user` propot egy
 * `await getCurrentUser()` hívással — így a kliens komponensfa bármely
 * pontján elérhető a bejelentkezett felhasználó, külön fetch/loading
 * állapot nélkül.
 */
export function AuthProvider({
    user,
    children,
}: ChildrenProp & SessionUserProps & AuthProviderProps) {
    return (
        <CurrentUserContext.Provider value={user}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(CurrentUserContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
}
