"use client";

import { useHeader } from "@/features/navigations/useHeader";
import type { HTMLAttributes } from "react";

export interface HeaderTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    /** Ha a navigation configban nincs találat, ez jelenik meg helyette */
    fallback?: string;
}

/**
 * Kizárólag a címet megjelenítő, önállóan is újrafelhasználható komponens.
 * A cím forrása a `useHeader` hook, ami a Next.js route-ból oldja fel azt —
 * emiatt bárhol elhelyezve mindig a szükséges címet mutatja.
 */
export function HeaderTitle({ fallback = "", ...rest }: HeaderTitleProps) {
    const { title } = useHeader();

    return <h1 {...rest}>{title || fallback}</h1>;
}
