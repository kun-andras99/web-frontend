"use client";

import Link from "next/link";

import type { TopTab } from "../types/top-tab.types";

interface TopTabItemProps<TId extends string> {
  tab: TopTab<TId>;
  active: boolean;
}

export function TopTabItem<TId extends string>({
  tab,
  active,
}: TopTabItemProps<TId>) {
  return (
    <Link
      href={tab.href}
      aria-current={active ? "page" : undefined}
      aria-disabled={tab.disabled}
      className={[
        "relative flex h-12 flex-1 items-center justify-center",
        "select-none",
        "transition-colors duration-200",
        active
          ? "text-foreground"
          : "text-muted-foreground",
        tab.disabled && "pointer-events-none opacity-50",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {tab.icon && (
        <span className="mr-2">
          {tab.icon}
        </span>
      )}

      <span>{tab.label}</span>

      {active && (
        <span
          className="
            absolute
            inset-x-0
            bottom-0
            mx-auto
            h-0.5
            w-8
            rounded-full
            bg-foreground
          "
        />
      )}
    </Link>
  );
}