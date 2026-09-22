"use client";

import LogoutButton from "@/features/_components/button/logout-button";
import { AccordionVip } from "@/features/_components/drawer/AccordionVip";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/features/_components/ui/drawer";
import { useDrawer } from "@/features/_hooks/useDrawer";
import { useAuth } from "@/features/auth/components/auth-provider";
import { signOutAction } from "@/features/auth/lib/actions";
import {
    AUTH_ROUTES,
    AUTHED_ROUTES,
    GUEST_ROUTES,
} from "@/features/auth/lib/constants";
import LoveWallFall from "@/features/love-wall";
import Image from "next/image";
import Link from "next/link";

export default function BaseDrawer() {
    const { open, setOpen } = useDrawer();
    const user = useAuth();

    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <Drawer swipeDirection="left" open={open} onOpenChange={setOpen}>
            <DrawerTrigger className={"main-drawer-button"} style={{}}>
                {/* <div className="top"> */}
                {user ? (
                    <div>
                        <Image
                            src={`/assets/images/user-blank-5.png`}
                            width={42}
                            height={42}
                            alt=""
                        />
                        <div className="menu-circle">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ) : (
                    <div className="drawer-button">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}
                {/* </div> */}
            </DrawerTrigger>

            <DrawerContent className="my-drawer right-drawer">
                <div className="quest-drawer">
                    <Link href={GUEST_ROUTES.loveWall} onClick={closeDrawer}>
                        <LoveWallFall />
                    </Link>
                    {!user ? (
                        <>
                            <div className="quest-drawer__content">
                                <h2>Main</h2>
                                <Link
                                    href={GUEST_ROUTES.home}
                                    onClick={closeDrawer}>
                                    Home
                                </Link>

                                <Link
                                    href={GUEST_ROUTES.about}
                                    onClick={closeDrawer}>
                                    About
                                </Link>
                            </div>
                            <div className="quest-drawer__content">
                                <h2>Authentication</h2>
                                <Link
                                    href={AUTH_ROUTES.signIn}
                                    onClick={closeDrawer}>
                                    Login
                                </Link>
                                <Link
                                    href={AUTH_ROUTES.signUp}
                                    onClick={closeDrawer}>
                                    Registration
                                </Link>
                                <Link
                                    href={GUEST_ROUTES.forgotPassword}
                                    onClick={closeDrawer}>
                                    Forgot password
                                </Link>
                            </div>
                            <div className="quest-drawer__content">
                                <h2>Safety warning</h2>
                                <Link
                                    href={GUEST_ROUTES.datingSafely}
                                    onClick={closeDrawer}>
                                    Dating safely
                                </Link>
                                <Link
                                    href={GUEST_ROUTES.profileLocations}
                                    onClick={closeDrawer}>
                                    Profile locations
                                </Link>
                                <Link
                                    href={GUEST_ROUTES.saferSex}
                                    onClick={closeDrawer}>
                                    Safer sex
                                </Link>
                            </div>
                            <div className="quest-drawer__content">
                                <h2>Briefing</h2>
                                <Link
                                    href={GUEST_ROUTES.privacy}
                                    onClick={closeDrawer}>
                                    Privacy
                                </Link>
                                <Link
                                    href={GUEST_ROUTES.terms}
                                    onClick={closeDrawer}>
                                    Terms
                                </Link>
                                <Link
                                    href={GUEST_ROUTES.cookie}
                                    onClick={closeDrawer}>
                                    Cookie
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href={`/me`}>
                                <div className="drawer-user-card">
                                    <Image
                                        src={`/assets/images/user-blank-5.png`}
                                        width={53}
                                        height={53}
                                        alt=""
                                    />
                                    <div className="drawer-user-card__content">
                                        <h2>adminuser</h2>
                                        <p>Hungary, Budapest</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="beyond-wrapper">
                                <h2>
                                    Wander{" "}
                                    <span>Explore places. Meet people.</span>
                                </h2>
                                <div className="beyond-container">
                                    <Link
                                        href={AUTHED_ROUTES.travel}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Travel
                                        </div>
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.map}
                                        onClick={closeDrawer}>
                                        {" "}
                                        <div className="beyond-container__box">
                                            Map
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="beyond-wrapper">
                                <h2>
                                    Visitors <span>Last 10 viewers.</span>
                                </h2>
                                <div className="cruise-group-10">
                                    {Array.from({ length: 10 }).map(
                                        (_, index) => (
                                            <div
                                                className="cruise-group-10__container"
                                                key={index}>
                                                <Image
                                                    src={`/assets/images/user-blank-5.png`}
                                                    width={74}
                                                    height={74}
                                                    alt=""
                                                />
                                                <p>nickname</p>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                            <div className="beyond-wrapper">
                                <AccordionVip />
                            </div>

                            <div className="beyond-wrapper">
                                <h2>
                                    Visited <span>Last 10 views.</span>
                                </h2>
                                <div className="cruise-group-10">
                                    {Array.from({ length: 10 }).map(
                                        (_, index) => (
                                            <div
                                                className="cruise-group-10__container"
                                                key={index}>
                                                <Image
                                                    src={`/assets/images/user-blank-5.png`}
                                                    width={74}
                                                    height={74}
                                                    alt=""
                                                />
                                                <p>nickname</p>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                            <div className="beyond-wrapper">
                                <h2>
                                    Extra <span>more than dating...</span>
                                </h2>
                                <div className="beyond-container">
                                    <Link
                                        href={AUTHED_ROUTES.rightNow}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Right now
                                        </div>
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.hotOffers}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Hot offers
                                        </div>
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.auction}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Auction
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="beyond-wrapper">
                                <h2>
                                    Love{" "}
                                    <span>Find connection. Be yourself.</span>
                                </h2>
                                <div className="beyond-container">
                                    <Link
                                        href={AUTHED_ROUTES.nearby}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Nearby
                                        </div>
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.eyeCandy}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Eye Candy
                                        </div>
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.match}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Match
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="beyond-wrapper">
                                <h2>
                                    Community <span>Beyond the explore.</span>
                                </h2>
                                <div className="beyond-container">
                                    <Link
                                        href={AUTHED_ROUTES.groups}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Groups
                                        </div>
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.city}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            City
                                        </div>
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.blogs}
                                        onClick={closeDrawer}>
                                        <div className="beyond-container__box">
                                            Blogs
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="settings-wrapper">
                                <h2>
                                    Settings <span></span>
                                </h2>
                                <div className="settings-wrapper__content">
                                    <Link
                                        href={AUTHED_ROUTES.profileSettings}
                                        onClick={closeDrawer}>
                                        Profile
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.manageUsers}
                                        onClick={closeDrawer}>
                                        Manage users
                                    </Link>
                                    <Link
                                        href={AUTHED_ROUTES.customizeSettings}
                                        onClick={closeDrawer}>
                                        Customize
                                    </Link>
                                </div>
                            </div>
                            <LogoutButton
                                action={signOutAction}
                                className="logout-button"
                            />
                        </>
                    )}
                </div>
            </DrawerContent>
        </Drawer>
    );
}
