import type { GroupDetailDTO } from "../../schemas/groups.schema";
import { formatShortDate } from "../../utils/group-ui";

function Stat({
    value,
    label,
    alert = false,
}: {
    value: string | number;
    label?: string;
    alert?: boolean;
}) {
    return (
        <div className={alert ? "gd-stat gd-stat--alert" : "gd-stat"}>
            {value ?? <span className="gd-stat-value">{value}</span>}
            <span className="gd-stat-label">{label}</span>
        </div>
    );
}

export default function GroupStats({ group }: { group: GroupDetailDTO }) {
    const { pendingRequestCount } = group;

    return (
        <section className="gd-stats" aria-label="Csoport statisztikák">
            <Stat value={group.memberCount} />
            <Stat value={formatShortDate(group.createdAt)} />
            {pendingRequestCount !== null && (
                <Stat
                    value={pendingRequestCount}
                    label="Függő kérelem"
                    alert={pendingRequestCount > 0}
                />
            )}
        </section>
    );
}
