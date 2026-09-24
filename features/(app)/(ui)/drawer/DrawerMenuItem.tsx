import Link from "next/link";
import { ReactNode } from "react";

interface DrawerMenuItemProps {
    children: ReactNode;
    href: string;
    onClick?: () => void;
}

export default function DrawerMenuItem({
    children,
    href,
    onClick,
}: DrawerMenuItemProps) {
    return (
        <Link href={href} onClick={onClick}>
            {children}
        </Link>
    );
}
