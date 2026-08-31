import ExploreEyeCandyPage from "@/app/(bottom-navigation)/love/eye-candy/page";
import ExploreMatchPage from "@/app/(bottom-navigation)/love/match/page";
import ExploreNearbyPage from "@/app/(bottom-navigation)/love/nearby/page";
import SwipeableTabs from "@/features/navigations/swipeable-tabs";

export default function Home() {
  return (
    <div className="">
     kezdőlap
     <SwipeableTabs
      className="h-full"
      tabs={[
        { key: 'eye-candy', label: 'Eye Candy', content: <ExploreEyeCandyPage /> },
        { key: 'match', label: 'Match', content: <ExploreMatchPage /> },
        { key: 'nearby', label: 'Nearby', content: <ExploreNearbyPage /> },
      ]}
    />
         </div>
  );
}
