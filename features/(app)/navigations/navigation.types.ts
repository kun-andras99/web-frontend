import type { ComponentType, ReactNode } from "react";

export interface MobileTopNavigationScreen {
    id: number;
    name: string;
    title: string;
    icon?: ReactNode;
    activeIcon?: ReactNode;
    /** A szülő tab route-ja, pl. "/cruise" */
    fromUrl: string;
    /** A screen saját route-ja, pl. "/visitors" */
    url: string;
    component?: ComponentType;
}

export interface MobileTopNavigationTab {
    id: number;
    name: string;
    title: string;
    bottomTitle?: string;
    url: string;
    icon?: ReactNode;
    activeIcon?: ReactNode;
    publicMenu?: boolean;
    appMenu?: boolean;
    drawerMenu?: boolean;
    screens?: MobileTopNavigationScreen[];
}

export type MobileTopNavigationConfig = MobileTopNavigationTab[];

export interface MobileTopResolvedNavigation {
    tab: MobileTopNavigationTab | null;
    screen?: MobileTopNavigationScreen | null;
    title: string | null;
}
