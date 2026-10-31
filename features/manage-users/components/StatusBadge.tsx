import type { RelationStatus } from "../schemas/manage-users.schema";
import { STATUS_CLASSES, STATUS_LABELS } from "../utils/status";

export default function StatusBadge({ status }: { status: RelationStatus }) {
    return (
        <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATUS_CLASSES[status]}`}>
            {STATUS_LABELS[status]}
        </span>
    );
}
