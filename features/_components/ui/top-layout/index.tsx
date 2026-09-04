"use client";

import AppTopBar from "@/features/navigations/app-top-bar";
import { ReactNode, useEffect, useState } from "react";
import { inboxRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";

export default function TopLayout({ children }: { children: ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const main = document.querySelector("main");

        if (!main) return;

        const handleScroll = () => {
            setIsScrolled(main.scrollTop > 0);
        };

        main.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            main.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <AppTopBar tabs={inboxRoutes} isScrolled={isScrolled} />

            {children}
        </div>
    );
}
