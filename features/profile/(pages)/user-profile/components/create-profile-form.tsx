"use client";

import { apiFetch } from "@/lib/http/auth-fetch";

import { redirect } from "next/navigation";
import { useState } from "react";

const lookingForOptions = [
    ["CHAT", "Chat"],
    ["FRIENDSHIP", "Barátság"],
    ["CASUAL_DATING", "Laza randi"],
    ["SERIOUS_RELATIONSHIP", "Komoly kapcsolat"],
    ["HOOKUP", "Alkalmi kapcsolat"],
    ["NETWORKING", "Networking"],
    ["NOTHING_SPECIFIC", "Még nem tudom"],
] as const;

const genderOptions = [
    ["MAN", "Férfi"],
    ["WOMAN", "Nő"],
    ["TRANS_MAN", "Transz férfi"],
    ["TRANS_WOMAN", "Transz nő"],
] as const;

const sexualityOptions = [
    ["STRAIGHT", "Heteroszexuális"],
    ["BISEXUAL", "Biszerexuális"],
    ["GAY", "Meleg"],
    ["LESBIAN", "Leszbikus"],
    ["PANSEXUAL", "Pánszexuális"],
    ["ASEXUAL", "Aszexuális"],
    ["OTHER", "Egyéb"],
] as const;

const relationshipOptions = [
    ["SINGLE", "Egyedülálló"],
    ["IN_RELATION", "Kapcsolatban"],
    ["ENGAGED", "Jegyes"],
    ["MARRIED", "Házas"],
    ["SEPARATED", "Különélő"],
    ["DIVORCED", "Elvált"],
    ["WIDOWED", "Özvegy"],
    ["COMPLICATED", "Bonyolult"],
    ["OPEN", "Nyitott kapcsolat"],
] as const;

export default function CreateProfileForm() {
    const [pending, setPending] = useState(false);

    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setPending(true);
        setError(null);

        try {
            const form = event.currentTarget;

            const formData = new FormData(form);

            const response = await apiFetch("/api/create-profile", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.error ?? "Hiba történt a profil mentésekor.");

                return;
            }

            if (result.success) {
                redirect("/love");
            }
        } catch (error) {
            console.error(error);

            setError("Nem sikerült kapcsolódni a szerverhez.");
        } finally {
            setPending(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <h1 className="text-2xl font-semibold">
                    Készítsd el a profilod
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Töltsd ki az alapvető adataidat.
                </p>
            </div>

            {error && (
                <div className="rounded-lg border p-3 text-sm">{error}</div>
            )}

            {/* NICKNAME */}

            <div className="space-y-2">
                <label htmlFor="nickname">Becenév</label>

                <input
                    id="nickname"
                    name="nickname"
                    type="text"
                    required
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* BIRTH */}

            <div className="space-y-2">
                <label htmlFor="birth">Születési dátum</label>

                <input
                    id="birth"
                    name="birth"
                    type="date"
                    required
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* GENDER */}

            <fieldset className="space-y-3">
                <legend>Nem</legend>

                {genderOptions.map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="gender"
                            value={value}
                            required
                        />

                        {label}
                    </label>
                ))}
            </fieldset>

            {/* SEXUALITY */}

            <fieldset className="space-y-3">
                <legend>Szexuális orientáció</legend>

                {sexualityOptions.map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="sexuality"
                            value={value}
                            required
                        />

                        {label}
                    </label>
                ))}
            </fieldset>

            <fieldset className="space-y-3">
                <legend>Kapcsolati státusz</legend>

                {relationshipOptions.map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="relationshipStatus"
                            value={value}
                            required
                        />

                        {label}
                    </label>
                ))}
            </fieldset>

            {/* LOOKING FOR */}

            <fieldset className="space-y-3">
                <legend>Mit keresel?</legend>

                {lookingForOptions.map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="lookingFor"
                            value={value}
                        />

                        {label}
                    </label>
                ))}
            </fieldset>

            {/* GENDER INTEREST */}

            <fieldset className="space-y-3">
                <legend>Milyen nemű emberek érdekelnek?</legend>

                {genderOptions.map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="genderInterest"
                            value={value}
                        />

                        {label}
                    </label>
                ))}
            </fieldset>

            {/* SEXUALITY INTEREST */}

            <fieldset className="space-y-3">
                <legend>Milyen orientációjú emberek érdekelnek?</legend>

                {sexualityOptions.map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="sexualityInterest"
                            value={value}
                        />

                        {label}
                    </label>
                ))}
            </fieldset>

            {/* PRONOUNS */}

            <div className="space-y-2">
                <label htmlFor="pronouns">Névmások</label>

                <input
                    id="pronouns"
                    name="pronouns"
                    type="text"
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* HEIGHT */}

            <div className="space-y-2">
                <label htmlFor="heightCm">Magasság (cm)</label>

                <input
                    id="heightCm"
                    name="heightCm"
                    type="number"
                    min={100}
                    max={250}
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* WEIGHT */}

            <div className="space-y-2">
                <label htmlFor="weightKg">Testsúly (kg)</label>

                <input
                    id="weightKg"
                    name="weightKg"
                    type="number"
                    min={30}
                    max={300}
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* CITY */}

            <div className="space-y-2">
                <label htmlFor="city">Város</label>

                <input
                    id="city"
                    name="city"
                    type="text"
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* COUNTRY */}

            <div className="space-y-2">
                <label htmlFor="country">Ország</label>

                <input
                    id="country"
                    name="country"
                    type="text"
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* DESCRIPTION */}

            <div className="space-y-2">
                <label htmlFor="description">Rövid bemutatkozás</label>

                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            {/* BIO */}

            <div className="space-y-2">
                <label htmlFor="bio">Bio</label>

                <textarea
                    id="bio"
                    name="bio"
                    rows={6}
                    className="w-full rounded-lg border px-4 py-3"
                />
            </div>

            <button
                type="submit"
                disabled={pending}
                className="w-full rounded-lg px-4 py-3">
                {pending ? "Profil mentése..." : "Profil létrehozása"}
            </button>
        </form>
    );
}
