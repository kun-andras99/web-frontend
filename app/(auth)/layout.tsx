import AuthTabs from "@/features/(app)/(ui)/tabs/AuthTabs";
import type { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <main className="auth">
            <div className="auth__container">
                <AuthTabs />

                <div className="auth__content">{children}</div>
            </div>
        </main>
    );
}
