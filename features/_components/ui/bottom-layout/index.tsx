"use client";

import AppBottomBar from "@/features/navigations/app-bottom-bar";
import { ReactNode, useEffect, useRef, useState } from "react";
export default function BottomLayout({ children }: { children: ReactNode }) {
    const [isBottomBarHidden, setIsBottomBarHidden] = useState(false);

    const lastScrollY = useRef(0);

    useEffect(() => {
        const main = document.querySelector("main");

        if (!main) return;

        const handleScroll = () => {
            const currentScrollY = main.scrollTop;

            // Legfelül mindig látható
            if (currentScrollY <= 0) {
                setIsBottomBarHidden(false);
                lastScrollY.current = 0;
                return;
            }

            // Lefelé görgetés
            if (currentScrollY > lastScrollY.current) {
                setIsBottomBarHidden(true);
            }

            // Felfelé görgetés
            else if (currentScrollY < lastScrollY.current) {
                setIsBottomBarHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        main.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            main.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="test">
            <main>{children}</main>
            <AppBottomBar isHidden={isBottomBarHidden} />
        </div>
    );
}
