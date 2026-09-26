"use client";

import { Gender, Sexuality } from "../../../prisma/generated/prisma";
import UserAvatar from "@/features/(app)/(ui)/UserAvatar";
import { motion } from 'framer-motion';


interface ProfileCreateCardProps {
    nickname: string;
    birth: string;
    avatarPreview: string | null;
    gender: Gender | null;
    sexuality: Sexuality | null;
}

const genderLabels: Record<Gender, string> = {
    MAN: "Férfi",
    WOMAN: "Nő",
};
const sexualityLabels: Record<Sexuality, string> = {
    STRAIGHT: "Heteroszexuális",
    GAY: "Meleg",
    LESBIAN: "Leszbikus",
    BISEXUAL: "Biszexuális",
    PANSEXUAL: "Pánszexuális",
    ASEXUAL: "Aszexuális",
    QUEER: "Különös",
    OMNISEXUAL: "Omniszexuális",
    DEMISEXUAL: "Demiszexuális",
    QUESTIONING: "Nem vagyok biztos",
    OTHER: "Egyéb",
    PREFER_NOT_TO_SAY: "Nem árulom el",
};

function calculateAge(birth: string) {
    if (!birth) {
        return null;
    }

    const birthDate = new Date(birth);

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export function ProfileCreateCard({
    nickname,
    birth,
    avatarPreview,
    gender,
    sexuality,
}: ProfileCreateCardProps) {
    const age = calculateAge(birth);

    return (
        <motion.div layout className="profile-create-card">
            <motion.div layout className="profile-create-card__avatar">
                <UserAvatar
                    url={avatarPreview ?? "/assets/images/user-blank-1.png"}
                    size={110}
                    alt={nickname || "Profilkép"}
                />
            </motion.div>

            <motion.div layout className="profile-create-card__content">
                <motion.h2 layout key={nickname}>
                    {nickname || "Megjelenített név"}
                </motion.h2>

                <motion.div layout className="profile-create-card__details">
                    <span>{age !== null ? `${age} éves` : "Életkor"}</span>

                    <span>{gender ? genderLabels[gender] : "Nem"}</span>

                    <span>
                        {sexuality ? sexualityLabels[sexuality] : "Szexualitás"}
                    </span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
