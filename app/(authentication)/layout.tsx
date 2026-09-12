import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthenticationLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <section className="auth-views">
            <Link href={`/`}>Vissza a kezdőlapra</Link>
            {children}
        </section>
    );
}
