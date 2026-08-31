import type { Message } from "../types/message.types";

export const messages: Message[] = [
    {
        id: 1,
        senderId: 12,
        content: "Szia! Hogy telt a napod? 😊",
        read: false,
        createdAt: new Date("2026-08-31T18:42:00"),
    },
    {
        id: 2,
        senderId: 7,
        content: "Nagyon tetszik a profilod, gondoltam rád írok. 😊",
        read: false,
        createdAt: new Date("2026-08-31T17:25:00"),
    },
    {
        id: 3,
        senderId: 24,
        content: "Szia, te is szereted az esti sétákat?",
        read: true,
        createdAt: new Date("2026-08-31T16:10:00"),
    },
    {
        id: 4,
        senderId: 5,
        content: "Mit csinálsz most? 😏",
        read: false,
        createdAt: new Date("2026-08-31T15:47:00"),
    },
    {
        id: 5,
        senderId: 18,
        content: "Jó volt veled beszélgetni tegnap!",
        read: true,
        createdAt: new Date("2026-08-31T14:32:00"),
    },
    {
        id: 6,
        senderId: 31,
        content: "Van kedved valamikor meginni egy kávét?",
        read: false,
        createdAt: new Date("2026-08-31T13:15:00"),
    },
    {
        id: 7,
        senderId: 9,
        content:
            "Szia! Láttam, hogy szereted az utazást. Merre jártál mostanában?",
        read: true,
        createdAt: new Date("2026-08-31T11:50:00"),
    },
    {
        id: 8,
        senderId: 42,
        content: "Helló 😊 Milyen zenéket hallgatsz?",
        read: false,
        createdAt: new Date("2026-08-30T22:18:00"),
    },
    {
        id: 9,
        senderId: 16,
        content: "Na, sikerült kipihenned magad hétvégén?",
        read: true,
        createdAt: new Date("2026-08-30T19:41:00"),
    },
    {
        id: 10,
        senderId: 3,
        content: "Szerintem egész jól kijönnénk egymással. 😉",
        read: false,
        createdAt: new Date("2026-08-30T18:05:00"),
    },
];
