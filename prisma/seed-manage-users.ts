/**
 * Mock adatok a /settings/manage-users oldalhoz.
 *
 *   npx tsx --env-file=.env prisma/seed-manage-users.ts               # létrehozás (újrafuttatható)
 *   npx tsx --env-file=.env prisma/seed-manage-users.ts --avatars     # külső avatarképekkel
 *   npx tsx --env-file=.env prisma/seed-manage-users.ts --clean       # a mock adatok törlése
 *   ... --allow-remote                                                # nem helyi adatbázishoz
 */
import { prisma } from "@/lib/prisma";

const TARGET_USER_ID = "cmunyjerv0000lset9gp8vcgr";

const COUNTS = { friends: 40, favorites: 40, blocked: 40 } as const;
/** Ennyi kedvenc egyben barát is (több jelvény tesztelése). A kedvencek száma így is COUNTS.favorites marad. */
const FAVORITES_ALSO_FRIENDS = 10;

const MOCK_USERNAME_PREFIX = "mock_user_";
const MOCK_EMAIL_DOMAIN = "mock.invalid"; // a .invalid TLD-re nem kézbesíthető levél
/** Szándékosan nem valódi hash: a mock userek nem tudnak belépni. */
const NO_LOGIN_PASSWORD_HASH = "!mock-account-no-login";
/**
 * A pairKey képzését MÁSOLD ide a saját alkalmazásodból, hogy a mock és a valódi adat azonos
 * formátumú legyen. Ez csak tipp (rendezett azonosítók, kettősponttal összefűzve).
 */
const buildPairKey = (a: string, b: string) => [a, b].sort().join(":");

/**
 * A UserData további kötelező (alapérték nélküli) mezői. A bemásolt modell itt megszakadt,
 * ezért üres. Ha a seed `Argument 'xyz' is missing` hibát ad, vedd fel ide.
 */
const MOCK_USER_DATA_EXTRAS = {
    birth: new Date("1995-01-01"),
};

const FIRST_NAMES = [
    "Ádám",
    "Bence",
    "Csilla",
    "Dóra",
    "Előd",
    "Flóra",
    "Gergő",
    "Hanna",
    "Írisz",
    "Jázmin",
    "Kende",
    "Lilla",
    "Márk",
    "Nóra",
    "Ödön",
    "Panna",
    "Réka",
    "Szilárd",
    "Tamás",
    "Ulrik",
    "Vince",
    "Zsófi",
    "Áron",
    "Éva",
    "Őrs",
    "Ügyes",
] as const;

const LOCAL_HOSTS = new Set([
    "localhost",
    "127.0.0.1",
    "::1",
    "host.docker.internal",
]);

// ---- biztonsági ellenőrzés ----

function assertSafeEnvironment(args: Set<string>) {
    if (process.env.NODE_ENV === "production") {
        throw new Error("Production környezetben nem futtatható.");
    }

    let host = "ismeretlen";
    try {
        host = new URL(process.env.DATABASE_URL ?? "").hostname;
    } catch {
        // értelmezhetetlen URL: alább a --allow-remote dönt
    }

    console.log(`Adatbázis: ${host}`);

    if (!LOCAL_HOSTS.has(host) && !args.has("--allow-remote")) {
        throw new Error(
            `A(z) "${host}" nem helyi adatbázis. Ha tényleg ide szeretnél mock adatot írni, add meg a --allow-remote kapcsolót.`,
        );
    }
}

// ---- mock adatok ----

interface MockUser {
    index: number;
    username: string;
    email: string;
    nickname: string;
    avatarUrl: string | null;
}

const pad = (n: number) => String(n).padStart(3, "0");

function buildMockUsers(total: number, withAvatars: boolean): MockUser[] {
    return Array.from({ length: total }, (_, offset) => {
        const index = offset + 1;
        const base = FIRST_NAMES[offset % FIRST_NAMES.length];

        return {
            index,
            username: `${MOCK_USERNAME_PREFIX}${pad(index)}`,
            email: `mock-${pad(index)}@${MOCK_EMAIL_DOMAIN}`,
            nickname: `${base}_${pad(index)}`,
            // minden harmadiknak nincs képe: így a helyettesítő kezdőbetű is látszik
            avatarUrl:
                withAvatars && index % 3 !== 0
                    ? `https://i.pravatar.cc/150?img=${(index % 70) + 1}`
                    : null,
        };
    });
}

/** A barátság párját fix sorrendben tároljuk (user1Id < user2Id), a lekérdezések mindkét irányt kezelik. */
const orderedPair = (a: string, b: string) =>
    a < b ? { user1Id: a, user2Id: b } : { user1Id: b, user2Id: a };

// ---- seed ----

