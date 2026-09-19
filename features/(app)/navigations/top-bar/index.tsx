"use client";

import {
    appMenus,
    publicMenus,
} from "@/features/(app)/navigations/navigation.config";
import SideDrawer from "@/features/_components/drawer/SideDrawer";
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
                                ? appMenus.map((route) => {
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
                                                  {isActive ? (
                                                      <>{route.activeIcon}</>
                                                  ) : (
                                                      route.icon
                                                  )}
                                              </Link>
                                          </div>
                                      );
                                  })
                                : publicMenus.map((route) => {
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
                                                  {isActive ? (
                                                      <>{route.activeIcon}</>
                                                  ) : (
                                                      route.icon
                                                  )}
                                              </Link>
                                          </div>
                                      );
                                  })}
                        </div>
                    </section>
                </section>
                {user ? (
                    <>
                        <section className="user-options">
                            <SideDrawer />
                        </section>
                    </>
                ) : (
                    <section className="nothing"></section>
                )}
            </section>
        </header>
    );
}
