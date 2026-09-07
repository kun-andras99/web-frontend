import argon2 from "argon2";

// OWASP ajánlott minimum argon2id paraméterek (2024-es irányelv szerint).
const HASH_OPTIONS = {
    type: argon2.argon2id,
    memoryCost: 19456, // ~19 MB
    timeCost: 2,
    parallelism: 1,
} satisfies argon2.HashOptions;

export async function hashPassword(plainPassword: string): Promise<string> {
    return argon2.hash(plainPassword, HASH_OPTIONS);
}

export async function verifyPassword(
    passwordHash: string,
    plainPassword: string,
): Promise<boolean> {
    try {
        return await argon2.verify(passwordHash, plainPassword);
    } catch {
        // Sérült/ismeretlen formátumú hash esetén argon2 dob — ezt is "hibás jelszóként" kezeljük.
        return false;
    }
}
