"use client";

import { TopTabBar } from "@/features/navigations/app-top-bar/components/TopTabBar";
import { TopTabMotion } from "@/features/navigations/app-top-bar/components/TopTabMotion";

import { useTopTabs } from "@/features/navigations/app-top-bar/hooks/useTopTabs";
import { TopTab } from "@/features/navigations/app-top-bar/types/top-tab.types";

interface LoveLayoutProps {
  children: React.ReactNode;
}

export type LoveTab =
  | "nearby"
  | "match"
  | "eye-candy";

export const loveTabs = [
  {
    id: "nearby",
    label: "Nearby",
    href: "/love/nearby",
  },
  {
    id: "match",
    label: "Match",
    href: "/love/match",
  },
  {
    id: "eye-candy",
    label: "Eye candy",
    href: "/love/eye-candy",
  },
] as const satisfies readonly TopTab<LoveTab>[];

export default function LoveLayout({
  children,
}: LoveLayoutProps) {
  const tabs = useTopTabs({
    tabs: loveTabs,
  });

  return (
    <div className="flex h-full min-h-0 flex-col">
      <TopTabBar
        tabs={tabs.tabs}
        activeTab={tabs.activeTab}
      />

      <TopTabMotion
        activeIndex={tabs.activeIndex}
        tabCount={tabs.tabs.length}
        onNext={tabs.next}
        onPrevious={tabs.previous}
      >
        {children}
      </TopTabMotion>
    </div>
  );
}