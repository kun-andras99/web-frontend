"use client";

import { motion } from "framer-motion";

export function WizardProgress({
    step,
    total,
}: {
    step: number;
    total: number;
}) {
    return (
        <div className="flex gap-2">
            {Array.from({ length: total }, (_, i) => i + 1).map((i) => (
                <div
                    key={i}
                    className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                    <motion.div
                        className="h-full rounded-full bg-neutral-900"
                        initial={false}
                        animate={{ width: i <= step ? "100%" : "0%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </div>
            ))}
        </div>
    );
}
