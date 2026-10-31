import { createSeededRandomIcons } from "@/lib/utils/seeded-random-icons";

export const SYMBOL_TYPES = [
    "heart",
    "man",
    "woman",
    "trans-man",
    "trans-woman",
] as const;
export type SymbolType = (typeof SYMBOL_TYPES)[number];

export const SYMBOL_COLORS: Readonly<Record<SymbolType, string>> = {
    heart: "#1eb1eb",
    man: "#4da6ff",
    woman: "#ff5fa2",
    "trans-man": "#55c7d9",
    "trans-woman": "#d77cff",
};

export interface FloatingSymbol {
    id: number;
    type: SymbolType;
    /** % */
    left: number;
    /** px */
    size: number;
    /** s */
    duration: number;
    /** s */
    delay: number;
    opacity: number;
    /** fok */
    rotation: number;
}

const round = (value: number, decimals: number) => {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
};

/** Determinisztikus: ugyanaz a (count, seed) páros mindig ugyanazt a tömböt adja. */
export function createSymbols(count: number, seed: number): FloatingSymbol[] {
    const random = createSeededRandomIcons(seed);
    const between = (min: number, max: number) => min + random() * (max - min);

    return Array.from({ length: count }, (_, id) => ({
        id,
        type:
            SYMBOL_TYPES[Math.floor(random() * SYMBOL_TYPES.length)] ?? "heart",
        // sávokra osztva, véletlen eltolással: egyenletesebb, mint a tiszta véletlen
        left: round(((id + random()) / count) * 100, 2),
        size: round(between(12, 26), 1),
        duration: round(between(5, 10), 1),
        delay: round(between(0, 6), 1),
        opacity: round(between(0.08, 0.74), 2),
        rotation: round(between(-15, 15), 1),
    }));
}
