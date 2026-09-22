"use client";

import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/features/_components/ui/drawer";
import { useDrawer } from "@/features/_hooks/useDrawer";
import { AUTH_ROUTES, GUEST_ROUTES } from "@/features/auth/lib/constants";
import LoveWallFall from "@/features/love-wall";
import Link from "next/link";

export default function BaseDrawer() {
    const { open, setOpen } = useDrawer();

    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <Drawer swipeDirection="left" open={open} onOpenChange={setOpen}>
            <DrawerTrigger className={"main-drawer-button"} style={{}}>
                {/* <div className="top"> */}
                <div className="drawer-button">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* </div> */}
            </DrawerTrigger>

            <DrawerContent className="my-drawer right-drawer">
                <div className="quest-drawer">
                    <Link href={GUEST_ROUTES.loveWall} onClick={closeDrawer}>
                        <LoveWallFall />
                    </Link>
                    <div className="quest-drawer__content">
                        <h2>Main</h2>
                        <Link href={GUEST_ROUTES.home} onClick={closeDrawer}>
                            Home
                        </Link>
                        <Link href={GUEST_ROUTES.about} onClick={closeDrawer}>
                            About
                        </Link>
                        {/* <Link
                            href={GUEST_ROUTES.contactUs}
                            onClick={closeDrawer}>
                            Contact
                        </Link> */}
                    </div>
                    <div className="quest-drawer__content">
                        <h2>Authentication</h2>
                        <Link href={AUTH_ROUTES.signIn} onClick={closeDrawer}>
                            Login
                        </Link>
                        <Link href={AUTH_ROUTES.signUp} onClick={closeDrawer}>
                            Registration
                        </Link>
                        <Link
                            href={GUEST_ROUTES.forgotPassword}
                            onClick={closeDrawer}>
                            Forgot password
                        </Link>
                    </div>
                    {/* <div>
                        <h2>Our team</h2>
                        <Link href={GUEST_ROUTES.ourTeam} onClick={closeDrawer}>
                            Team
                        </Link>
                        <Link href={GUEST_ROUTES.jobs} onClick={closeDrawer}>
                            Jobs
                        </Link>
                    </div> */}
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
                        <Link href={GUEST_ROUTES.privacy} onClick={closeDrawer}>
                            Privacy
                        </Link>
                        <Link href={GUEST_ROUTES.terms} onClick={closeDrawer}>
                            Terms
                        </Link>
                        <Link href={GUEST_ROUTES.cookie} onClick={closeDrawer}>
                            Cookie
                        </Link>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
