"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { ProfileBasicsForm } from "../components/ProfileBasicsForm";
import { ProfileCreateCard } from "../components/ProfileCreateCard";
import { ProfileIdentityForm } from "../components/ProfileIdentityForm";

import { useCreateProfile } from "../hooks/useCreateProfile";

import type {
    ProfileCreateForm,
    ProfileCreateStep,
} from "../types/profileCreate";



export function ProfileCreateScreen() {
    const router = useRouter();

    const createProfile = useCreateProfile();

    const [step, setStep] = useState<ProfileCreateStep>("basics");

    const [form, setForm] = useState<ProfileCreateForm>({
        nickname: "",
        birth: "",
        avatar: null,
        avatarPreview: null,
        gender: null,
        sexuality: null,
    });

    useEffect(() => {
        return () => {
            if (form.avatarPreview) {
                URL.revokeObjectURL(form.avatarPreview);
            }
        };
    }, [form.avatarPreview]);

    async function handleSubmit() {
        if (!form.gender || !form.sexuality) {
            return;
        }

        try {
            await createProfile.mutateAsync({
                nickname: form.nickname,
                birth: form.birth,
                gender: form.gender,
                sexuality: form.sexuality,
                avatar: form.avatar,
            });

            router.replace("/love");
            router.refresh();
        } catch {
            // A mutation errorét a UI
            // később toasttal jelenítjük meg.
        }
    }


    function handleAvatarChange(file: File) {
        setForm((current) => {
            if (current.avatarPreview) {
                URL.revokeObjectURL(current.avatarPreview);
            }

            return {
                ...current,
                avatar: file,
                avatarPreview: URL.createObjectURL(file),
            };
        });
    }

    return (
        <main className="profile-create">
            <div className="profile-create__container">
                <motion.div layout className="profile-create__preview">
                    <ProfileCreateCard
                        nickname={form.nickname}
                        birth={form.birth}
                        avatarPreview={form.avatarPreview}
                        gender={form.gender}
                        sexuality={form.sexuality}
                    />
                </motion.div>

                <div className="profile-create__form">
                    <AnimatePresence mode="wait">
                        {step === "basics" && (
                            <motion.div
                                key="basics"
                                initial={{
                                    opacity: 0,
                                    x: 35,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -35,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}>
                                <ProfileBasicsForm
                                    form={form}
                                    setForm={setForm}
                                    onNext={() => setStep("identity")}
                                />
                            </motion.div>
                        )}

                        {step === "identity" && (
                            <motion.div
                                key="identity"
                                initial={{
                                    opacity: 0,
                                    x: 35,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -35,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}>
                                <ProfileIdentityForm
                                    form={form}
                                    setForm={setForm}
                                    onBack={() => setStep("basics")}
                                    onSubmit={handleSubmit}
                                    isPending={createProfile.isPending}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {createProfile.isError && (
                        <p className="profile-create__error">
                            {createProfile.error?.message}
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}
