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
                        <Link href={`/`}>Home</Link>
                        <Link href={`/`}>About</Link>
                        <Link href={`/`}>Contact</Link>
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
                        <Link href={`/team`}>Team</Link>
                        <Link href={`/jobs`}>Jobs</Link>
                    </div>
                    <div>
                        <h2>Safety warning</h2>
                        <Link href={`/dating-safely`}>Dating safely</Link>
                        <Link href={`/profile-locations`}>
                            Profile locations
                        </Link>
                        <Link href={`/safer-sex`}>Safer sex</Link>
                    </div>
                    <div>
                        <h2>Briefing</h2>
                        <Link href={`/dating-safely`}>Privacy</Link>
                        <Link href={`/profile-locations`}>Terms</Link>
                        <Link href={`/safer-sex`}>Cookie</Link>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
