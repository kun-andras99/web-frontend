import { ApiError, NetworkError, RequestTimeoutError } from "@/lib/http/errors";

const MESSAGES: Record<string, string> = {
    GROUP_NOT_FOUND: "A csoport már nem létezik.",
    INVITATION_NOT_FOUND: "Ez a meghívó már nem érvényes.",
    JOIN_REQUEST_NOT_FOUND: "Ez a kérelem már nem érvényes.",
    MEMBER_NOT_FOUND: "Ez a tag már nem tagja a csoportnak.",
    ADMIN_REQUIRED: "Ehhez admin jogosultság kell.",
    ONLY_OWNER: "Ezt csak a csoport létrehozója teheti meg.",
    CANNOT_REMOVE_OWNER: "A létrehozót nem lehet eltávolítani.",
    ADMIN_REQUIRES_OWNER: "Adminokat csak a létrehozó távolíthat el.",
    OWNER_ROLE_LOCKED: "A létrehozó szerepköre nem módosítható.",
    OWNER_CANNOT_LEAVE:
        "A létrehozó nem léphet ki, csak törölheti a csoportot.",
    MEMBERS_HIDDEN: "A tagok listája csak a csoport tagjainak látható.",
    VALIDATION_ERROR: "Ellenőrizd a megadott adatokat.",
};

export function getGroupErrorMessage(error: unknown): string {
    if (error instanceof ApiError && error.code && MESSAGES[error.code]) {
        return MESSAGES[error.code];
    }
    if (error instanceof NetworkError || error instanceof RequestTimeoutError) {
        return "Nincs kapcsolat, próbáld újra.";
    }
    return "Váratlan hiba történt, próbáld újra.";
}
