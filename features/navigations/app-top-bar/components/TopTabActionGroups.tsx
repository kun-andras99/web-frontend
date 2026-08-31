import TopTabButton from "@/features/navigations/app-top-bar/components/TopTabButton";
import { TopBarAction } from "@/features/navigations/app-top-bar/types/top-tab.types";

interface TopBarActionsGroupProps {
    actions: TopBarAction[];
}

export default function TopBarActionsGroup({
    actions,
}: TopBarActionsGroupProps) {
    if (!actions.length) return null;

    return (
        <div className="flex flex-shrink-0 items-center gap-1">
            {actions.map((action) => (
                <TopTabButton key={action.id} action={action} />
            ))}
        </div>
    );
}
