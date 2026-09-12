"use client";

import SideDrawer from "@/features/_components/drawer/SideDrawer";
import {
    APP_BOTTOM_BAR_ROUTES,
    QUEST_TOP_MENU_ROUTES,
} from "@/features/navigations/navigation.config";
import { SessionUserProps } from "@/lib/utils/props";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar({ user }: SessionUserProps) {
    const pathname = usePathname();

    return (
        <header className="app-header">
            <section className="header-containter">
                <h2 className="logo-text">AppName.</h2>
                <section className="flex flex-1 items-center justify-center">
                    <section className={`main-top-navigation`}>
                        <div className="content">
                            {user
                                ? APP_BOTTOM_BAR_ROUTES.map((route) => {
                                      const isActive =
                                          pathname === route.url ||
                                          pathname.startsWith(`${route.url}/`);

                                      return (
                                          <div
                                              className={`icon ${isActive ? "active" : ""}`}
                                              key={route.id}>
                                              <Link
                                                  href={route.url}
                                                  className={`link`}>
                                                  {isActive
                                                      ? route.activeIcon
                                                      : route.icon}
                                                  {/* <span className="text-xs font-medium">
                            {route.title}
                            </span> */}
                                              </Link>
                                          </div>
                                      );
                                  })
                                : QUEST_TOP_MENU_ROUTES.map((route) => {
                                      const isActive =
                                          pathname === route.url ||
                                          pathname.startsWith(`${route.url}/`);

                                      return (
                                          <div
                                              className={`icon ${isActive ? "active" : ""}`}
                                              key={route.id}>
                                              <Link
                                                  href={route.url}
                                                  className={`link`}>
                                                  {isActive
                                                      ? route.activeIcon
                                                      : route.icon}
                                                  {/* <span className="text-xs font-medium">
                            {route.title}
                            </span> */}
                                              </Link>
                                          </div>
                                      );
                                  })}
                        </div>
                    </section>
                </section>
                {user ? (
                    <section className="user-options">
                        <SideDrawer />
                    </section>
                ) : (
                    <section className="nothing"></section>
                )}
            </section>
        </header>
    );
}
