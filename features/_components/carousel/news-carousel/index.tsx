"use client";

import { ALL_NEWS } from "@/features/_components/carousel/news-carousel/data/news";
import useNewsCarousel from "@/features/_components/carousel/news-carousel/hooks/useNewsCarousel";
import { getDailySeed } from "@/features/_components/carousel/news-carousel/lib/getDailySeed";
import { getRandomItems } from "@/features/_components/carousel/news-carousel/lib/getRandomItems";
import Image from "next/image";
import { useState } from "react";

export default function NewsCarousel() {
    const [newsItems] = useState(() =>
        getRandomItems(ALL_NEWS, 3, getDailySeed()),
    );

    const carousel = useNewsCarousel(newsItems);

    const formattedDate = new Intl.DateTimeFormat("hu-HU", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(carousel.currentItem.dateTime);
    return (
        <div className="image-carousel">
            <div
                className="new-view"
                onTouchStart={carousel.handleTouchStart}
                onTouchEnd={carousel.handleTouchEnd}>
                {/* Image with Gradient Overlay */}

                <div className="image-view">
                    <Image
                        width={900}
                        height={340}
                        src={carousel.currentItem.imageUrl}
                        alt={carousel.currentItem.title}
                        className="w-full h-full object-cover object-center transition-all duration-500"
                    />
                </div>

                {/* Gradient Overlay */}

                {/* Content */}
                <div className="layer"></div>

                <div className="content">
                    <div className="">
                        <h2 className="leading-tight">
                            {carousel.currentItem.title}
                        </h2>
                        <p className="text-white/90 text-sm line-clamp-2">
                            {carousel.currentItem.description}
                        </p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </div>
            <div className="carousel-pictures transition-all duration-500">
                {newsItems.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => carousel.goToSlide(index)}
                            className={`pic transition-all duration-500 ${
                                index !== carousel.currentIndex && "inactive"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={
                                index === carousel.currentIndex
                                    ? "true"
                                    : undefined
                            }>
                            <Image
                                width={90}
                                height={125}
                                src={item.imageUrl}
                                alt={item.title}
                                className={`w-full h-full object-cover object-center  transition-all duration-500`}
                            />
                            <p className="title">
                                {item.title.slice(0, 13)}...
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
