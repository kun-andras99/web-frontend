"use client";

import { TopTabItem } from "./TopTabItem";

import type { TopTab } from "../types/top-tab.types";

interface TopTabBarProps<TId extends string> {
  tabs: readonly TopTab<TId>[];
  activeTab: TId | undefined;
}

export function TopTabBar<TId extends string>({
  tabs,
  activeTab,
}: TopTabBarProps<TId>) {
  return (
    <nav
      className="
        flex
        w-full
        shrink-0
      "
    >
      {tabs.map((tab) => (
        <TopTabItem
          key={tab.id}
          tab={tab}
          active={tab.id === activeTab}
        />
      ))}
    </nav>
  );
}