async function seed(withAvatars: boolean) {
    const friendOnly = COUNTS.friends - FAVORITES_ALSO_FRIENDS;
    const favoriteOnly = COUNTS.favorites - FAVORITES_ALSO_FRIENDS;
    const total =
        friendOnly + FAVORITES_ALSO_FRIENDS + favoriteOnly + COUNTS.blocked;

    const mockUsers = buildMockUsers(total, withAvatars);

    // egymás utáni upsert: újrafuttatáskor nem keletkeznek duplikátumok
    const ids: string[] = [];
    for (const user of mockUsers) {
        const userData = {
            nickname: user.nickname,
            avatarUrl: user.avatarUrl,
            ...MOCK_USER_DATA_EXTRAS,
        };

        const row = await prisma.users.upsert({
            where: { username: user.username },
            create: {
                username: user.username,
                email: user.email,
                passwordHash: NO_LOGIN_PASSWORD_HASH,
                userData: { create: userData },
            },
            update: {
                userData: { upsert: { create: userData, update: userData } },
            },
            select: { id: true },
        });
        ids.push(row.id);
    }

    // csoportok: [barát-only][barát ÉS kedvenc][kedvenc-only][tiltott]
    let cursor = 0;
    const take = (count: number) => ids.slice(cursor, (cursor += count));

    const friendOnlyIds = take(friendOnly);
    const bothIds = take(FAVORITES_ALSO_FRIENDS);
    const favoriteOnlyIds = take(favoriteOnly);
    const blockedIds = take(COUNTS.blocked);

    const friendIds = [...friendOnlyIds, ...bothIds];
    const favoriteIds = [...bothIds, ...favoriteOnlyIds];

    // A kapcsolatokat előbb töröljük, majd újra létrehozzuk: így egyedi kulcstól függetlenül újrafuttatható.
    await prisma.$transaction([
        prisma.friendship.deleteMany({
            where: {
                OR: [
                    { user1Id: TARGET_USER_ID, user2Id: { in: ids } },
                    { user2Id: TARGET_USER_ID, user1Id: { in: ids } },
                ],
            },
        }),
        prisma.userFavorite.deleteMany({
            where: { fromUserId: TARGET_USER_ID, toUserId: { in: ids } },
        }),
        prisma.userBlock.deleteMany({
            where: { blockerId: TARGET_USER_ID, blockedId: { in: ids } },
        }),

        prisma.friendship.createMany({
            data: friendIds.map((id) => ({
                ...orderedPair(TARGET_USER_ID, id),
                pairKey: buildPairKey(TARGET_USER_ID, id),
                // status: alapértelmezés szerint ACTIVE
            })),
        }),
        prisma.userFavorite.createMany({
            data: favoriteIds.map((id) => ({
                fromUserId: TARGET_USER_ID,
                toUserId: id,
            })),
        }),
        prisma.userBlock.createMany({
            data: blockedIds.map((id) => ({
                blockerId: TARGET_USER_ID,
                blockedId: id,
            })),
        }),
    ]);

    console.log(
        [
            `Kész. ${mockUsers.length} mock felhasználó és kapcsolat létrehozva:`,
            `  barátok:   ${friendIds.length}`,
            `  kedvencek: ${favoriteIds.length} (ebből ${bothIds.length} egyben barát is)`,
            `  tiltottak: ${blockedIds.length}`,
            `  összes különböző felhasználó a listában: ${mockUsers.length}`,
        ].join("\n"),
    );
}

// ---- törlés ----

async function clean() {
    const mockUsers = await prisma.users.findMany({
        where: {
            username: { startsWith: MOCK_USERNAME_PREFIX },
            email: { endsWith: `@${MOCK_EMAIL_DOMAIN}` },
        },
        select: { id: true },
    });
    const ids = mockUsers.map((user) => user.id);

    if (ids.length === 0) {
        console.log("Nincs törlendő mock adat.");
        return;
    }

    // A kapcsolatok törlése után a felhasználók; a hozzájuk tartozó sorok (pl. userData)
    // törléséhez a sémában onDelete: Cascade kell, különben az adatbázis hibát jelez.
    await prisma.$transaction([
        prisma.friendship.deleteMany({
            where: { OR: [{ user1Id: { in: ids } }, { user2Id: { in: ids } }] },
        }),
        prisma.userFavorite.deleteMany({
            where: {
                OR: [{ fromUserId: { in: ids } }, { toUserId: { in: ids } }],
            },
        }),
        prisma.userBlock.deleteMany({
            where: {
                OR: [{ blockerId: { in: ids } }, { blockedId: { in: ids } }],
            },
        }),
        prisma.users.deleteMany({ where: { id: { in: ids } } }),
    ]);

    console.log(`${ids.length} mock felhasználó és a kapcsolataik törölve.`);
}

// ---- belépési pont ----

async function main() {
    const args = new Set(process.argv.slice(2));
    assertSafeEnvironment(args);

    const target = await prisma.users.findUnique({
        where: { id: TARGET_USER_ID },
        select: { username: true },
    });
    if (!target)
        throw new Error(
            `A célfelhasználó (${TARGET_USER_ID}) nem létezik ebben az adatbázisban.`,
        );

    console.log(`Célfelhasználó: ${target.username}`);

    if (args.has("--clean")) await clean();
    else await seed(args.has("--avatars"));
}

main()
    .catch((error) => {
        console.error(error instanceof Error ? error.message : error);
        process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
