import { cloneElement } from "react";

import { TopTabScreen } from "@/features/navigations/app-top-bar/types/top-tab.types";

interface TopTabItemProps {
    item: TopTabScreen;
    isActive: boolean;
}

export default function TopTabItem({ item, isActive }: TopTabItemProps) {
    return (
        <div>
            <div className="icon-drop">
                {item.icon &&
                    cloneElement(item.icon, {
                        startColor: isActive ? "#00bdff" : "#e0e0e0",
                        stopColor: isActive ? "#00bdff" : "#e0e0e0",
                    })}
            </div>
            {isActive && (
                <span className="whitespace-nowrap">{item.title}</span>
            )}
        </div>
    );
}
