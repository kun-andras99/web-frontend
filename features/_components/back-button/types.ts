import type { CSSProperties, ReactNode } from "react";

/**
 * Route History Context típusok
 */
export interface RouteHistoryContextType {
    previousPath: string | null;
    currentPath: string | null;
}

export interface RouteHistoryProviderProps {
    children: ReactNode;
}

/**
 * Back Button Hook és Komponens típusok
 */
export interface ParentRoute {
    from: string;
    to: string;
}

export interface UseBackButtonOptions {
    showAlways?: boolean;
    parentRoutes?: ParentRoute[];
}

export interface UseBackButtonResult {
    goBack: () => void;
    backPath: string;
    shouldShow: boolean;
    previousPath: string | null;
}

export interface SmartBackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
    style?: CSSProperties;
    showAlways?: boolean;
    parentRoutes?: ParentRoute[];
}

/**
 * Layout típusok
 */
export interface RootLayoutProps {
    children: ReactNode;
}
