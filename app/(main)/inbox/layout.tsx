import { ReactNode } from "react";

export default async function InboxLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <div>{children}</div>;
}
