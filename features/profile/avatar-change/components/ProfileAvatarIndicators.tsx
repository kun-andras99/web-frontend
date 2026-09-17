"use client";

interface ProfileAvatarIndicatorsProps {
    count: number;
    activeIndex: number;
    onSelect: (index: number) => void;
}

export function ProfileAvatarIndicators({
    count,
    activeIndex,
    onSelect,
}: ProfileAvatarIndicatorsProps) {
    return (
        <div
            className="indicator-container"
            role="group"
            aria-label="Profile avatar selection">
            {Array.from({ length: count }, (_, index) => {
                const isActive = activeIndex === index;

                return (
                    <button
                        key={index}
                        type="button"
                        className={`indicator ${
                            isActive ? "active-indicator" : ""
                        }`}
                        onClick={() => onSelect(index)}
                        aria-label={`Select avatar ${index + 1}`}
                        aria-pressed={isActive}
                    />
                );
            })}
        </div>
    );
}
