import UserAvatar from "@/features/(app)/(ui)/UserAvatar";
import { UserHeaderDatasDTO } from "@/features/user/types/user";
import Link from "next/link";

interface DrawerUserCardProps {
    user: UserHeaderDatasDTO;
}

export default function DrawerUserCard({ user }: DrawerUserCardProps) {
    return (
        <Link href={`/profile/${user.id}`}>
            <div className="drawer-user-card">
                <UserAvatar
                    url={user.avatarUrl ?? "/assets/images/user-blank-1.png"}
                    size={50}
                    alt={user.nickname ?? ""}
                    className=""
                />
                <div className="drawer-user-card__content">
                    <h2>{user.nickname}</h2>
                    <p>{`${user.gender} - ${user.sexuality}`}</p>
                    <p>{`${user.countryCode} - ${user.region}`}</p>
                </div>
            </div>
        </Link>
    );
}
