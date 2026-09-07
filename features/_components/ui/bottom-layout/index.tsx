"use client";

import { SessionUser } from "@/features/auth/types/auth-index";
import AppBottomBar from "@/features/navigations/app-bottom-bar";
import { type ReactNode } from "react";
export default function BottomLayout({
    children,
    user,
}: {
    children: ReactNode;
    user: SessionUser | null;
}) {
    return (
        <>
            <main>{children}</main>
            <AppBottomBar user={user} />
        </>
    );
}
