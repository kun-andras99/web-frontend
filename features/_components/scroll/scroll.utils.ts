export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

export function normalizeProgress(value: number, max: number): number {
    if (max <= 0) return 0;

    return clamp(value / max, 0, 1);
}
