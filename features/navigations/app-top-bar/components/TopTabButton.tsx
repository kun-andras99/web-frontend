import { TopBarAction } from "@/features/navigations/app-top-bar/types/top-tab.types";
import Link from "next/link";

interface TopBarActionButtonProps {
    action: TopBarAction;
}

export default function TopTabButton({ action }: TopBarActionButtonProps) {
    const content = (
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 active:bg-gray-200">
            {action.icon}
        </span>
    );

    if (action.href) {
        return (
            <Link href={action.href} aria-label={action.label}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={action.onClick}
            aria-label={action.label}>
            {content}
        </button>
    );
}
