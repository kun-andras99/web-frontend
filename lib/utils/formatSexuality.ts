import { Sexuality } from "../../prisma/generated/prisma";

export function formatSexuality(
    sexuality: Sexuality | null | undefined,
): string | null {
    switch (sexuality) {
        case Sexuality.STRAIGHT:
            return "Heteroszexuális";

        case Sexuality.GAY:
            return "Meleg";

        case Sexuality.LESBIAN:
            return "Leszbikus";

        case Sexuality.BISEXUAL:
            return "Biszexuális";

        case Sexuality.PANSEXUAL:
            return "Pánszexuális";

        case Sexuality.ASEXUAL:
            return "Aszexuális";

        case Sexuality.DEMISEXUAL:
            return "Demiszexuális";

        case Sexuality.QUEER:
            return "Queer";

        case Sexuality.OMNISEXUAL:
            return "Omniszexuális";

        case Sexuality.QUESTIONING:
            return "Kérdező";

        case Sexuality.OTHER:
            return "Egyéb";

        case Sexuality.PREFER_NOT_TO_SAY:
            return "Nem szeretné megadni";

        default:
            return null;
    }
}
