"use client";

export default function LogoutButton({
    action,
    className,
}: {
    action: () => Promise<void>;
    className?: string;
}) {
    return (
        <div className="logout-container">
            <form action={action}>
                <button type="submit" className={className}>
                    Log out
                </button>
            </form>
        </div>
    );
}
