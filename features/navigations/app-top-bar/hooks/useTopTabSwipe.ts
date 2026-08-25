"use client";

import type { PanInfo } from "framer-motion";

interface UseTopTabSwipeOptions {
  activeIndex: number;
  tabCount: number;
  onNext: () => void;
  onPrevious: () => void;
  threshold?: number;
}

export function useTopTabSwipe({
  activeIndex,
  tabCount,
  onNext,
  onPrevious,
  threshold = 80,
}: UseTopTabSwipeOptions) {
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    const shouldSwipe =
      Math.abs(offsetX) >= threshold ||
      Math.abs(velocityX) >= 500;

    if (!shouldSwipe) {
      return;
    }

    if (offsetX < 0 && activeIndex < tabCount - 1) {
      onNext();
      return;
    }

    if (offsetX > 0 && activeIndex > 0) {
      onPrevious();
    }
  };

  return {
    handleDragEnd,
  };
}