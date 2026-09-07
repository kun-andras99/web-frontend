import LogoutButton from "@/features/_components/button/logout-button";
import { AccordionVip } from "@/features/_components/drawer/AccordionVip";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/features/_components/ui/drawer";
import { useAuth } from "@/features/auth/components/auth-provider";
import { signOutAction } from "@/features/auth/lib/actions";
import Image from "next/image";
import { useState } from "react";
export default function SideDrawer() {
    const user = useAuth();
    const [open, setOpen] = useState(false);

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
                                className="top-avatar-pic"
                                src={`/assets/images/user-blank-1.png`}
                                width={36}
                                height={36}
                                alt={``}
                            />
                        </div>
                    </DrawerTrigger>

                    <DrawerContent className="right-drawer w-[380px] sm:w-[420px]">
                        <div className="myscroll">
                            {/* <ProfileRightDrawerCard
                                onNavigate={() => setOpen(false)}
                            /> */}
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
