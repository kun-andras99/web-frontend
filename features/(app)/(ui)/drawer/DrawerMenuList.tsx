import { ReactNode } from "react";

interface DrawerMenuListProps {
    children: ReactNode;
}

export default function DrawerMenuList({ children }: DrawerMenuListProps) {
    return <div className="drawer-menu-list">{children}</div>;
}
