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

export interface NavigationTab {
    id: number;
    name: string;
    title: string;
    url: string;
    icon: ReactNode;
    activeIcon: ReactNode;
    screens?: NavigationScreen[];
}

export type NavigationConfig = NavigationTab[];

export interface ResolvedNavigation {
    tab: NavigationTab | null;
    screen: NavigationScreen | null;
    title: string | null;
}
