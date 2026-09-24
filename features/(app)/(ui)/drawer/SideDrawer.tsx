"use client";

import { useDrawer } from "@/features/(app)/(ui)/drawer/hooks/useDrawer";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/features/(app)/(ui)/shadcn/ui/drawer";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { signOutAction } from "@/features/auth/lib/actions";
import { AccordionVip } from "@/features/vip/components/AccordionVip";
import Image from "next/image";
import Link from "next/link";

export default function SideDrawer() {
    const { open, setOpen } = useDrawer();
    const { data: user } = useCurrentUser();

    return (
        <>
            {user && (
                <Drawer
                    swipeDirection="right"
                    open={open}
                    onOpenChange={setOpen}>
                    <DrawerTrigger>
                        <div className="">
                            <Image
                                className="rounded-full top-avatar-pic"
                                src={`/assets/images/user-blank-1.png`}
                                width={46}
                                height={46}
                                alt={``}
                            />
                        </div>
                    </DrawerTrigger>

                    <DrawerContent className="right-drawer w-[380px] sm:w-[420px]">
                        <div className="myscroll">
                            {/* <ProfileRightDrawerCard
                                onNavigate={() => setOpen(false)}
                            /> */}
                            <div>
                                <Link href={`/me`}>profilom</Link>
                            </div>
                            <div>
                                <Link href={`/profile/${user.id}`}>
                                    profilom más megtekintés
                                </Link>
                            </div>
                            <div className="navigation-content-drawer">
                                <div className="drawer-menu-container">
                                    <div>
                                        <div className="font-sec">
                                            Status <span>member</span>
                                        </div>
                                        <div className="drawer-button-group">
                                            <button className="select-status">
                                                Online
                                            </button>
                                            <button className="select-status selected">
                                                Date
                                            </button>
                                            <button className="select-status">
                                                Invisible
                                            </button>
                                        </div>
                                    </div>
                                    <AccordionVip />
                                    {/* <ThemeToggleCard /> */}
                                    <div className="font-sec">Add-on</div>
                                    <div className="drawer-nav-container">
                                        <div className="link-container">
                                            <div>
                                                <br />
                                            </div>
                                            <span>Travel</span>
                                        </div>
                                        <div className="link-container">
                                            <div>
                                                <br />
                                            </div>
                                            <span>Eye candy</span>
                                        </div>
                                        <div className="link-container">
                                            <div>
                                                <br />
                                            </div>
                                            <span>Right now</span>
                                        </div>
                                        <div className="link-container">
                                            <div>
                                                <br />
                                            </div>
                                            <span>Hot offer</span>
                                        </div>
                                        <div className="link-container">
                                            <div>
                                                <br />
                                            </div>
                                            <span>Auction</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="font-sec">Quick links **</div>
                                <div className="drawer-nav-container">
                                    {/* <div className="link-container">
                                        <div>
                                            <br />
                                        </div>
                                        <span>Albums</span>
                                    </div>
                                    <div className="link-container">
                                        <div>
                                            <br />
                                        </div>
                                        <span>Favirotes</span>
                                    </div>
                                    <div className="link-container">
                                        <div>
                                            <br />
                                        </div>
                                        <span>Groups</span>
                                    </div>
                                    <div className="link-container">
                                        <div>
                                            <br />
                                        </div>
                                        <span>Travels</span>
                                    </div>
                                    <div className="link-container">
                                        <div>
                                            <br />
                                        </div>
                                        <span>Marketplace</span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="logout-button-container">
                                <LogoutButton
                                    action={signOutAction}
                                    className="logout-button"
                                />
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            )}
        </>
    );
}
