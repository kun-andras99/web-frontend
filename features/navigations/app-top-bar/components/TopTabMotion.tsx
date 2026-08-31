"use client";

import useTopTabSwipe from "@/features/navigations/app-top-bar/hooks/useTopTabSwipe";
import { motion } from "framer-motion";
import type {
    ReactNode
} from "react";


interface TopTabMotionProps {
  children: ReactNode;

  activeIndex: number;
  tabCount: number;

  onNext: () => void;
  onPrevious: () => void;

  threshold?: number;
}

export function TopTabMotion({
  children,
  activeIndex,
  tabCount,
  onNext,
  onPrevious,
  threshold = 80,
}: TopTabMotionProps) {
  const { handleDragEnd } = useTopTabSwipe({
    currentIndex,
    onPrevious,
    threshold,
  });

  return (
    <motion.div
      className="
        min-h-0
        w-full
        flex-1
        touch-pan-y
      "
      drag="x"
      dragDirectionLock
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragElastic={0.15}
      onDragEnd={handleDragEnd}
      whileDrag={{
        cursor: "grabbing",
      }}
    >
      {children}
    </motion.div>
  );
}