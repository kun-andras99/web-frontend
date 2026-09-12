"use client";

type BubbleBackgroundProps = {
    count?: number;
    className?: string;
};

export function BubbleBackground({
    count = 20,
    className = "",
}: BubbleBackgroundProps) {
    const bubbles = Array.from({ length: count }, (_, index) => {
        const size = 40 + ((index * 37) % 120);
        const left = (index * 47) % 100;
        const delay = -((index * 3.7) % 20);
        const duration = 15 + ((index * 5) % 15);
        const opacity = 0.08 + ((index * 13) % 25) / 100;

        return {
            size,
            left,
            delay,
            duration,
            opacity,
        };
    });

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            {bubbles.map((bubble, index) => (
                <span
                    key={index}
                    className="bubble"
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: `${bubble.left}%`,
                        animationDelay: `${bubble.delay}s`,
                        animationDuration: `${bubble.duration}s`,
                        opacity: bubble.opacity,
                    }}
                />
            ))}
        </div>
    );
}
