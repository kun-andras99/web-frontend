"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function TopFilter({ children }: { children: ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const main = document.querySelector("main");

        if (!main) return;

        const handleScroll = () => {
            const currentScrollY = main.scrollTop;

            // Legfelül mindig látható
            if (currentScrollY <= 0) {
                setIsScrolled(false);
                lastScrollY.current = 0;
                return;
            }

            // Lefelé görgetés
            if (currentScrollY > lastScrollY.current) {
                setIsScrolled(true);
            }

            // Felfelé görgetés
            else if (currentScrollY < lastScrollY.current) {
                setIsScrolled(false);
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
        <div
            className={`page-top-filter ${isScrolled ? "is-scrolled-filter" : ""}`}>
            <div className="content">{children}</div>
        </div>
    );
}
