"use client";
import type { CSSProperties } from "react";
type SymbolType = "heart" | "man" | "woman" | "trans-man" | "trans-woman";
type FloatingSymbol = {
    id: number;
    type: SymbolType;
    left: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    rotation: number;
};
const SYMBOL_TYPES: SymbolType[] = [
    "heart",
    "man",
    "woman",
    "trans-man",
    "trans-woman",
];
const SYMBOL_COLORS: Record<SymbolType, string> = {
    heart: "#1eb1eb",
    man: "#4da6ff",
    woman: "#ff5fa2",
    "trans-man": "#55c7d9",
    "trans-woman": "#d77cff",
};
const SYMBOL_COUNT = 30;
function createSymbol(id: number): FloatingSymbol {
    const type = SYMBOL_TYPES[Math.floor(Math.random() * SYMBOL_TYPES.length)];
    return {
        id,
        type,
        left: Math.random() * 100,
        size: 12 + Math.random() * 14,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 6,
        opacity: 0.08 + Math.random() * 0.66,
        rotation: -15 + Math.random() * 30,
    };
}
const symbols = Array.from({ length: SYMBOL_COUNT }, (_, index) =>
    createSymbol(index),
);
function SymbolIcon({ type }: { type: SymbolType }) {
    switch (type) {
        case "heart":
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "man":
            return (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="10"
                        cy="14"
                        r="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M14 10L21 3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 3H21V8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "woman":
            return (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="12"
                        cy="9"
                        r="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M12 14V22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M8.5 18H15.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "trans-man":
            return (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="9"
                        cy="15"
                        r="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                    />
                    <path
                        d="M13 11L21 3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 3H21V8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 20V23"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "trans-woman":
            return (
                <svg viewBox="0 0 24 24">
                    <circle
                        cx="12"
                        cy="8"
                        r="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                    />
                    <path
                        d="M12 13V22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M8.5 18H15.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 4L21 2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M19 2L21 2L20 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
    }
}
export default function LoveWallFall() {
    return (
        <div className="love-wall-fall">
            <div className="love-wall-fall__symbols" aria-hidden="true">
                {symbols.map((symbol) => (
                    <span
                        key={symbol.id}
                        className="love-wall-fall__symbol"
                        style={
                            {
                                left: `${symbol.left}%`,
                                width: `${symbol.size}px`,
                                height: `${symbol.size}px`,
                                animationDuration: `${symbol.duration}s`,
                                animationDelay: `${symbol.delay}s`,
                                opacity: symbol.opacity,
                                color: SYMBOL_COLORS[symbol.type],
                                "--rotation": `${symbol.rotation}deg`,
                            } as CSSProperties
                        }>
                        <SymbolIcon type={symbol.type} />
                    </span>
                ))}
            </div>
            <div className="love-wall-fall__content">
                <span className="love-wall-fall__logo-text">
                    <h2>
                        LOVE<span>WALL</span>
                    </h2>
                    <span className="slogan">Love, in every language.</span>
                </span>
            </div>
            <div className="love-wall-fall__gradient"></div>
        </div>
    );
}
