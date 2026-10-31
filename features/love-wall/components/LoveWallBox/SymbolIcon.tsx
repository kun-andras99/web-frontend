import { SymbolType } from "@/features/love-wall/components/LoveWallBox/symbols";

type Shape =
    | { kind: "circle"; cx: number; cy: number; r: number }
    | { kind: "path"; d: string };

interface IconDefinition {
    strokeWidth: number;
    shapes: readonly Shape[];
}

const circle = (cx: number, cy: number, r: number): Shape => ({
    kind: "circle",
    cx,
    cy,
    r,
});
const path = (d: string): Shape => ({ kind: "path", d });

const ICONS: Readonly<Record<SymbolType, IconDefinition>> = {
    heart: {
        strokeWidth: 1.2,
        shapes: [
            path(
                "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z",
            ),
        ],
    },
    man: {
        strokeWidth: 1.5,
        shapes: [circle(10, 14, 5), path("M14 10L21 3"), path("M16 3H21V8")],
    },
    woman: {
        strokeWidth: 1.5,
        shapes: [circle(12, 9, 5), path("M12 14V22"), path("M8.5 18H15.5")],
    },
    "trans-man": {
        strokeWidth: 1.4,
        shapes: [
            circle(9, 15, 5),
            path("M13 11L21 3"),
            path("M16 3H21V8"),
            path("M9 20V23"),
        ],
    },
    "trans-woman": {
        strokeWidth: 1.4,
        shapes: [
            circle(12, 8, 5),
            path("M12 13V22"),
            path("M8.5 18H15.5"),
            path("M16 4L21 2"),
            path("M19 2L21 2L20 4"),
        ],
    },
};

export default function SymbolIcon({ type }: { type: SymbolType }) {
    const { strokeWidth, shapes } = ICONS[type];

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
            aria-hidden="true">
            {shapes.map((shape, index) =>
                shape.kind === "circle" ? (
                    <circle
                        key={index}
                        cx={shape.cx}
                        cy={shape.cy}
                        r={shape.r}
                    />
                ) : (
                    <path key={index} d={shape.d} />
                ),
            )}
        </svg>
    );
}
