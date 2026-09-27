"use client";

import UserAvatar from "@/features/(app)/(ui)/UserAvatar";
import { motion } from "framer-motion";
import { AppCity, Gender, Sexuality } from "../../../prisma/generated/prisma";

interface ProfileCreateCardProps {
    nickname: string;
    birth: string;
    avatarPreview: string | null;
    gender: Gender | null;
    sexuality: Sexuality | null;
    appCity: AppCity | null;
}

const genderLabels: Record<Gender, string> = {
    MAN: "Férfi",
    WOMAN: "Nő",
    TRANS_MAN: "Trans Férfi",
    TRANS_WOMAN: "Trans Nő",
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

const appCityLabels: Record<AppCity, string> = {
    CENTRUM: "Centrum",
    STRAIGHT: "Heteroszexuális negyed",
    BISEXUAL: "Biszexuális negyed",
    GAY: "Meleg negyed",
    LESBIAN: "Leszbikus negyed",
    TRANS: "Trans negyed",
};

const heteroMaleCities: AppCity[] = ["CENTRUM", "STRAIGHT", "BISEXUAL"];
const heteroFemaleCities: AppCity[] = ["CENTRUM", "STRAIGHT", "BISEXUAL"];
const gayMaleCities: AppCity[] = ["CENTRUM", "BISEXUAL", "GAY"];
const gayFemaleCities: AppCity[] = ["CENTRUM", "BISEXUAL", "LESBIAN"];
const transMaleCities: AppCity[] = [
    "CENTRUM",
    "STRAIGHT",
    "BISEXUAL",
    "GAY",
    "TRANS",
];
const transFemaleCities: AppCity[] = [
    "CENTRUM",
    "STRAIGHT",
    "BISEXUAL",
    "LESBIAN",
    "TRANS",
];

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
    appCity,
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
                    {nickname || ""}
                    {age !== null ? `, ${age}` : ""}
                </motion.h2>

                <motion.div layout className="profile-create-card__details">
                    <span>{gender ? genderLabels[gender] : ""}</span>
                    <span>{sexuality ? sexualityLabels[sexuality] : ""}</span>
                    <span>{appCity ? appCityLabels[appCity] : ""}</span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
