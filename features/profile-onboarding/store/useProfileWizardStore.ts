import type { Gender, SexualityValue } from "@/lib/validations/profile";
import { create } from "zustand";

interface ProfileWizardState {
    step: 1 | 2;

    nickname: string;
    birth: string;

    avatarFile: File | null;
    avatarPreviewUrl: string | null;
    avatarUploadedUrl: string | null;

    gender: Gender | null;
    sexuality: SexualityValue | null;

    setBasicInfo: (data: { nickname: string; birth: string }) => void;
    setAvatarPreview: (file: File, previewUrl: string) => void;
    setAvatarUploadedUrl: (url: string) => void;
    setGender: (gender: Gender) => void;
    setSexuality: (sexuality: SexualityValue) => void;
    goToStep: (step: 1 | 2) => void;
    reset: () => void;
}

const initialState = {
    step: 1 as const,
    nickname: "",
    birth: "",
    avatarFile: null,
    avatarPreviewUrl: null,
    avatarUploadedUrl: null,
    gender: null,
    sexuality: null,
};

export const useProfileWizardStore = create<ProfileWizardState>((set) => ({
    ...initialState,

    setBasicInfo: (data) => set(data),

    setAvatarPreview: (file, previewUrl) =>
        set({ avatarFile: file, avatarPreviewUrl: previewUrl }),

    setAvatarUploadedUrl: (url) => set({ avatarUploadedUrl: url }),

    // nemváltáskor a korábban választott szexualitást resetelni kell,
    // mert lehet, hogy az új nemhez már nem választható (pl. LESBIAN -> MAN)
    setGender: (gender) => set({ gender, sexuality: null }),

    setSexuality: (sexuality) => set({ sexuality }),

    goToStep: (step) => set({ step }),

    reset: () => set(initialState),
}));
