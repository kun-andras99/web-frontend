import type { ReactNode } from "react";

export interface TopTab<TId extends string = string> {
  id: TId;
  label: string;
  href: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TopTabConfig<TId extends string = string> {
  tabs: readonly TopTab<TId>[];
  defaultTab?: TId;
  swipe?: boolean;
  swipeThreshold?: number;
  animated?: boolean;
}

export interface TopTabState<TId extends string = string> {
  activeTab: TId;
  activeIndex: number;
}