import UsersNearbyScreen from "@/features/nearby-users/screens/UsersNearbyScreen";
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
