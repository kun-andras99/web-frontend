"use client";

import { useAuth } from "@/features/auth/components/auth-provider";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import UserProfileBox from "@/features/navigations/body-sidebar/components/UserProfileBox";
import Link from "next/link";

export default function SidebarMainMenus() {
    const user = useAuth();

    return (
        <section className="sidebar-menu">
            {user ? (
                <>
                    <UserProfileBox />
                    <div className="menu-box">
                        <h2>Love</h2>
                        <nav aria-label="Sidebar navigation">
                            <ul>
                                <li>
                                    <Link href={AUTH_ROUTES.home}>
                                        {" "}
                                        <span>»</span>Explore users
                                    </Link>
                                </li>
                                <li>
                                    <Link href={AUTH_ROUTES.about}>
                                        {" "}
                                        <span>»</span>Eye Candy
                                    </Link>
                                </li>
                                <li>
                                    <Link href={AUTH_ROUTES.contactUs}>
                                        {" "}
                                        <span>»</span>Find a match
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu-box">
                        <h2>Cruise</h2>
                        <nav aria-label="Sidebar navigation">
                            <ul>
                                <li>
                                    <Link href={AUTH_ROUTES.home}>
                                        {" "}
                                        <span>»</span>Visitors
                                    </Link>
                                </li>
                                <li>
                                    <Link href={AUTH_ROUTES.about}>
                                        {" "}
                                        <span>»</span>Visited
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="menu-box">
                        <h2>Community</h2>
                        <nav aria-label="Sidebar navigation">
                            <ul>
                                <li>
                                    <Link href={AUTH_ROUTES.home}>
                                        {" "}
                                        <span>»</span>Groups
                                    </Link>
                                </li>
                                <li>
                                    <Link href={AUTH_ROUTES.about}>
                                        {" "}
                                        <span>»</span>Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href={AUTH_ROUTES.about}>
                                        {" "}
                                        <span>»</span>City
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>
            ) : (
                <div className="menu-box">
                    <h2>Main menu</h2>
                    <nav aria-label="Sidebar navigation">
                        <ul>
                            <li>
                                <Link href={AUTH_ROUTES.home}>
                                    {" "}
                                    <span>»</span>Home
                                </Link>
                            </li>
                            <li>
                                <Link href={AUTH_ROUTES.about}>
                                    {" "}
                                    <span>»</span>About
                                </Link>
                            </li>
                            <li>
                                <Link href={AUTH_ROUTES.contactUs}>
                                    {" "}
                                    <span>»</span>Contact us
                                </Link>
                            </li>
                            <li>
                                <Link href={AUTH_ROUTES.ourTeam}>
                                    {" "}
                                    <span>»</span>Our team
                                </Link>
                            </li>
                            <li>
                                <Link href={AUTH_ROUTES.safetyWarning}>
                                    {" "}
                                    <span>»</span>Safety warning
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </section>
    );
}
