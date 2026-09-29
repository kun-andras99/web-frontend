export type GeolocationFailureReason =
    "UNSUPPORTED" | "DENIED" | "UNAVAILABLE" | "TIMEOUT";

export class GeolocationFailure extends Error {
    constructor(readonly reason: GeolocationFailureReason) {
        super(`Geolocation failed: ${reason}`);
        this.name = "GeolocationFailure";
    }
}

export function requestPosition(): Promise<{ lat: number; lng: number }> {
    return new Promise((resolve, reject) => {
        if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
            reject(new GeolocationFailure("UNSUPPORTED"));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) =>
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }),
            (error) =>
                reject(
                    new GeolocationFailure(
                        error.code === error.PERMISSION_DENIED
                            ? "DENIED"
                            : error.code === error.TIMEOUT
                              ? "TIMEOUT"
                              : "UNAVAILABLE",
                    ),
                ),
            // szándékosan nem high accuracy: a szerver úgyis 1 km-es rácsra kerekít
            {
                enableHighAccuracy: false,
                timeout: 10_000,
                maximumAge: 5 * 60_000,
            },
        );
    });
}
