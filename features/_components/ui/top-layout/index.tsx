"use client";

import { ReactNode, useEffect } from "react";

const TOP_BAR_VISIBLE_HEIGHT = 46;

interface TopLayoutProps {
    children: ReactNode;
}

export default function TopLayout({ children }: TopLayoutProps) {
    useEffect(() => {
        const main = document.querySelector("main");

        if (!main) return;

        const topBar = document.querySelector<HTMLElement>(".top-bar");

        if (!topBar) return;

        const frameId: number | null = null;

        const handleScroll = () => {
            const scrollY = main.scrollTop;
            const maxOffset = topBar.offsetHeight - TOP_BAR_VISIBLE_HEIGHT;

            const offset = Math.min(scrollY, maxOffset);

            topBar.style.setProperty("--top-bar-offset", `-${offset}px`);
        };

        main.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            main.removeEventListener("scroll", handleScroll);

            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <>
            {/* <AppTopBar tabs={inboxRoutes!} /> */}
            {children}
        </>
    );
}
