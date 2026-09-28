import { Gender } from "../../prisma/generated/prisma";

export function formatGender(gender: string | null | undefined) {
    switch (gender) {
        case Gender.MAN:
            return "Férfi";

        case Gender.WOMAN:
            return "Nő";

        case Gender.TRANS_MAN:
            return "Trans férfi";

        case Gender.TRANS_WOMAN:
            return "Trans nő";

        default:
            return null;
    }
}
