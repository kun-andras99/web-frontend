"use client";

import { usePathname, useRouter } from "next/navigation";
import { CSSProperties, JSX } from "react";
import { useRouteHistory } from "./RouteHistoryContext";

interface ParentRoute {
    from: string;
    to: string;
}

interface UseBackButtonOptions {
    showAlways?: boolean;
    parentRoutes?: ParentRoute[];
}

interface UseBackButtonResult {
    goBack: () => void;
    backPath: string;
    shouldShow: boolean;
    previousPath: string | null;
}

interface SmartBackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
    style?: CSSProperties;
    showAlways?: boolean;
    parentRoutes?: ParentRoute[];
}

/**
 * Hook a vissza gomb logikájához
 * @param options - Opcionális beállítások (showAlways, parentRoutes)
 * @returns Objektum a goBack funkcióval és info-val
 */
export function useBackButton(
    options: UseBackButtonOptions = {},
): UseBackButtonResult {
    const router = useRouter();
    const pathname = usePathname();
    const { previousPath } = useRouteHistory();

    const { showAlways = false, parentRoutes = [] } = options;

    const getParentPath = (path: string): string => {
        const special = parentRoutes.find((route) => route.from === path);

        if (special) {
            return special.to;
        }

        const parts = path.split("/").filter(Boolean);

        if (parts.length > 1) {
            return "/" + parts.slice(0, -1).join("/");
        }

        return "/";
    };

    const hasPreviousPath = previousPath !== null && previousPath !== pathname;

    const backPath = hasPreviousPath ? previousPath : getParentPath(pathname);

    const shouldShow =
        showAlways ||
        hasPreviousPath ||
        parentRoutes.some((route) => route.from === pathname) ||
        pathname.split("/").filter(Boolean).length > 1;

    const goBack = (): void => {
        router.push(backPath);
    };

    return {
        goBack,
        backPath,
        shouldShow,
        previousPath,
    };
}

/**
 * Intelligens vissza gomb komponens
 * @param props - Button props, label, className, style, showAlways, parentRoutes
 * @returns JSX.Element vagy null
 */
export function SmartBackButton({
    label = "←",
    className = "",
    style = {},
    showAlways = false,
    parentRoutes = [],
    ...props
}: SmartBackButtonProps): JSX.Element | null {
    const { goBack, shouldShow } = useBackButton({ showAlways, parentRoutes });

    if (!shouldShow && !showAlways) return null;

    const defaultStyle: CSSProperties = {
        width: "34px",
        height: "34px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background)",
        border: "1px solid #ccc",
        borderRadius: "30px",
        cursor: "pointer",
        position: "fixed",
        top: 15,
        left: 0,
        zIndex: 12,
    };

    return (
        <button
            onClick={goBack}
            className={`smart-back-button ${className}`}
            style={{ ...defaultStyle, ...style }}
            {...props}>
            {label}
        </button>
    );
}
