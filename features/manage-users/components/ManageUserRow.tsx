import UserAvatar from "@/features/(app)/(ui)/UserAvatar";
import Link from "next/link";
import type { ManagedUserDTO } from "../schemas/manage-users.schema";
import StatusBadge from "./StatusBadge";

interface ManagedUserRowProps {
    user: ManagedUserDTO;
    onEdit: (userId: string) => void;
}

export default function ManagedUserRow({ user, onEdit }: ManagedUserRowProps) {
    const name = user.nickname ?? "Névtelen";

    return (
        <li className="flex items-center flex-col ">
            <Link
                href={`/profile/${user.id}`}
                prefetch={false}
                className="flex min-w-0 w-full flex-col flex-1 items-center gap-3">
                <UserAvatar
                    url={user.avatarUrl ?? "/assets/images/user-blank-1.png"}
                    alt={name}
                    className="w-[110px]"
                />

                {/* keskeny képernyőn egymás alatt, szélesen egy sorban */}
                <div className="flex min-w-0 w-full flex-1 flex-col ">
                    <span className="truncate text-sm font-semibold text-white">
                        {name}
                    </span>
                    <div className="flex flex-wrap gap-0.5">
                        {user.statuses.map((status) => (
                            <StatusBadge key={status} status={status} />
                        ))}
                    </div>
                </div>
            </Link>

            <button
                type="button"
                onClick={() => onEdit(user.id)}
                aria-label={`Szerkesztés: ${name}`}
                className="shrink-0 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-white/15">
                Szerkesztés
            </button>
        </li>
    );
}
