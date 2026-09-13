import AuctionIconSVG from "@/features/navigations/mobile-top-nav/icons/AuctionIconSVG";
import BlogsIconSVG from "@/features/navigations/mobile-top-nav/icons/BlogsIconSVG";
import CityIconSVG from "@/features/navigations/mobile-top-nav/icons/CityIconSVG";
import EyeCandyIconSVG from "@/features/navigations/mobile-top-nav/icons/EyeCandyIconSVG";
import GroupsIconSVG from "@/features/navigations/mobile-top-nav/icons/GroupsIconSVG";
import HotOffersIconSVG from "@/features/navigations/mobile-top-nav/icons/HotOffersIconSVG";
import ManageUsersIconSVG from "@/features/navigations/mobile-top-nav/icons/ManageUsersIconSVG";
import MatchIconSVG from "@/features/navigations/mobile-top-nav/icons/MatchIconSVG";
import MessagesIconSVG from "@/features/navigations/mobile-top-nav/icons/MessagesIconSVG";
import NearbyUsersIconSVG from "@/features/navigations/mobile-top-nav/icons/NearbyUsersIcon";
import { RightNowIconSVG } from "@/features/navigations/mobile-top-nav/icons/RightNowIconSVG";
import SharedAlbumIconSVG from "@/features/navigations/mobile-top-nav/icons/SharedAlbumIconSVG";
import VisitedIconSVG from "@/features/navigations/mobile-top-nav/icons/VisitedIconSVG";
import VisitorsIconSVG from "@/features/navigations/mobile-top-nav/icons/VisitorsIconSVG";
import { MobileTopNavigationConfig } from "@/features/navigations/navigation.types";
import AboutUsIconSVG from "@/features/navigations/top-bar/icons/AboutUsIconSVG";
import ContactUsIconSVG from "@/features/navigations/top-bar/icons/ContactUsIconSVG";
import HomeIconSVG from "@/features/navigations/top-bar/icons/HomeIconSVG";
import CommunityIconSVG from "@/features/navigations/top-bar/icons/icons/CommunityIconSVG";
import CruiseIconSVG from "@/features/navigations/top-bar/icons/icons/CruiseIconSVG";
import ExtraIconSVG from "@/features/navigations/top-bar/icons/icons/ExtraIconSVG";
import HeartIconSVG from "@/features/navigations/top-bar/icons/icons/HeartIconSVG";
import { BOTTOM_ICON_COLORS } from "@/features/navigations/top-bar/icons/icons/icons.data";
import InboxIconSVG from "@/features/navigations/top-bar/icons/icons/InboxIconSVG";
import OurTeamIconSVG from "@/features/navigations/top-bar/icons/OurTeamIconSVG";
import SafetyWarningIconSVG from "@/features/navigations/top-bar/icons/SafetyWarningIconSVG";
import { ComponentType, ReactNode } from "react";

export interface NavigationScreen {
    id: number;
    name: string;
    title: string;
    fromUrl: string;
    url: string;
    icon?: ReactNode;
    activeIcon?: ReactNode;
    component?: ComponentType;
}

export interface NavigationTab {
    id: number;
    name: string;
    title: string;
    url: string;
    icon: ReactNode;
    activeIcon?: ReactNode;
    screens?: NavigationScreen[];
}

