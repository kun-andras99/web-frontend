/**
 * Repository szintű hibahierarchia. Ezeket dobja a fake ÉS majd a Prisma
 * repo is (pl. Prisma P2025 "Record not found" -> NotFoundError-ré
 * csomagolva), hogy a hívó kód sose függjön az implementációtól.
 */

export class RepositoryError extends Error {
    constructor(
        message: string,
        public readonly cause?: unknown,
    ) {
        super(message);
        this.name = "RepositoryError";
    }
}

export class NotFoundError extends RepositoryError {
    constructor(entity: string, id: number | string) {
        super(`${entity} with id "${id}" was not found`);
        this.name = "NotFoundError";
    }
}

export class DuplicateError extends RepositoryError {
    constructor(entity: string, field: string, value: string) {
        super(`${entity} with ${field} "${value}" already exists`);
        this.name = "DuplicateError";
    }
}
