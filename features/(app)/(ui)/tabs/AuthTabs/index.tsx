"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AUTH_TABS = [
    {
        label: "Bejelentkezés",
        href: "/sign-in",
    },
    {
        label: "Regisztráció",
        href: "/sign-up",
    },
] as const;

export default function AuthTabs() {
    const pathname = usePathname();

    return (
        <nav className="auth-tabs" aria-label="Hitelesítés">
            {AUTH_TABS.map((tab) => {
                const isActive = pathname === tab.href;

                return (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        className={`auth-tabs__tab ${isActive ? "active" : ""}`}
                        aria-current={isActive ? "page" : undefined}>
                        {tab.label}
                    </Link>
                );
            })}
        </nav>
    );
}
