"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useProfileWizardStore } from "../store/useProfileWizardStore";
import { StepBasicInfo } from "./StepBasicInfo";
import { StepGenderSexuality } from "./StepGenderSexuality";
import { WizardProgress } from "./WizardProgress";

const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 32 : -32, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -32 : 32, opacity: 0 }),
};

export function ProfileWizard() {
    const step = useProfileWizardStore((s) => s.step);

    return (
        <div className="space-y-6">
            <WizardProgress step={step} total={2} />

            <AnimatePresence mode="wait" custom={step}>
                <motion.div
                    key={step}
                    custom={step}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: "easeOut" }}>
                    {step === 1 ? <StepBasicInfo /> : <StepGenderSexuality />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
