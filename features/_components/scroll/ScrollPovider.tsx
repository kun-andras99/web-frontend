"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    type ReactNode,
} from "react";

import { SCROLL_CONFIG } from "./scroll.constants";
import type { ScrollContextValue, ScrollElements } from "./scroll.types";

import { clamp } from "./scroll.utils";

const ScrollContext = createContext<ScrollContextValue | null>(null);

interface ScrollProviderProps {
    children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
    const mainRef = useRef<HTMLElement | null>(null);

    const elementsRef = useRef<ScrollElements>({
        topBar: null,
    });

    const frameRef = useRef<number | null>(null);

    /*
     * --------------------------------------------------
     * SCHEDULE UPDATE
     * --------------------------------------------------
     */

    const scheduleUpdate = useCallback(() => {
        if (frameRef.current !== null) {
            return;
        }

        frameRef.current = requestAnimationFrame(() => {
            frameRef.current = null;

            const main = mainRef.current;

            if (!main) {
                return;
            }

            const scrollY = main.scrollTop;

            const { topBar } = elementsRef.current;

            /*
             * ======================================
             * TOP BAR
             * ======================================
             */

            if (topBar) {
                const topBarHeight = topBar.offsetHeight;

                const maxOffset = Math.max(
                    0,
                    topBarHeight - SCROLL_CONFIG.topBarVisibleHeight,
                );

                const offset = clamp(scrollY, 0, maxOffset);

                topBar.style.setProperty("--top-bar-offset", `${-offset}px`);
            }
        });
    }, []);

    /*
     * --------------------------------------------------
     * REGISTER TOP BAR
     * --------------------------------------------------
     */

    const registerTopBar = useCallback(
        (element: HTMLElement | null) => {
            elementsRef.current.topBar = element;

            scheduleUpdate();
        },
        [scheduleUpdate],
    );

    useEffect(() => {
        const main = mainRef.current;

        if (!main) {
            return;
        }

        /*
         * Scroll
         */

        const handleScroll = () => {
            scheduleUpdate();
        };

        main.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        /*
         * Initial update
         */

        scheduleUpdate();

        /*
         * ResizeObserver
         *
         * TopBar magassága változhat:
         *
         * mobile
         * tablet
         * desktop
         * orientation
         * dynamic content
         */

        const resizeObserver = new ResizeObserver(() => {
            scheduleUpdate();
        });

        /*
         * Cleanup-safe observer
         */

        const observeElements = () => {
            const { topBar } = elementsRef.current;

            if (topBar) {
                resizeObserver.observe(topBar);
            }
        };

        observeElements();

        /*
         * ------------------------------------------------
         * CLEANUP
         * ------------------------------------------------
         */

        return () => {
            main.removeEventListener("scroll", handleScroll);

            resizeObserver.disconnect();

            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);

                frameRef.current = null;
            }
        };
    }, [scheduleUpdate]);

    const contextValue: ScrollContextValue = {
        mainRef,
        registerTopBar,
    };
    return (
        <ScrollContext.Provider value={contextValue}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollContainer() {
    const context = useContext(ScrollContext);

    if (!context) {
        throw new Error(
            "useScrollContainer must be used inside ScrollProvider.",
        );
    }

    return context;
}
