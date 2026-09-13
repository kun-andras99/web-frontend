import { ReactNode } from "react";

export default async function CruiseLayout({
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
