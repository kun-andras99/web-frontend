"use client";

import { basicInfoSchema } from "@/lib/_lib/validations/profile";
import { useForm } from "react-hook-form";
import { useProfileWizardStore } from "../store/useProfileWizardStore";
import { AvatarUploader } from "./AvatarUploader";
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = basicInfoSchema.omit({ avatarUrl: true });
type FormValues = { nickname: string; birth: string };

export function StepBasicInfo() {
    const nickname = useProfileWizardStore((s) => s.nickname);
    const birth = useProfileWizardStore((s) => s.birth);
    const avatarUploadedUrl = useProfileWizardStore((s) => s.avatarUploadedUrl);
    const setBasicInfo = useProfileWizardStore((s) => s.setBasicInfo);
    const goToStep = useProfileWizardStore((s) => s.goToStep);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { nickname, birth },
    });

    function onSubmit(values: FormValues) {
        setBasicInfo(values);
        goToStep(2);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">Alapadatok</h2>

            <AvatarUploader />

            <div>
                <label
                    htmlFor="nickname"
                    className="mb-1 block text-sm font-medium">
                    Megjelenített név
                </label>
                <input
                    id="nickname"
                    {...register("nickname")}
                    maxLength={8}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900"
                    placeholder="pl. Anna"
                />
                {errors.nickname && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.nickname.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="birth"
                    className="mb-1 block text-sm font-medium">
                    Születési dátum
                </label>
                <input
                    id="birth"
                    type="date"
                    {...register("birth")}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900"
                />
                {errors.birth && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.birth.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={!avatarUploadedUrl}
                title={
                    !avatarUploadedUrl
                        ? "Előbb tölts fel egy profilképet"
                        : undefined
                }
                className="w-full rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white transition disabled:opacity-40">
                Tovább
            </button>
        </form>
    );
}
