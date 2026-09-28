export function formatDistance(distanceKm: number | null) {
    if (distanceKm === null) {
        return null;
    }

    if (distanceKm < 1) {
        return `${Math.round(distanceKm * 1000)} m`;
    }

    return `${distanceKm.toFixed(1)} km`;
}
