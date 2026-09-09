import type { ReactNode } from "react";

interface ProfileTabPanelProps {
    children: ReactNode;
}

export default function ProfileTabPanel({ children }: ProfileTabPanelProps) {
    return (
        <section className="px-4 py-6 min-h-[calc(100dvh-93px)]">
            <div className="mx-auto w-full max-w-2xl">{children}</div>
        </section>
    );
}
