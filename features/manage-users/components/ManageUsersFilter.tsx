import type {
    ManageCountsDTO,
    ManageFilter,
} from "../schemas/manage-users.schema";
import { FILTER_OPTIONS } from "../utils/status";

interface ManageUsersFiltersProps {
    active: ManageFilter;
    counts: ManageCountsDTO | null;
    onChange: (filter: ManageFilter) => void;
}

export default function ManageUsersFilters({
    active,
    counts,
    onChange,
}: ManageUsersFiltersProps) {
    return (
        <div role="group" aria-label="Szűrés" className="flex flex-wrap ">
            {FILTER_OPTIONS.map(({ value, label }) => {
                const isActive = value === active;

                return (
                    <button
                        key={value}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => onChange(value)}
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                            isActive
                                ? "bg-white text-black"
                                : "bg-white/10 text-white/80 hover:bg-white/15"
                        }`}>
                        {label}
                        {counts && (
                            <span className="opacity-60">{counts[value]}</span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
