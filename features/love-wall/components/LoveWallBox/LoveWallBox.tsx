import SymbolIcon from "@/features/love-wall/components/LoveWallBox/SymbolIcon";
import {
    createSymbols,
    FloatingSymbol,
    SYMBOL_COLORS,
} from "@/features/love-wall/components/LoveWallBox/symbols";
import { memo, type CSSProperties } from "react";

const SYMBOL_COUNT = 30;
/** Más seed más elrendezést ad. Ha nem tetszik a mostani, ezt állítsd át. */
const LAYOUT_SEED = 20240611;

type CssVars = CSSProperties & { [key: `--${string}`]: string | number };

function toStyle(symbol: FloatingSymbol): CssVars {
    return {
        left: `${symbol.left}%`,
        width: symbol.size,
        height: symbol.size,
        animationDuration: `${symbol.duration}s`,
        // negatív késleltetés: az animáció már "folyamatban" indul, nincs üres kezdőképernyő
        animationDelay: `${-symbol.delay}s`,
        opacity: symbol.opacity,
        color: SYMBOL_COLORS[symbol.type],
        "--rotation": `${symbol.rotation}deg`,
    };
}

// Egyszer, modul szinten készül: a szerver és a kliens ugyanazt kapja (deterministic seed),
// és a stílus-objektumok nem épülnek újra minden renderelésnél.
const SYMBOLS = createSymbols(SYMBOL_COUNT, LAYOUT_SEED).map((symbol) => ({
    id: symbol.id,
    type: symbol.type,
    style: toStyle(symbol),
}));

interface LoveWallFallProps {
    /** Igaz értéknél az animáció megáll (pl. zárt drawer), így nem fogyaszt CPU-t és akkumulátort. */
    paused?: boolean;
}

function LoveWallBox({ paused = false }: LoveWallFallProps) {
    return (
        <div className="love-wall-fall" data-paused={paused || undefined}>
            <div className="love-wall-fall__symbols" aria-hidden="true">
                {SYMBOLS.map(({ id, type, style }) => (
                    <span
                        key={id}
                        className="love-wall-fall__symbol"
                        style={style}>
                        <SymbolIcon type={type} />
                    </span>
                ))}
            </div>

            <div className="love-wall-fall__content">
                <div className="love-wall-fall__logo-text">
                    <h2>
                        LOVE<span>WALL</span>
                    </h2>
                    <span className="slogan">Love, in every language.</span>
                </div>
            </div>

            <div className="love-wall-fall__gradient" aria-hidden="true" />
        </div>
    );
}

export default memo(LoveWallBox);
