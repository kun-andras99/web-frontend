"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import type { TopTab } from "../types/top-tab.types";

interface UseTopTabsOptions<TId extends string> {
  tabs: readonly TopTab<TId>[];
}
export function useTopTabs<TId extends string>({
  tabs,
}: UseTopTabsOptions<TId>) {
  const router = useRouter();
  const pathname = usePathname();

  const activeIndex = useMemo(() => {
    const index = tabs.findIndex((tab) => {
      return pathname === tab.href;
    });

    return index >= 0 ? index : 0;
  }, [pathname, tabs]);

  const activeTab = tabs[activeIndex]?.id;

  const navigateTo = useCallback(
    (index: number) => {
      const tab = tabs[index];

      if (!tab || tab.disabled) {
        return;
      }

      if (pathname === tab.href) {
        return;
      }

      router.push(tab.href);
    },
    [pathname, router, tabs],
  );

  const selectTab = useCallback(
    (id: TId) => {
      const index = tabs.findIndex((tab) => tab.id === id);

      if (index === -1) {
        return;
      }

      navigateTo(index);
    },
    [navigateTo, tabs],
  );

  const next = useCallback(() => {
    if (activeIndex >= tabs.length - 1) {
      return;
    }

    navigateTo(activeIndex + 1);
  }, [activeIndex, navigateTo, tabs.length]);

  const previous = useCallback(() => {
    if (activeIndex <= 0) {
      return;
    }

    navigateTo(activeIndex - 1);
  }, [activeIndex, navigateTo]);

  return {
    tabs,
    activeTab,
    activeIndex,
    pathname,
    selectTab,
    navigateTo,
    next,
    previous,
  };
}