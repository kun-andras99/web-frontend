import CommunityIconSVG from "@/features/navigations/app-bottom-bar/icons/CommunityIconSVG";
import CruiseIconSVG from "@/features/navigations/app-bottom-bar/icons/CruiseIconSVG";
import ExtraIconSVG from "@/features/navigations/app-bottom-bar/icons/ExtraIconSVG";
import HeartIconSVG from "@/features/navigations/app-bottom-bar/icons/HeartIconSVG";
import { BOTTOM_ICON_COLORS } from "@/features/navigations/app-bottom-bar/icons/icons.data";
import InboxIconSVG from "@/features/navigations/app-bottom-bar/icons/InboxIconSVG";
import AuctionIconSVG from "@/features/navigations/app-top-bar/icons/AuctionIconSVG";
import BlogsIconSVG from "@/features/navigations/app-top-bar/icons/BlogsIconSVG";
import CityIconSVG from "@/features/navigations/app-top-bar/icons/CityIconSVG";
import EyeCandyIconSVG from "@/features/navigations/app-top-bar/icons/EyeCandyIconSVG";
import GroupsIconSVG from "@/features/navigations/app-top-bar/icons/GroupsIconSVG";
import HotOffersIconSVG from "@/features/navigations/app-top-bar/icons/HotOffersIconSVG";
import ManageUsersIconSVG from "@/features/navigations/app-top-bar/icons/ManageUsersIconSVG";
import MatchIconSVG from "@/features/navigations/app-top-bar/icons/MatchIconSVG";
import MessagesIconSVG from "@/features/navigations/app-top-bar/icons/MessagesIconSVG";
import NearbyUsersIconSVG from "@/features/navigations/app-top-bar/icons/NearbyUsersIcon";
import { RightNowIconSVG } from "@/features/navigations/app-top-bar/icons/RightNowIconSVG";
import SharedAlbumIconSVG from "@/features/navigations/app-top-bar/icons/SharedAlbumIconSVG";
import VisitedIconSVG from "@/features/navigations/app-top-bar/icons/VisitedIconSVG";
import VisitorsIconSVG from "@/features/navigations/app-top-bar/icons/VisitorsIconSVG";
import { ReactNode } from "react";

export interface AppBottomBarScreen {
    id: number;
    name: string;
    title: string;
    fromUrl: string;
    url: string;
    icon?: ReactNode;
    activeIcon?: ReactNode;
}

export interface AppBottomBarRoute {
    id: number;
    name: string;
    title: string;
    url: string;
    icon: ReactNode;
    activeIcon?: ReactNode;
    screens: AppBottomBarScreen[];
}

export const appBottomBarRoutes: AppBottomBarRoute[] = [
    {
        id: 1,
        name: "extra",
        title: "Extra",
        url: "/extra",
        icon: <ExtraIconSVG size={30} strokeWidth={1.5} />,
        activeIcon: (
            <ExtraIconSVG
                size={30}
                strokeWidth={1.5}
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
        id: 2,
        name: "cruise",
        title: "Cruise",
        url: "/cruise",
        icon: <CruiseIconSVG size={30} strokeWidth={1.5} />,
        activeIcon: (
            <CruiseIconSVG
                size={30}
                strokeWidth={1.5}
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
        id: 3,
        name: "love",
        title: "Love",
        url: "/love",
        icon: <HeartIconSVG size={30} strokeWidth={1.5} />,
        activeIcon: (
            <HeartIconSVG
                size={30}
                strokeWidth={1.5}
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
        id: 4,
        name: "inbox",
        title: "Inbox",
        url: "/inbox",
        icon: <InboxIconSVG size={30} strokeWidth={1.5} />,
        activeIcon: (
            <InboxIconSVG
                size={30}
                strokeWidth={1.5}
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
        id: 5,
        name: "community",
        title: "Community",
        url: "/community",
        icon: <CommunityIconSVG size={30} strokeWidth={1.5} />,
        activeIcon: (
            <CommunityIconSVG
                size={30}
                strokeWidth={1.5}
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
];

export const extraRoutes = appBottomBarRoutes.find(
    (route) => route.name === "extra",
);
export const cruiseRoutes = appBottomBarRoutes.find(
    (route) => route.name === "cruise",
);
export const loveRoutes = appBottomBarRoutes.find(
    (route) => route.name === "love",
);
export const inboxRoutes = appBottomBarRoutes.find(
    (route) => route.name === "inbox",
);
export const communityRoutes = appBottomBarRoutes.find(
    (route) => route.name === "community",
);
