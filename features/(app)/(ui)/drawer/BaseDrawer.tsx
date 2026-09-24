"use client";

import DrawerButton from "@/features/(app)/(ui)/drawer/DrawerButton";
import DrawerImageButton from "@/features/(app)/(ui)/drawer/DrawerImageButton";
import DrawerMenuHeader from "@/features/(app)/(ui)/drawer/DrawerMenuHeader";
import DrawerMenuItem from "@/features/(app)/(ui)/drawer/DrawerMenuItem";
import DrawerMenuList from "@/features/(app)/(ui)/drawer/DrawerMenuList";
import DrawerUserCard from "@/features/(app)/(ui)/drawer/DrawerUserCard";
import { useDrawer } from "@/features/(app)/(ui)/drawer/hooks/useDrawer";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/features/(app)/(ui)/shadcn/ui/drawer";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { useAuth } from "@/features/auth/components/provider/AuthProvider";
import { signOutAction } from "@/features/auth/lib/actions";
import {
    AUTH_ROUTES,
    AUTHED_ROUTES,
    GUEST_ROUTES,
} from "@/features/auth/lib/constants";
import LoveWallFall from "@/features/love-wall";
import { useUserHeaderDatas } from "@/features/user/hooks/useUserHeaderDatas";
import { AccordionVip } from "@/features/vip/components/AccordionVip";
import Link from "next/link";

export default function BaseDrawer() {
    const session = useAuth();
    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useUserHeaderDatas(session?.id);

    const { open, setOpen } = useDrawer();
    const closeDrawer = () => {
        setOpen(false);
    };

    if (isLoading) {
        return <div>Betöltés...</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <Drawer swipeDirection="left" open={open} onOpenChange={setOpen}>
            <DrawerTrigger className={"main-drawer-button"} style={{}}>
                {/* <div className="top"> */}
                {user ? (
                    <DrawerImageButton
                        avatarUrl={user.avatarUrl}
                        nickname={user.nickname}
                    />
                ) : (
                    <DrawerButton />
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
                            <DrawerUserCard user={user} />
                            <div className="beyond-wrapper">
                                <AccordionVip />
                            </div>
                            <DrawerMenuList>
                                <DrawerMenuHeader
                                    title="Wander"
                                    content="explore places. meet people."
                                />
                                <div className="drawer-menu-list__container">
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.travel}
                                        onClick={closeDrawer}>
                                        Travel
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.map}
                                        onClick={closeDrawer}>
                                        Map
                                    </DrawerMenuItem>
                                </div>
                            </DrawerMenuList>
                            {/*
                             * LAST 10 VISITOR
                             */}
                            {/* <div className="beyond-wrapper">
                                <DrawerMenuHeader
                                    title="Visitors"
                                    content="Last 10 viewers."
                                />
                                <div className="cruise-group-10">
                                    <DrawerLast10Visitors />
                                </div>
                            </div> */}
                            {/*
                             * LAST 10 VISITED
                             */}
                            {/* <div className="beyond-wrapper">
                                <DrawerMenuHeader
                                    title="Visited"
                                    content="Last 10 views."
                                />
                                <div className="cruise-group-10">
                                    <DrawerLast10Visited />
                                </div>
                            </div> */}
                            <DrawerMenuList>
                                <DrawerMenuHeader
                                    title="Love"
                                    content="find connection. be yourself."
                                />
                                <div className="drawer-menu-list__container">
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.nearby}
                                        onClick={closeDrawer}>
                                        Nearby Users
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.match}
                                        onClick={closeDrawer}>
                                        Meet your match
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.eyeCandy}
                                        onClick={closeDrawer}>
                                        Eye candy
                                    </DrawerMenuItem>
                                </div>
                            </DrawerMenuList>
                            <DrawerMenuList>
                                <DrawerMenuHeader
                                    title="Extra"
                                    content="more than dating..."
                                />
                                <div className="drawer-menu-list__container">
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.rightNow}
                                        onClick={closeDrawer}>
                                        Right now
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.hotOffers}
                                        onClick={closeDrawer}>
                                        Hot offers
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.auction}
                                        onClick={closeDrawer}>
                                        Auction
                                    </DrawerMenuItem>
                                </div>
                            </DrawerMenuList>
                            <DrawerMenuList>
                                <DrawerMenuHeader
                                    title="Community"
                                    content="Beyond the explore."
                                />
                                <div className="drawer-menu-list__container">
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.groups}
                                        onClick={closeDrawer}>
                                        Groups
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.blogs}
                                        onClick={closeDrawer}>
                                        Blogs
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.city}
                                        onClick={closeDrawer}>
                                        City
                                    </DrawerMenuItem>
                                </div>
                            </DrawerMenuList>
                            <DrawerMenuList>
                                <DrawerMenuHeader title="Settings" />
                                <div className="drawer-menu-list__container">
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.customizeSettings}
                                        onClick={closeDrawer}>
                                        Customize
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.profileSettings}
                                        onClick={closeDrawer}>
                                        Profile
                                    </DrawerMenuItem>
                                    <DrawerMenuItem
                                        href={AUTHED_ROUTES.manageUsers}
                                        onClick={closeDrawer}>
                                        Manage users
                                    </DrawerMenuItem>
                                </div>
                            </DrawerMenuList>
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
