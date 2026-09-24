"use client";

import { NewsItem } from "@/features/(app)/(ui)/carousel/news-carousel/types/NewsType";
import { useEffect, useRef, useState } from "react";

export default function useNewsCarousel(items: NewsItem[]) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleNext = () => {
        setDirection("left");

        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setDirection("right");

        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToSlide = (index: number) => {
        if (index === currentIndex) return;

        setDirection(index > currentIndex ? "left" : "right");

        setCurrentIndex(index);
    };

    // Automatikus váltás 5 másodpercenként
    useEffect(() => {
        if (items.length <= 1) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [items.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].screenX;

        handleSwipe();
    };

    const handleSwipe = () => {
        const difference = touchStartX.current - touchEndX.current;

        const isLeftSwipe = difference > 50;
        const isRightSwipe = difference < -50;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    return {
        currentIndex,
        direction,
        handleNext,
        handlePrev,
        goToSlide,
        handleTouchStart,
        handleTouchEnd,
        currentItem: items[currentIndex],
    };
}
