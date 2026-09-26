// import 'server-only';
// import { SignJWT, jwtVerify } from 'jose';
// import { cookies } from 'next/headers';

// const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
// const COOKIE_NAME = 'session';
// const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 nap

// export interface SessionPayload {
//   sub: string;
//   hasProfile: boolean;
// }

/**
 * A jelenlegi munkamenet kiolvasása a cookie-ból. Route handlerben és
 * server componentben egyaránt hívható.
 */

/**
 * Új session cookie kiállítása. Bejelentkezéskor / regisztrációkor hívd
 * meg { sub: userId, hasProfile: false }-al.
 */
// export async function issueSession(payload: SessionPayload) {
//   const token = await new SignJWT({ ...payload })
//     .setProtectedHeader({ alg: 'HS256' })
//     .setIssuedAt()
//     .setExpirationTime(`${MAX_AGE_SECONDS}s`)
//     .sign(secret);

//   cookies().set(COOKIE_NAME, token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//     path: '/',
//     maxAge: MAX_AGE_SECONDS,
//   });
// }

/**
 * A profil sikeres létrehozása után hívandó: újra aláírja a cookie-t
 * hasProfile: true értékkel, hogy a middleware onnantól átengedjen
 * mindenhova.
 */
// export async function markProfileComplete() {
//   const session = await getSession();
//   if (!session) {
//     throw new Error('Nincs érvényes munkamenet');
//   }
//   await issueSession({ ...session, hasProfile: true });
// }
