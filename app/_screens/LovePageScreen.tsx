"use client";

import { TopTabBar } from "@/features/navigations/app-top-bar/components/TopTabBar";
import { useTopTabs } from "@/features/navigations/app-top-bar/hooks/useTopTabs";
import { useTopTabSwipe } from "@/features/navigations/app-top-bar/hooks/useTopTabSwipe";
import type { TopTab } from "@/features/navigations/app-top-bar/types/top-tab.types";

type LoveTab =
  | "nearby"
  | "matches"
  | "likes";

const tabs = [
  {
    id: "nearby",
    label: "Nearby",
    href: "/love/nearby",
  },
  {
    id: "matches",
    label: "Matches",
    href: "/love/matches",
  },
  {
    id: "likes",
    label: "Likes",
    href: "/love/likes",
  },
] as const satisfies readonly TopTab<LoveTab>[];


interface LoveLayoutProps {
  children: React.ReactNode;
}


export default function LovePageScreen() {
  const topTabs = useTopTabs<LoveTab>({
    tabs,
    defaultTab: "nearby",
  });

  const swipe = useTopTabSwipe({
    onNext: topTabs.next,
    onPrevious: topTabs.previous,
  });

  return (
    <div className="flex h-full flex-col">
      <TopTabBar
        tabs={tabs}
        activeTab={topTabs.activeTab}
        onChange={topTabs.selectTab}
      />

      <div
        className="min-h-0 flex-1"
        {...swipe}
      >
        {topTabs.activeTab === "nearby" && (
          <div>Nearby content</div>
        )}

        {topTabs.activeTab === "matches" && (
          <div>Matches content</div>
        )}

        {topTabs.activeTab === "likes" && (
          <div>Likes content</div>
        )}
      </div>
    </div>
  );
}