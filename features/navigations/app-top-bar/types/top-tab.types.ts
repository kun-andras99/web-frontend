import type { ReactElement, ReactNode } from "react";

export interface TopTabIconProps {
    startColor?: string;
    stopColor?: string;
}

export interface TopTabScreen {
    id: number;
    name: string;
    title: string;
    fromUrl?: string;
    url?: string;
    icon?: ReactElement<TopTabIconProps>;
}

export interface TopTabRoute {
    screens: TopTabScreen[];
}

export interface TopBarAction {
    id: string;
    icon: ReactNode;
    /** Accessibilis név (aria-label) — kötelező, kép nélkül is legyen értelme */
    label: string;
    badge?: number;
    onClick?: () => void;
    /** Ha meg van adva, az akció Link-ként navigál onClick helyett */
    href?: string;
}

export interface AppTopBarProps {
    title?: ReactNode;
    showBackButton?: boolean;
    onBack?: () => void;
    actions?: TopBarAction[];
    /** Teljesen felülírja a bal oldalt (vissza gomb + cím helyett) */
    leftSlot?: ReactNode;
    className?: string;
}