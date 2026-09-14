import { ReactNode } from "react";

export default async function LoveLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <main>{children}</main>;
}
