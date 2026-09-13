import type { ReactElement, ReactNode } from "react";

export interface MobileTopNavIconProps {
    startColor?: string;
    stopColor?: string;
    frontStartColor?: string;
    frontStopColor?: string;
}

export interface MobileTopNavScreen {
    id: number;
    name: string;
    title: string;
    fromUrl?: string;
    url?: string;
    icon?: ReactElement<MobileTopNavIconProps>;
    activeIcon?: ReactElement<MobileTopNavIconProps>;
}

export interface MobileTopNavRoute {
    screens: MobileTopNavScreen[];
}

export interface MobileTopNavAction {
    id: string;
    icon: ReactNode;
    /** Accessibilis név (aria-label) — kötelező, kép nélkül is legyen értelme */
    label: string;
    badge?: number;
    onClick?: () => void;
    /** Ha meg van adva, az akció Link-ként navigál onClick helyett */
    href?: string;
}

export interface MobileTopNavBarProps {
    title?: ReactNode;
    showBackButton?: boolean;
    onBack?: () => void;
    actions?: MobileTopNavAction[];
    /** Teljesen felülírja a bal oldalt (vissza gomb + cím helyett) */
    leftSlot?: ReactNode;
    className?: string;
}
