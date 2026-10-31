import ComingSoonAttempt from "@/features/(app)/(ui)/ComingSoonAttempt";
import HotOffersScreen from "@/features/hot-offers/screens/HotOffersScreen";

export default function HotOffersPage() {
    const attempt = true;
    if (attempt) {
        return <ComingSoonAttempt />;
    }
    return <HotOffersScreen />;
}
