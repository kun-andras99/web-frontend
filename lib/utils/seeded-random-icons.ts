/**
 * Mulberry32: kicsi, gyors, determinisztikus generátor. Azonos seedből mindig azonos
 * sorozatot ad, így a szerver és a kliens ugyanazt az elrendezést számolja (nincs hydration eltérés).
 * Nem kriptográfiai célra való.
 */
export function createSeededRandomIcons(seed: number): () => number {
    let state = seed >>> 0;

    return () => {
        state = (state + 0x6d2b79f5) >>> 0;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
