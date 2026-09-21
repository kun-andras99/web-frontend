"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useFormStatus } from "react-dom";

type AppButtonProps = ComponentPropsWithoutRef<"button"> & {
    pendingText?: string;
    width?: string;
    className?: string;
    variant?: "fill" | "outline";
    starter?: boolean;
};

export default function AppButton({
    children,
    width = "100%",
    className,
    pendingText,
    disabled,
    type = "button",
    variant = "fill",
    starter = false,
    ...props
}: AppButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            className={className}
            style={{
                width: width,
            }}
            type={type}
            disabled={pending || disabled}
            aria-busy={pending}
            {...props}>
            <div
                className={
                    starter ? "starter-button-container" : "button-container"
                }>
                <div className={variant}>
                    {pending ? pendingText : children}
                </div>
            </div>
        </button>
    );
}
