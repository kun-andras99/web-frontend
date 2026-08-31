"use client";

import { ReactNode } from "react";

export interface FilterOption<T extends string> {
    value: T;
    label: ReactNode;
}
interface FilterBoxProps<T extends string> {
    value: T;
    options: FilterOption<T>[];
    clickChange: (value: T) => void;
    className?: string;
}

export default function FilterBox<T extends string>({
    value,
    options,
    clickChange,
    className = "",
}: FilterBoxProps<T>) {
    return (
        <div className={`filter-message-box ${className}`}>
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    onClick={() => clickChange(option.value)}
                    data-active={value === option.value}>
                    {" "}
                    {option.label}{" "}
                </button>
            ))}
        </div>
    );
}
