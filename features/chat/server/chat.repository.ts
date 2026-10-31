import "server-only";

import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../prisma/generated/prisma";

type Db = Prisma.TransactionClient | typeof prisma;

export const messageSelect = {
    id: true,
    conversationId: true,
    senderId: true,
    type: true,
    content: true,
    sentAt: true,
    revokedAt: true,
    reads: { select: { userId: true } },
} satisfies Prisma.MessageSelect;

export type MessageRowData = Prisma.MessageGetPayload<{
    select: typeof messageSelect;
}>;

const participantUserSelect = {
    userId: true,
    user: {
        select: {
            status: true,
            userData: { select: { nickname: true, avatarUrl: true } },
        },
    },
} satisfies Prisma.ConversationParticipantSelect;

export type ParticipantRowData = Prisma.ConversationParticipantGetPayload<{
    select: typeof participantUserSelect;
}>;

export function findParticipant(conversationId: string, userId: string) {
    return prisma.conversationParticipant.findUnique({
        where: { conversationId_userId: { conversationId, userId } },
        select: { id: true },
    });
}

export function findOtherParticipants(conversationId: string, userId: string) {
    return prisma.conversationParticipant.findMany({
        where: { conversationId, userId: { not: userId } },
        select: participantUserSelect,
    });
}

export function findConversationWithParticipant(
    conversationId: string,
    viewerId: string,
) {
    return prisma.conversation.findFirst({
        where: {
            id: conversationId,
            participants: { some: { userId: viewerId } },
        },
        select: {
            id: true,
            participants: {
                where: { userId: { not: viewerId } },
                take: 1,
                select: participantUserSelect,
            },
        },
    });
}
export type ConversationDetailData = NonNullable<
    Awaited<ReturnType<typeof findConversationWithParticipant>>
>;

export function findMessagingTarget(userId: string) {
    return prisma.users.findUnique({
        where: { id: userId },
        select: { id: true, status: true },
    });
}

/** Pontosan ez a két résztvevő (1:1). Az `every` nélkül a csoportos vagy üres beszélgetés is illene. */
function findConversationBetween(a: string, b: string, db: Db = prisma) {
    return db.conversation.findFirst({
        where: {
            AND: [
                { participants: { some: { userId: a } } },
                { participants: { some: { userId: b } } },
                { participants: { every: { userId: { in: [a, b] } } } },
            ],
        },
        select: { id: true },
    });
}

export function findExistingConversationId(a: string, b: string) {
    return findConversationBetween(a, b);
}

/**
 * Atomi "keress vagy hozz létre". A tranzakción belüli advisory lock a két user párjára
 * szerializálja a kéréseket, így párhuzamos hívásokból sem lesz két beszélgetés.
 * (DB-szintű garanciához később: `pairKey String @unique` a Conversation modellen.)
 */
export function findOrCreateConversation(
    viewerId: string,
    targetId: string,
): Promise<{ id: string; created: boolean }> {
    const [first, second] = [viewerId, targetId].sort();

    return prisma.$transaction(async (tx) => {
        await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${`conversation:${first}:${second}`}))`;

        const existing = await findConversationBetween(viewerId, targetId, tx);
        if (existing) {
            // megnyitáskor a saját, "törölt" nézetünk visszaáll
            await tx.conversationParticipant.updateMany({
                where: {
                    conversationId: existing.id,
                    userId: viewerId,
                    deletedAt: { not: null },
                },
                data: { deletedAt: null },
            });
            return { id: existing.id, created: false };
        }

        const created = await tx.conversation.create({
            data: {
                participants: {
                    create: [{ userId: viewerId }, { userId: targetId }],
                },
            },
            select: { id: true },
        });
        return { id: created.id, created: true };
    });
}

export async function findMessagesPage(params: {
    conversationId: string;
    cursor?: string;
    limit: number;
}) {
    const { conversationId, cursor, limit } = params;

    const rows = await prisma.message.findMany({
        where: { conversationId },
        select: messageSelect,
        // a legújabb elöl; az id második kulcs, így azonos időpontnál is stabil
        orderBy: [{ sentAt: "desc" }, { id: "desc" }],
        take: limit + 1,
        ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    });

    const hasMore = rows.length > limit;
    const items = hasMore ? rows.slice(0, limit) : rows;
    return { items, nextCursor: hasMore ? (items.at(-1)?.id ?? null) : null };
}

export function insertMessage(params: {
    conversationId: string;
    senderId: string;
    content: string;
}) {
    const { conversationId, senderId, content } = params;

    return prisma.$transaction(async (tx) => {
        const created = await tx.message.create({
            data: { conversationId, senderId, type: "TEXT", content },
            select: messageSelect,
        });

        await tx.conversation.update({
            where: { id: conversationId },
            data: { updatedAt: new Date() },
        });

        // az új üzenet a "törölt" beszélgetést mindkét félnél újra előhozza
        await tx.conversationParticipant.updateMany({
            where: { conversationId, deletedAt: { not: null } },
            data: { deletedAt: null },
        });

        return created;
    });
}

/**
 * A másik fél olvasatlan üzeneteit olvasottnak jelöli. Egy hívás legfeljebb 500-at dolgoz fel,
 * a többit a következő hívás viszi tovább.
 * @returns az újonnan olvasottnak jelölt üzenetek száma
 */
export async function markMessagesRead(
    conversationId: string,
    userId: string,
): Promise<number> {
    const unread = await prisma.message.findMany({
        where: {
            conversationId,
            senderId: { not: userId },
            revokedAt: null,
            reads: { none: { userId } },
        },
        select: { id: true },
        take: 500,
    });
    if (unread.length === 0) return 0;

    const { count } = await prisma.messageRead.createMany({
        data: unread.map((message) => ({ messageId: message.id, userId })),
        skipDuplicates: true,
    });
    return count;
}
