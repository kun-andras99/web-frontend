import { create } from "zustand";
import { persist } from "zustand/middleware";

const ScreenInitial = { display: "small-grid-view" };

type ScreenState = typeof ScreenInitial & {
    setDisplay: (by: string) => void;
    reset: () => void;
};

export const useScreenStore = create<ScreenState>()(
    persist(
        (set) => ({
            ...ScreenInitial,
            setDisplay: (display) => set(() => ({ display })),
            reset: () => set(ScreenInitial),
        }),
        { name: "screen-storage" },
    ),
);
