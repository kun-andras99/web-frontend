"use client";

import AppBottomBar from "@/features/navigations/app-bottom-bar";
import { type ReactNode } from "react";
export default function BottomLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main>{children}</main>
            <AppBottomBar />
        </>
    );
}
