"use client";

import { CurrentUserContext } from "@/features/auth/components/auth-provider";
import type { SessionUser } from "@/features/auth/types/auth-index";
import { useContext } from "react";

/**
 * `null`, ha a látogató nincs bejelentkezve. Csak az `AuthProvider`-rel
 * körbevett komponensfában használható (ld. gyökér layout).
 */
export function useCurrentUser(): SessionUser | null {
    return useContext(CurrentUserContext);
}
