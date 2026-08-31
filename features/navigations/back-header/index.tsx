// components/Header.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import {
    DEFAULT_FALLBACK,
    getParentRoute,
    isDynamicEntryRoute,
} from "../../../lib/route-hierarchy";

interface HeaderProps {
    title: string;
    showBackButton?: boolean;
}

export default function BackHeader({
    title,
    showBackButton = true,
}: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleBack = () => {
        if (isDynamicEntryRoute(pathname)) {
            // bárhonnan nyitható -> a valós history-ra hagyatkozunk
            if (window.history.length > 1) {
                router.back();
            } else {
                router.push(DEFAULT_FALLBACK); // pl. refresh vagy direkt link esetén
            }
            return;
        }

        // fix strukturális kapcsolat -> mindig ugyanoda megy
        router.push(getParentRoute(pathname));
    };

    return (
        <header className="flex items-center gap-4 p-4 border-b">
            {showBackButton && (
                <div onClick={handleBack} aria-label="Vissza" className="p-1">
                    v
                </div>
            )}
            <h1 className="text-lg font-semibold">{title}</h1>
        </header>
    );
}
