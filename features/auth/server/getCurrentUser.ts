import "server-only";

/**
 * Korábban itt egy második, eltérő `getCurrentUser` implementáció élt, ami
 * a `JWT_SECRET` env-et használta az `ACCESS_TOKEN_SECRET` helyett, és nem
 * ellenőrizte a fiók státuszát. Egyetlen forrás legyen az igazság:
 */
export { getCurrentUser } from "@/features/auth/lib/session";
