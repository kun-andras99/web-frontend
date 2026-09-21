"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useFormStatus } from "react-dom";

type AppButtonProps = ComponentPropsWithoutRef<"button"> & {
    pendingText?: string;
    width?: string;
    className?: string;
    variant?: "fill" | "outline";
};

export default function AppButton({
    children,
    className,
    pendingText,
    disabled,
    type = "button",
    variant = "fill",
    ...props
}: AppButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            className={className}
            type={type}
            disabled={pending || disabled}
            aria-busy={pending}
            {...props}>
            <div className={variant}>{pending ? pendingText : children}</div>
        </button>
    );
}
