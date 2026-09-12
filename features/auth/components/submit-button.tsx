"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = ComponentPropsWithoutRef<"button"> & {
    pendingText?: string;
    className?: string;
};

export function SubmitButton({
    children,
    className,
    pendingText = "Feldolgozás…",
    disabled,
    ...props
}: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            className={className}
            type="submit"
            disabled={pending || disabled}
            aria-busy={pending}
            {...props}>
            {pending ? pendingText : children}
        </button>
    );
}
