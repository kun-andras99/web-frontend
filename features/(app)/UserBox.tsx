"use client";

import Image from "next/image";
import { ReactNode } from "react";

type UserBoxProps<T> = {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
};

export default function UserBox() {
    return (
        <div className="test-container">
            {Array.from({ length: 100 }).map((_, index) => {
                const isEven = index % 3 === 0;
                return (
                    <div
                        className={`test-item ${isEven ? "test-item-white" : ""}`}
                        key={index}>
                        <Image
                            src={`/assets/images/user-blank-1.png`}
                            alt={`Image ${index}`}
                            width={58}
                            height={58}
                            className="rounded-full"
                        />
                        <div className="test-content">
                            <h2>küldte</h2>
                            <p>üzenet tartalma...</p>
                        </div>
                        <div className="test-time">
                            <span>12 perce</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
