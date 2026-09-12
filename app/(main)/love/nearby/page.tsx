import UsersNearbyScreen from "@/features/(main-menus)/love/screens/users-nearby";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users nearby",
    description: "Found users of near you",
    applicationName: "PUBLICAPPNAME",
    keywords: [],
    
};

export default async function ExploreNearbyPage() {
    return <UsersNearbyScreen />;
}
