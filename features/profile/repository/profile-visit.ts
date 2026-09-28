import { prisma } from "@/lib/prisma";

const VISIT_COOLDOWN_MS = 60 * 1000;

export async function recordProfileVisit(
    visitorId: string,
    visitedUserId: string,
) {
    // Saját profil megtekintését nem mentjük.
    if (visitorId === visitedUserId) {
        return null;
    }

    const existingVisit = await prisma.profileVisit.findUnique({
        where: {
            visitorId_visitedUserId: {
                visitorId,
                visitedUserId,
            },
        },
    });

    const now = new Date();

    // Ha már létezik megtekintés,
    // ellenőrizzük, hogy eltelt-e legalább 1 perc.
    if (existingVisit) {
        const elapsed =
            now.getTime() - existingVisit.visitedAt.getTime();

        // 1 percen belül nem mentünk új megtekintést.
        if (elapsed < VISIT_COOLDOWN_MS) {
            return existingVisit;
        }

        // Több mint 1 perc telt el,
        // ezért csak frissítjük az időpontot.
        return prisma.profileVisit.update({
            where: {
                id: existingVisit.id,
            },
            data: {
                visitedAt: now,
            },
        });
    }

    // Első megtekintés.
    return prisma.profileVisit.create({
        data: {
            visitorId,
            visitedUserId,
            visitedAt: now,
        },
    });
}