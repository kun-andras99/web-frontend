"use client";

import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/features/_components/ui/drawer";
import { useDrawer } from "@/features/_hooks/useDrawer";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export default function BaseDrawer() {
    const { open, setOpen } = useDrawer();

    return (
        <Drawer swipeDirection="right" open={open} onOpenChange={setOpen}>
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
                        <Link href={AUTH_ROUTES.home}>Home</Link>
                        <Link href={AUTH_ROUTES.about}>About</Link>
                        <Link href={AUTH_ROUTES.contactUs}>Contact</Link>
                    </div>
                    <div>
                        <h2>Authentication</h2>
                        <Link href={AUTH_ROUTES.signIn}>Login</Link>
                        <Link href={AUTH_ROUTES.signUp}>Registration</Link>
                        <Link href={AUTH_ROUTES.forgotPassword}>
                            Forgot password
                        </Link>
                        <Link href={AUTH_ROUTES.resetPassword}>
                            Reset password
                        </Link>
                    </div>
                    <div>
                        <h2>Our team</h2>
                        <Link href={AUTH_ROUTES.ourTeam}>Team</Link>
                        <Link href={AUTH_ROUTES.jobs}>Jobs</Link>
                    </div>
                    <div>
                        <h2>Safety warning</h2>
                        <Link href={AUTH_ROUTES.datingSafely}>
                            Dating safely
                        </Link>
                        <Link href={AUTH_ROUTES.profileLocations}>
                            Profile locations
                        </Link>
                        <Link href={AUTH_ROUTES.saferSex}>Safer sex</Link>
                    </div>
                    <div>
                        <h2>Briefing</h2>
                        <Link href={AUTH_ROUTES.privacy}>Privacy</Link>
                        <Link href={AUTH_ROUTES.terms}>Terms</Link>
                        <Link href={AUTH_ROUTES.cookie}>Cookie</Link>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
