import { ReactNode } from "react";

export default async function ExtraLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}
