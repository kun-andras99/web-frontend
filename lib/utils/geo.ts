const EARTH_RADIUS_M = 6_371_000;
const toDegrees = (radians: number) => (radians * 180) / Math.PI;
const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export interface BoundingBox {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
    /** true: a doboz átlépi a ±180° hosszúsági kört, ilyenkor a lng-szűrést kihagyjuk */
    wrapsLongitude: boolean;
}

/** Durva négyzet a sugár körül: az index ezzel szűkít, a pontos távolságot az SQL számolja. */
export function boundingBox(
    lat: number,
    lng: number,
    radiusMeters: number,
): BoundingBox {
    const latDelta = toDegrees(radiusMeters / EARTH_RADIUS_M);
    const lngDelta = latDelta / Math.max(Math.cos(toRadians(lat)), 0.01);

    const minLng = lng - lngDelta;
    const maxLng = lng + lngDelta;

    return {
        minLat: lat - latDelta,
        maxLat: lat + latDelta,
        minLng,
        maxLng,
        wrapsLongitude: minLng < -180 || maxLng > 180,
    };
}

/** Rácsra kerekítés: 2 tizedes ≈ 1,1 km. */
export function snapCoordinate(value: number, decimals: number): number {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}

/** Felfelé kerekített egész km (min. 1): a kliens csak ezt látja. */
export function distanceBucketKm(meters: number): number {
    return Math.max(1, Math.ceil(meters / 1000));
}
