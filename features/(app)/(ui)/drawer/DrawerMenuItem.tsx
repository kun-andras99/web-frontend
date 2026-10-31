import Link from "next/link";
import { ReactNode } from "react";

interface DrawerMenuItemProps {
    children: ReactNode;
    href: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function DrawerMenuItem({
    children,
    href,
    onClick,
    disabled,
}: DrawerMenuItemProps) {
    if (disabled) {
        return (
            <Link href={`#`} className="main-link disabled">
                {children}
            </Link>
        );
    }

    return (
        <Link href={href} onClick={onClick} className="main-link">
            {children}
        </Link>
    );
}
