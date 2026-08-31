"use client";
import { appBottomBarRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppBottomBar() {
    const pathname = usePathname();
    return (
        <div className="bottom-bar">
            {appBottomBarRoutes.map((route) => {
                const isActive =
                    pathname === route.url ||
                    pathname.startsWith(`${route.url}/`);

                return (
                    <Link
                        key={route.id}
                        href={route.url}
                        className={` flex h-full flex-1 flex-col items-center justify-center gap-1 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"} `}>
                        <div
                            className={` flex h-6 w-6 items-center justify-center `}>
                            {isActive ? route.activeIcon : route.icon}
                        </div>
                        {/* <span className="text-xs font-medium">
                            {route.title}
                        </span> */}
                    </Link>
                );
            })}
            {/* <div className="bottom-avatar-container">
                <Image
                    className="bottom-avatar-pic"
                    src="/assets/images/user-blank-1.png"
                    alt="Profile"
                    width={34}
                    height={34}
                />
            </div> */}
        </div>
    );
}
