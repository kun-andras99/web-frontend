"use client";

import Image from "next/image";

export default function RightNowScreen() {
    return (
        <>
            <div className="page-top">
                <div>
                    <span>Moments</span>
                    <span>Right now</span>
                    <span>Auction</span>
                    <span>KamaftuX</span>
                </div>
            </div>
            <div className="selection">
                {Array.from({ length: 60 }).map((_, index) => (
                    <Image
                        key={index}
                        src={`https://i.pravatar.cc/400?img=${index + 1}`}
                        alt={`Image ${index + 1}`}
                        width={120}
                        height={120}
                        className="selection-image"
                    />
                ))}
            </div>
        </>
    );
}
