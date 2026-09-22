"use client";

export default function LogoutButton({
    action,
    className,
}: {
    action: () => Promise<void>;
    className?: string;
}) {
    return (
        <form action={action}>
            <button type="submit" className={className}>
                Log out
            </button>
        </form>
    );
}
