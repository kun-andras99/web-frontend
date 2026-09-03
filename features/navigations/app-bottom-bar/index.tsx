"use client";
import { appBottomBarRoutes } from "@/features/navigations/app-bottom-bar/constants/app-bottom-bar.constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppBottomBar() {
    const pathname = usePathname();
    return (
        <div className="bottom-bar">
            <div className="content">
                {appBottomBarRoutes.map((route) => {
                    const isActive =
                        pathname === route.url ||
                        pathname.startsWith(`${route.url}/`);

                    return (
                        <>
                            <div className={`icon ${isActive ? "active" : ""}`}>
                                <Link
                                    key={route.id}
                                    href={route.url}
                                    className={`link`}>
                                    {isActive ? route.activeIcon : route.icon}
                                    {/* <span className="text-xs font-medium">
                            {route.title}
                            </span> */}
                                </Link>
                            </div>
                        </>
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
        </div>
    );
}