export const GUEST_TOP_MENU_ROUTES: MobileTopNavigationConfig = [
    {
        id: 1,
        name: "home",
        title: "Home",
        bottomTitle: "Home",
        url: "/",
        publicMenu: true,
        icon: <HomeIconSVG size={26} strokeWidth={1.5} />,
        activeIcon: (
            <HomeIconSVG
                size={26}
                strokeWidth={1.5}
                startColor={BOTTOM_ICON_COLORS.active.mainTopStartColor}
                stopColor={BOTTOM_ICON_COLORS.active.mainTopStopColor}
                // backgroundStartColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStartColor
                // }
                // backgroundStopColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStopColor
                // }
            />
        ),
    },
    {
        id: 2,
        name: "about",
        title: "About",
        bottomTitle: "About",
        url: "/about",
        publicMenu: true,
        icon: <AboutUsIconSVG size={26} strokeWidth={1.5} />,
        activeIcon: (
            <AboutUsIconSVG
                size={26}
                strokeWidth={1.5}
                startColor={BOTTOM_ICON_COLORS.active.mainTopStartColor}
                stopColor={BOTTOM_ICON_COLORS.active.mainTopStopColor}
                // strokeWidth={1.2}
                // startColor={BOTTOM_ICON_COLORS.active.startColor}
                // stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                // backgroundStartColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStartColor
                // }
                // backgroundStopColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStopColor
                // }
            />
        ),
    },
    {
        id: 3,
        name: "contact",
        title: "Contact us",
        bottomTitle: "Contact",
        url: "/contact-us",
        publicMenu: true,
        icon: <ContactUsIconSVG size={26} strokeWidth={1.5} />,
        activeIcon: (
            <ContactUsIconSVG
                size={26}
                strokeWidth={1.5}
                startColor={BOTTOM_ICON_COLORS.active.mainTopStartColor}
                stopColor={BOTTOM_ICON_COLORS.active.mainTopStopColor}
                // startColor={BOTTOM_ICON_COLORS.active.startColor}
                // stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                // backgroundStartColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStartColor
                // }
                // backgroundStopColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStopColor
                // }
            />
        ),
    },
    {
        id: 4,
        name: "our-team",
        title: "Our team",
        bottomTitle: "Team",
        url: "/our-team",
        publicMenu: true,
        icon: <OurTeamIconSVG size={26} strokeWidth={1.5} />,
        activeIcon: (
            <OurTeamIconSVG
                size={26}
                strokeWidth={1.5}
                startColor={BOTTOM_ICON_COLORS.active.mainTopStartColor}
                stopColor={BOTTOM_ICON_COLORS.active.mainTopStopColor}
                // strokeWidth={1.3}
                // startColor={BOTTOM_ICON_COLORS.active.startColor}
                // stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                // backgroundStartColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStartColor
                // }
                // backgroundStopColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStopColor
                // }
            />
        ),
        screens: [
            {
                id: 1,
                name: "messages",
                title: "Messages",
                icon: (
                    <MessagesIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <MessagesIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/inbox",
                url: "/messages",
            },
            {
                id: 2,
                name: "shared-albums",
                title: "Shared albums",
                icon: (
                    <SharedAlbumIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <SharedAlbumIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/inbox",
                url: "/shared-albums",
            },
        ],
    },
    {
        id: 5,
        name: "safety-warning",
        title: "Safety warning",
        bottomTitle: "Safety",
        url: "/safety-warning",
        publicMenu: true,
        icon: <SafetyWarningIconSVG size={26} strokeWidth={1.5} />,
        activeIcon: (
            <SafetyWarningIconSVG
                size={26}
                strokeWidth={1.5}
                startColor={BOTTOM_ICON_COLORS.active.mainTopStartColor}
                stopColor={BOTTOM_ICON_COLORS.active.mainTopStopColor}
                // startColor={BOTTOM_ICON_COLORS.active.startColor}
                // stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                // backgroundStartColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStartColor
                // }
                // backgroundStopColor={
                //     BOTTOM_ICON_COLORS.active.backgroundStopColor
                // }
            />
        ),
        screens: [
            {
                id: 1,
                name: "groups",
                title: "Groups",
                icon: (
                    <GroupsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <GroupsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/community",
                url: "/groups",
            },
            {
                id: 2,
                name: "city",
                title: "City",
                icon: (
                    <CityIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <CityIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/community",
                url: "/city",
            },
            {
                id: 3,
                name: "blogs",
                title: "Blogs",
                icon: (
                    <BlogsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                        stopColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                        backgroundStartColor={
                            BOTTOM_ICON_COLORS.inactive.topTabColor
                        }
                        backgroundStopColor={
                            BOTTOM_ICON_COLORS.inactive.topTabColor
                        }
                    />
                ),
                activeIcon: (
                    <BlogsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                        stopColor={BOTTOM_ICON_COLORS.active.topTabColor}
                        backgroundStartColor={
                            BOTTOM_ICON_COLORS.active.topTabColor
                        }
                        backgroundStopColor={
                            BOTTOM_ICON_COLORS.active.topTabColor
                        }
                    />
                ),
                fromUrl: "/community",
                url: "/blogs",
            },
        ],
    },
    {
        id: 6,
        name: "extra",
        title: "Extra",
        bottomTitle: "Extra",
        url: "/extra",
        appMenu: true,
        icon: <ExtraIconSVG size={26} />,
        activeIcon: (
            <ExtraIconSVG
                size={26}
                startColor={BOTTOM_ICON_COLORS.active.startColor}
                stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                backgroundStartColor={
                    BOTTOM_ICON_COLORS.active.backgroundStartColor
                }
                backgroundStopColor={
                    BOTTOM_ICON_COLORS.active.backgroundStopColor
                }
            />
        ),
        screens: [
            {
                id: 1,
                name: "right-now",
                title: "Right now",
                icon: (
                    <RightNowIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <RightNowIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/extra",
                url: "/right-now",
            },
            {
                id: 2,
                name: "hot-offers",
                title: "Hot offers",
                icon: (
                    <HotOffersIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <HotOffersIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/extra",
                url: "/hot-offers",
            },
            {
                id: 3,
                name: "auction",
                title: "Auction",
                icon: (
                    <AuctionIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <AuctionIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/extra",
                url: "/auction",
            },
        ],
    },
    {
        id: 7,
        name: "cruise",
        title: "Cruise",
        bottomTitle: "Cruise",
        url: "/cruise",
        appMenu: true,
        icon: <CruiseIconSVG size={26} strokeWidth={1.2} />,
        activeIcon: (
            <CruiseIconSVG
                size={26}
                strokeWidth={1.2}
                startColor={BOTTOM_ICON_COLORS.active.startColor}
                stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                backgroundStartColor={
                    BOTTOM_ICON_COLORS.active.backgroundStartColor
                }
                backgroundStopColor={
                    BOTTOM_ICON_COLORS.active.backgroundStopColor
                }
            />
        ),
        screens: [
            {
                id: 1,
                name: "visitors",
                title: "Visitors",
                icon: (
                    <VisitorsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <VisitorsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/cruise",
                url: "/visitors",
            },
            {
                id: 2,
                name: "visited",
                title: "Visited",
                icon: (
                    <VisitedIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <VisitedIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/cruise",
                url: "/visited",
                // component: SaferSexScreen
            },
        ],
    },
    {
        id: 8,
        name: "love",
        title: "Love",
        bottomTitle: "Love",
        url: "/love",
        appMenu: true,
        icon: <HeartIconSVG size={26} />,
        activeIcon: (
            <HeartIconSVG
                size={26}
                startColor={BOTTOM_ICON_COLORS.active.startColor}
                stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                backgroundStartColor={
                    BOTTOM_ICON_COLORS.active.backgroundStartColor
                }
                backgroundStopColor={
                    BOTTOM_ICON_COLORS.active.backgroundStopColor
                }
            />
        ),
        screens: [
            {
                id: 1,
                name: "nearby",
                title: "Users nearby",
                icon: (
                    <NearbyUsersIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <NearbyUsersIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/love",
                url: "/nearby",
            },
            {
                id: 2,
                name: "eye-candy",
                title: "Eye candy",
                icon: (
                    <EyeCandyIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <EyeCandyIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/love",
                url: "/eye-candy",
            },
            {
                id: 3,
                name: "match",
                title: "Match",
                icon: (
                    <MatchIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <MatchIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/love",
                url: "/match",
            },
        ],
    },
    {
        id: 9,
        name: "inbox",
        title: "Inbox",
        bottomTitle: "Inbox",
        url: "/inbox",
        appMenu: true,
        icon: <InboxIconSVG size={26} strokeWidth={1.3} />,
        activeIcon: (
            <InboxIconSVG
                size={26}
                strokeWidth={1.3}
                startColor={BOTTOM_ICON_COLORS.active.startColor}
                stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                backgroundStartColor={
                    BOTTOM_ICON_COLORS.active.backgroundStartColor
                }
                backgroundStopColor={
                    BOTTOM_ICON_COLORS.active.backgroundStopColor
                }
            />
        ),
        screens: [
            {
                id: 1,
                name: "messages",
                title: "Messages",
                icon: (
                    <MessagesIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <MessagesIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/inbox",
                url: "/messages",
            },
            {
                id: 2,
                name: "shared-albums",
                title: "Shared albums",
                icon: (
                    <SharedAlbumIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <SharedAlbumIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/inbox",
                url: "/shared-albums",
            },
            {
                id: 3,
                name: "manage-users",
                title: "Manage users",
                icon: (
                    <ManageUsersIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <ManageUsersIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/inbox",
                url: "/manage-users",
            },
        ],
    },
    {
        id: 10,
        name: "community",
        title: "Community",
        bottomTitle: "Community",
        url: "/community",
        appMenu: true,
        icon: <CommunityIconSVG size={26} strokeWidth={1.2} />,
        activeIcon: (
            <CommunityIconSVG
                size={26}
                startColor={BOTTOM_ICON_COLORS.active.startColor}
                stopColor={BOTTOM_ICON_COLORS.active.stopColor}
                backgroundStartColor={
                    BOTTOM_ICON_COLORS.active.backgroundStartColor
                }
                backgroundStopColor={
                    BOTTOM_ICON_COLORS.active.backgroundStopColor
                }
            />
        ),
        screens: [
            {
                id: 1,
                name: "groups",
                title: "Groups",
                icon: (
                    <GroupsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <GroupsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/community",
                url: "/groups",
            },
            {
                id: 2,
                name: "city",
                title: "City",
                icon: (
                    <CityIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                    />
                ),
                activeIcon: (
                    <CityIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                    />
                ),
                fromUrl: "/community",
                url: "/city",
            },
            {
                id: 3,
                name: "blogs",
                title: "Blogs",
                icon: (
                    <BlogsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                        stopColor={BOTTOM_ICON_COLORS.inactive.topTabColor}
                        backgroundStartColor={
                            BOTTOM_ICON_COLORS.inactive.topTabColor
                        }
                        backgroundStopColor={
                            BOTTOM_ICON_COLORS.inactive.topTabColor
                        }
                    />
                ),
                activeIcon: (
                    <BlogsIconSVG
                        size={20}
                        startColor={BOTTOM_ICON_COLORS.active.topTabColor}
                        stopColor={BOTTOM_ICON_COLORS.active.topTabColor}
                        backgroundStartColor={
                            BOTTOM_ICON_COLORS.active.topTabColor
                        }
                        backgroundStopColor={
                            BOTTOM_ICON_COLORS.active.topTabColor
                        }
                    />
                ),
                fromUrl: "/community",
                url: "/blogs",
            },
        ],
    },
    {
        id: 11,
        name: "sign in",
        title: "Sign In",
        bottomTitle: "Sign In",
        url: "/sign-in",
    },
];

export const publicMenus = GUEST_TOP_MENU_ROUTES.filter(
    (route) => route.publicMenu === true,
);

export const appMenus = GUEST_TOP_MENU_ROUTES.filter(
    (route) => route.appMenu === true,
);
