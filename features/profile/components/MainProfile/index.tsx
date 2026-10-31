"use client";

import DrawerMenuItem from "@/features/(app)/(ui)/drawer/DrawerMenuItem";
import DrawerMenuList from "@/features/(app)/(ui)/drawer/DrawerMenuList";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { signOutAction } from "@/features/auth/lib/actions";
import { AUTHED_ROUTES, GUEST_ROUTES } from "@/features/auth/lib/constants";

import LoveWallBox from "@/features/love-wall/components/LoveWallBox";
import Link from "next/link";

import { useDrawer } from "@/features/(app)/(ui)/drawer/hooks/useDrawer";

// import ComingSoonText from "@/features/(app)/(ui)/ComingSoonText";
import DrawerUserCard from "@/features/(app)/(ui)/drawer/DrawerUserCard";
import { useAuth } from "@/features/auth/components/provider/AuthProvider";
import { useMainProfileDatas } from "@/features/user/hooks/useMainProfileDatas";
import {
    Eye,
    Flame,
    Gavel,
    Group,
    HeartHandshake,
    HouseHeart,
    Map,
    MapPinned,
    NotebookPen,
    PencilSparkles,
    Plane,
    UserCog,
    UserPen,
    Zap,
} from "lucide-react";

export default function MainProfile() {
    const { open, setOpen } = useDrawer();
    const closeDrawer = () => {
        setOpen(false);
    };
    const session = useAuth();
    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useMainProfileDatas(session?.id);

    if (!user) return null;

    return (
        <div className="quest-drawer">
            <Link href={GUEST_ROUTES.loveWall} onClick={closeDrawer}>
                <LoveWallBox />
            </Link>
            <DrawerUserCard user={user} />
            <div className="line" />
            <h3>Settings</h3>
            <DrawerMenuList>
                <div className="drawer-menu-list__container">
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.customizeSettings}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <PencilSparkles
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Customize</span>
                        </div>
                        <span className="linklabel">ui settings</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.profileSettings}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <UserPen
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Profile</span>
                        </div>
                        <span className="linklabel">profile settings</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.manageUsers}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <UserCog
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Manage</span>
                        </div>
                        <span className="linklabel">manage users</span>
                    </DrawerMenuItem>
                </div>
            </DrawerMenuList>
            <div className="line" />
            <h3>Main links</h3>
            <DrawerMenuList>
                <div className="drawer-menu-list__container">
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.travel}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <Plane
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Travel</span>
                        </div>
                        <span className="linklabel">around the world</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.map}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <Map
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Map</span>
                        </div>
                        <span className="linklabel">share your loc</span>
                    </DrawerMenuItem>
                    {/* <DrawerMenuItem
                        disabled
                        href={AUTHED_ROUTES.map}
                        onClick={closeDrawer}>
                        Map <ComingSoonText />
                    </DrawerMenuItem> */}
                </div>
                <div className="drawer-menu-list__container">
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.nearby}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <MapPinned
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Explore</span>
                        </div>
                        <span className="linklabel">nearby users</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.match}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <HeartHandshake
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Match</span>
                        </div>
                        <span className="linklabel">meet your match</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.eyeCandy}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <Eye
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Eye candy</span>
                        </div>
                        <span className="linklabel">rate eye-catchers</span>
                    </DrawerMenuItem>
                </div>
                <div className="drawer-menu-list__container">
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.nearby}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <Zap
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Right now</span>
                        </div>
                        <span className="linklabel">quick fun</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.nearby}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <Gavel
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Auction</span>
                        </div>
                        <span className="linklabel">get your product</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.nearby}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <Flame
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Hot offers</span>
                        </div>
                        <span className="linklabel">the hottest offers</span>
                    </DrawerMenuItem>
                </div>
                <div className="drawer-menu-list__container">
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.city}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <HouseHeart
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>City</span>
                        </div>
                        <span className="linklabel">statistics</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.blogs}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <NotebookPen
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Blogs</span>
                        </div>
                        <span className="linklabel">write it out</span>
                    </DrawerMenuItem>
                    <DrawerMenuItem
                        href={AUTHED_ROUTES.groups}
                        onClick={closeDrawer}>
                        <div className="icon">
                            <Group
                                color="var(--primary-bg-dark)"
                                strokeWidth={1.75}
                                size={20}
                            />{" "}
                            <span>Groups</span>
                        </div>
                        <span className="linklabel">discover groups</span>
                    </DrawerMenuItem>
                </div>
            </DrawerMenuList>
            <div className="line" />
            <LogoutButton action={signOutAction} className="logout-button" />
        </div>
    );
}
