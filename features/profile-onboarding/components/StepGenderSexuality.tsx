"use client";

import type { Gender } from "@/lib/_lib/validations/profile";
import { motion } from "framer-motion";
import { useState } from "react";
import { useCreateProfile } from "../hooks/useCreateProfile";
import { useProfileWizardStore } from "../store/useProfileWizardStore";
import { getSexualityOptions } from "../utils/sexuality-options";

const GENDER_OPTIONS: { value: Gender; label: string }[] = [
    { value: "MAN", label: "Férfi" },
    { value: "WOMAN", label: "Nő" },
];

export function StepGenderSexuality() {
    const nickname = useProfileWizardStore((s) => s.nickname);
    const birth = useProfileWizardStore((s) => s.birth);
    const avatarUploadedUrl = useProfileWizardStore((s) => s.avatarUploadedUrl);
    const gender = useProfileWizardStore((s) => s.gender);
    const sexuality = useProfileWizardStore((s) => s.sexuality);
    const setGender = useProfileWizardStore((s) => s.setGender);
    const setSexuality = useProfileWizardStore((s) => s.setSexuality);
    const goToStep = useProfileWizardStore((s) => s.goToStep);

    const [error, setError] = useState<string | null>(null);
    const createProfile = useCreateProfile();
    const sexualityOptions = getSexualityOptions(gender);

    function handleSubmit() {
        if (!avatarUploadedUrl) {
            setError(
                "Az avatar feltöltése még hiányzik, lépj vissza az első lépésre",
            );
            return;
        }
        if (!gender || !sexuality) {
            setError("Válaszd ki a nemed és a szexualitásod a folytatáshoz");
            return;
        }

        createProfile.mutate(
            {
                nickname,
                birth,
                avatarUrl: avatarUploadedUrl,
                gender,
                sexuality,
            },
            {
                onError: (err) =>
                    setError(
                        err instanceof Error ? err.message : "Hiba történt",
                    ),
            },
        );
    }

    return (
        <div className="space-y-5 rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">Nem és szexualitás</h2>

            <div>
                <p className="mb-2 text-sm font-medium">Neme</p>
                <div className="grid grid-cols-2 gap-3">
                    {GENDER_OPTIONS.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setGender(option.value)}
                            className={`rounded-lg border py-2.5 text-sm font-medium transition ${
                                gender === option.value
                                    ? "border-neutral-900 bg-neutral-900 text-white"
                                    : "border-neutral-300 text-neutral-700"
                            }`}>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {gender && (
                <motion.div
                    key={gender}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2">
                    <p className="text-sm font-medium">Szexualitás</p>
                    <div className="flex flex-wrap gap-2">
                        {sexualityOptions.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => setSexuality(option.value)}
                                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                                    sexuality === option.value
                                        ? "border-neutral-900 bg-neutral-900 text-white"
                                        : "border-neutral-300 text-neutral-700"
                                }`}>
                                {option.label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}

            {error && <p className="text-xs text-red-500">{error}</p>}

            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className="flex-1 rounded-lg border border-neutral-300 py-2.5 text-sm font-medium">
                    Vissza
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={createProfile.isPending}
                    className="flex-1 rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white transition disabled:opacity-40">
                    {createProfile.isPending
                        ? "Mentés..."
                        : "Profil létrehozása"}
                </button>
            </div>
        </div>
    );
}
