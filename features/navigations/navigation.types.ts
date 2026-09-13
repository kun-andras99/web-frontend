import type { ComponentType, ReactNode } from "react";

export interface NavigationScreen {
    id: number;
    name: string;
    title: string;
    icon: ReactNode;
    activeIcon: ReactNode;
    /** A szülő tab route-ja, pl. "/cruise" */
    fromUrl: string;
    /** A screen saját route-ja, pl. "/visitors" */
    url: string;
    component?: ComponentType;
}

export interface MobileTopNavigationScreen {
    id: number;
    name: string;
    title: string;
    icon?: ReactNode;
    activeIcon?: ReactNode;
    /** A szülő tab route-ja, pl. "/cruise" */
    fromUrl?: string;
    /** A screen saját route-ja, pl. "/visitors" */
    url?: string;
    component?: ComponentType;
}

export interface NavigationTab {
    id: number;
    name: string;
    title: string;
    url: string;
    icon: ReactNode;
    activeIcon?: ReactNode;
    screens?: NavigationScreen[];
}

export interface MobileTopNavigationTab {
    id: number;
    name: string;
    title: string;
    bottomTitle?: string;
    url?: string;
    icon?: ReactNode;
    activeIcon?: ReactNode;
    publicMenu?: boolean;
    appMenu?: boolean;
    screens?: MobileTopNavigationScreen[];
}

export type NavigationConfig = NavigationTab[];
export type MobileTopNavigationConfig = MobileTopNavigationTab[];

export interface ResolvedNavigation {
    tab: NavigationTab | null;
    screen: NavigationScreen | null;
    title: string | null;
}

export interface MobileTopResolvedNavigation {
    tab: MobileTopNavigationTab | null;
    screen?: MobileTopNavigationScreen | null;
    title: string | null;
}
