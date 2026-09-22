"use client";

import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/features/_components/ui/drawer";
import { useDrawer } from "@/features/_hooks/useDrawer";
import { AUTH_ROUTES, GUEST_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export default function BaseDrawer() {
    const { open, setOpen } = useDrawer();

    return (
        <Drawer swipeDirection="left" open={open} onOpenChange={setOpen}>
            <DrawerTrigger className={"top"} style={{}}>
                {/* <div className="top"> */}
                <div className="drawer-button">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* </div> */}
            </DrawerTrigger>

            <DrawerContent className="my-drawer right-drawer">
                <div className="quest-drawer-content">
                    <div>
                        <Link href={GUEST_ROUTES.home}>Home</Link>
                        <Link href={GUEST_ROUTES.about}>About</Link>
                        <Link href={GUEST_ROUTES.contactUs}>Contact</Link>
                    </div>
                    <div>
                        <h2>Authentication</h2>
                        <Link href={AUTH_ROUTES.signIn}>Login</Link>
                        <Link href={AUTH_ROUTES.signUp}>Registration</Link>
                        <Link href={GUEST_ROUTES.forgotPassword}>
                            Forgot password
                        </Link>
                        <Link href={GUEST_ROUTES.resetPassword}>
                            Reset password
                        </Link>
                    </div>
                    <div>
                        <h2>Our team</h2>
                        <Link href={GUEST_ROUTES.ourTeam}>Team</Link>
                        <Link href={GUEST_ROUTES.jobs}>Jobs</Link>
                    </div>
                    <div>
                        <h2>Safety warning</h2>
                        <Link href={GUEST_ROUTES.datingSafely}>
                            Dating safely
                        </Link>
                        <Link href={GUEST_ROUTES.profileLocations}>
                            Profile locations
                        </Link>
                        <Link href={GUEST_ROUTES.saferSex}>Safer sex</Link>
                    </div>
                    <div>
                        <h2>Briefing</h2>
                        <Link href={GUEST_ROUTES.privacy}>Privacy</Link>
                        <Link href={GUEST_ROUTES.terms}>Terms</Link>
                        <Link href={GUEST_ROUTES.cookie}>Cookie</Link>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
