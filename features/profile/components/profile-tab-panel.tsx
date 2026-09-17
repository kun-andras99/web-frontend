import type { ReactNode } from "react";

interface ProfileTabPanelProps {
    children: ReactNode;
}

export default function ProfileTabPanel({ children }: ProfileTabPanelProps) {
    return (
        <section className="flex items-center h-full min-h-full">
            {/* <section className="flex items-center min-h-[calc(100dvh-93px)]"> */}
            <div className="w-full h-full">{children}</div>
        </section>
    );
}
