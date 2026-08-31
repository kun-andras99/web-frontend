"use client";

import TopTabList from "@/features/navigations/app-top-bar/components/TopTabList";
import { AppTopBarProps } from "@/features/navigations/app-top-bar/types/top-tab.types";

export default function AppTopBar({
    title,
    showBackButton = false,
    onBack,
    actions = [],
    leftSlot,
    className = "",
}: AppTopBarProps) {
    return (
        <header
            className={`sticky top-0 z-40 flex h-14 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-3 ${className}`}
            style={{ paddingTop: "env(safe-area-inset-top)" }}>
            <div className="flex min-w-0 flex-1 items-center gap-2">
                {leftSlot ?? (
                    <>
                        {showBackButton && (
                            <button
                                type="button"
                                onClick={onBack}
                                aria-label="Vissza"
                                className="-ml-1.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 active:bg-gray-200"></button>
                        )}
                        {title && (
                            <h1 className="truncate text-base font-semibold text-black">
                                {title}
                            </h1>
                        )}
                    </>
                )}
            </div>

            <TopTabList actions={actions} />
        </header>
    );
}
