interface FormMessageProps {
    status: "error" | "success";
    message: string;
    className?: string;
}

export function FormMessage({ status, message, className }: FormMessageProps) {
    return (
        <p
            className={className}
            role={status === "error" ? "alert" : "status"}
            data-status={status}>
            {message}
        </p>
    );
}
