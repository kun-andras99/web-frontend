import type { ManageFilter } from "../schemas/manage-users.schema";
import { EMPTY_MESSAGES } from "../utils/status";

export default function ManageUsersEmpty({ filter }: { filter: ManageFilter }) {
    return (
        <div className="flex min-h-[220px] items-center justify-center px-5 text-center text-sm text-white/40">
            {EMPTY_MESSAGES[filter]}
        </div>
    );
}
