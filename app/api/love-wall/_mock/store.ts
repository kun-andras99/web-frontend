import { PAGE_SIZE } from "@/features/love-wall/constants";
import type { LoveMessage } from "@/features/love-wall/types";

const SAMPLE_TEXTS = [
    "Nagyon szeretem ezt az appot, minden nap használom! 💜",
    "Köszönöm, hogy létrehoztátok, sokat segít.",
    "Ma végre sikerült elérnem a célomat, hálás vagyok.",
    "Szép napot mindenkinek! ☀️",
    "Ez a design baromi jól néz ki.",
    "Egy hosszabb üzenet, hogy lássuk, hogyan törik a sor: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Első vagyok! 😄",
    "Szuper közösség, jó itt lenni.",
    "Többsoros üzenet tesztje.\nMásodik sor.\nHarmadik sor.",
    "Hajrá, így tovább!",
];

const SAMPLE_NAMES: (string | null)[] = [
    "John Doe",
    "Kata",
    null,
    "Bence88",
    "Zsófi",
    null,
    "Mate_K",
    "Luca",
];

function buildSeed(count: number): LoveMessage[] {
    const now = Date.now();

    return Array.from({ length: count }, (_, i) => ({
        id: `seed-${i + 1}`,
        nickname: SAMPLE_NAMES[i % SAMPLE_NAMES.length],
        avatarUrl: null,
        message: SAMPLE_TEXTS[i % SAMPLE_TEXTS.length],
        // legújabb elöl, 37 percenként egyre régebbi
        createdAt: new Date(now - i * 37 * 60 * 1000).toISOString(),
    }));
}

// globalThis: dev módban a HMR nem nullázza az adatokat
const globalStore = globalThis as unknown as {
    __loveWallMock?: { messages: LoveMessage[]; reported: Set<string> };
};

globalStore.__loveWallMock ??= {
    messages: buildSeed(45),
    reported: new Set<string>(),
};

const db = globalStore.__loveWallMock;

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export function listMessages(cursor: string | null, limit = PAGE_SIZE) {
    const start = cursor ? Number.parseInt(cursor, 10) || 0 : 0;
    const items = db.messages.slice(start, start + limit);
    const next = start + limit;

    return {
        items,
        nextCursor: next < db.messages.length ? String(next) : null,
    };
}

export function addMessage(message: string): LoveMessage {
    const created: LoveMessage = {
        id: crypto.randomUUID(),
        nickname: null,
        avatarUrl: null,
        message,
        createdAt: new Date().toISOString(),
    };
    db.messages.unshift(created);
    return created;
}

export function reportMessage(id: string): boolean {
    if (!db.messages.some((m) => m.id === id)) return false;
    db.reported.add(id);
    return true;
}
