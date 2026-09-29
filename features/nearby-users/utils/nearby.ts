const EARTH_RADIUS_KM = 6371;

export function calculateDistanceKm(
    latitude1: number,
    longitude1: number,
    latitude2: number,
    longitude2: number,
): number {
    const lat1 = toRadians(latitude1);
    const lat2 = toRadians(latitude2);

    const deltaLatitude = toRadians(latitude2 - latitude1);
    const deltaLongitude = toRadians(longitude2 - longitude1);

    const a =
        Math.sin(deltaLatitude / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLongitude / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return EARTH_RADIUS_KM * c;
}

function toRadians(value: number): number {
    return (value * Math.PI) / 180;
}

interface BoundingBox {
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
}

export function calculateBoundingBox(
    latitude: number,
    longitude: number,
    radiusKm: number,
): BoundingBox {
    const latitudeDelta = radiusKm / 111.32;

    const longitudeDelta =
        radiusKm / (111.32 * Math.cos((latitude * Math.PI) / 180));

    return {
        minLat: Math.max(-90, latitude - latitudeDelta),
        maxLat: Math.min(90, latitude + latitudeDelta),
        minLng: Math.max(-180, longitude - longitudeDelta),
        maxLng: Math.min(180, longitude + longitudeDelta),
    };
}
