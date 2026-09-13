import { ReactNode } from "react";

export interface BottomLayoutProps {
    children: ReactNode;
}

export default async function CommunityLayout({ children }: BottomLayoutProps) {
    return <div>{children}</div>;
}
