import ComingSoonAttempt from "@/features/(app)/(ui)/ComingSoonAttempt";
import AuctionsScreen from "@/features/auction/screens/AuctionsScreen";

export default function AuctionPage() {
    const attempt = true;
        if (attempt) {
            return <ComingSoonAttempt />;
        }
    return <AuctionsScreen />;
}
