"use client";

import { ProfileAppCitySelector } from "@/features/profile-create/components/ProfileAppCitySelector";
import { AnimatePresence, motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import type {
    AppCity,
    Gender,
    Sexuality,
} from "../../../prisma/generated/prisma";
import type { ProfileCreateForm } from "../types/profileCreate";
import { ProfileSexualitySelector } from "./ProfileSexualitySelector";

interface ProfileIdentityFormProps {
    form: ProfileCreateForm;
    setForm: Dispatch<SetStateAction<ProfileCreateForm>>;
    onBack: () => void;
    onSubmit: () => void;
    isPending: boolean;
}

const genderLabels: Record<Gender, string> = {
    MAN: "Férfi",
    WOMAN: "Nő",
    TRANS_MAN: "Trans Férfi",
    TRANS_WOMAN: "Trans Nő",
};

const genders: Gender[] = ["MAN", "WOMAN", "TRANS_MAN", "TRANS_WOMAN"];

const boxAnimation = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    },
};

export function ProfileIdentityForm({
    form,
    setForm,
    onBack,
    onSubmit,
    isPending,
}: ProfileIdentityFormProps) {
    const isGenderStep = !form.gender;
    const isSexualityStep = Boolean(form.gender) && !form.sexuality;
    const isAppCityStep = Boolean(form.gender && form.sexuality);

    const isValid =
        Boolean(form.gender) &&
        Boolean(form.sexuality) &&
        Boolean(form.appCity);

    function handleGenderChange(gender: Gender) {
        setForm((current) => ({
            ...current,
            gender,
            sexuality: null,
            appCity: null,
        }));
    }

    function handleSexualityChange(sexuality: Sexuality) {
        setForm((current) => ({
            ...current,
            sexuality,
            appCity: null,
        }));
    }

    function handleAppCityChange(appCity: AppCity) {
        setForm((current) => ({
            ...current,
            appCity,
        }));
    }

    function handleBackToGender() {
        setForm((current) => ({
            ...current,
            gender: null,
            sexuality: null,
            appCity: null,
        }));
    }

    function handleBackToSexuality() {
        setForm((current) => ({
            ...current,
            sexuality: null,
            appCity: null,
        }));
    }

    return (
        <div className="profile-create-form">
            <div className="profile-create-identity">
                <AnimatePresence mode="wait" initial={false}>
                    {isGenderStep && (
                        <motion.div
                            key="gender"
                            className="profile-create-identity__box"
                            initial={boxAnimation.initial}
                            animate={boxAnimation.animate}
                            exit={boxAnimation.exit}
                            transition={{
                                duration: 0.125,
                                ease: "easeOut",
                            }}>
                            <div className="profile-create-field">
                                <h2>Mi a nemed?</h2>

                                <div className="profile-gender-options">
                                    {genders.map((gender) => {
                                        const selected = form.gender === gender;

                                        return (
                                            <button
                                                key={gender}
                                                type="button"
                                                className={
                                                    selected
                                                        ? "is-selected"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    handleGenderChange(gender)
                                                }>
                                                {genderLabels[gender]}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {isSexualityStep && form.gender && (
                        <motion.div
                            key="sexuality"
                            className="profile-create-identity__box"
                            initial={boxAnimation.initial}
                            animate={boxAnimation.animate}
                            exit={boxAnimation.exit}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}>
                            <ProfileSexualitySelector
                                gender={form.gender}
                                value={form.sexuality}
                                onChange={handleSexualityChange}
                            />

                            <button
                                type="button"
                                className="app-back-button"
                                onClick={handleBackToGender}
                                disabled={isPending}>
                                ← Vissza
                            </button>
                        </motion.div>
                    )}

                    {isAppCityStep && form.gender && form.sexuality && (
                        <motion.div
                            key="app-city"
                            className="profile-create-identity__box"
                            initial={boxAnimation.initial}
                            animate={boxAnimation.animate}
                            exit={boxAnimation.exit}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}>
                            <ProfileAppCitySelector
                                gender={form.gender}
                                sexuality={form.sexuality}
                                value={form.appCity}
                                onChange={handleAppCityChange}
                            />

                            <button
                                type="button"
                                className="app-back-button"
                                onClick={handleBackToSexuality}
                                disabled={isPending}>
                                ← Vissza
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isAppCityStep && (
                    <motion.div
                        className="profile-create-form__actions"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                            duration: 0.25,
                        }}>
                        <button
                            type="button"
                            onClick={onBack}
                            disabled={isPending}
                            className="app-back-button">
                            ← Vissza
                        </button>

                        <button
                            type="button"
                            disabled={!isValid || isPending}
                            onClick={onSubmit}
                            className="app-button">
                            {isPending
                                ? "Profil létrehozása..."
                                : "Profil létrehozása"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
