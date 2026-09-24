"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useFormStatus } from "react-dom";

type AuthButtonProps = ComponentPropsWithoutRef<"button"> & {
    pendingText?: string;
    width?: string;
    className?: string;
    variant?: "fill" | "outline";
};

export default function AuthButton({
    children,
    className,
    pendingText,
    disabled,
    type = "button",
    variant = "fill",
    ...props
}: AuthButtonProps) {
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
