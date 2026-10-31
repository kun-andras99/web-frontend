import DrawerUserCardInput from "@/features/(app)/(ui)/drawer/DrawerUserCardInput";
import UserAvatar from "@/features/(app)/(ui)/UserAvatar";
import { MainProfileDatasDTO } from "@/features/user/types/user";
import { Dot, Ghost, Settings, Shield } from "lucide-react";
import Link from "next/link";

interface DrawerUserCardProps {
    user: MainProfileDatasDTO;
}

export default function DrawerUserCard({ user }: DrawerUserCardProps) {
    const saveNickname = async (nickname: string) => {
        // Cseréld a saját API-végpontodra.
        const response = await fetch("/api/user/profile/nickname", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nickname }),
        });

        if (!response.ok) {
            throw new Error("A becenév mentése nem sikerült.");
        }
    };
    return (
        <div className="drawer-user-card">
            <Link href={`/profile/${user.id}`}>
                <UserAvatar
                    url={user.avatarUrl ?? "/assets/images/user-blank-1.png"}
                    size={50}
                    alt={user.nickname ?? ""}
                    className=""
                />
            </Link>
            <div className="drawer-user-card__content">
                <DrawerUserCardInput
                    nickname={user.nickname ?? ""}
                    onSave={saveNickname}
                />
            </div>
            <div className="drawer-user-card__items">
                <div className="items">
                    <div className="verified">
                        <Shield size={20} strokeWidth={1.7} />
                    </div>
                    <div className="settings">
                        <Settings size={20} strokeWidth={1.7} />
                    </div>
                </div>
                <div className="content">
                    <div className="bar">
                        <Dot
                            size={20}
                            strokeWidth={1.7}
                            color="var(--main-menu-h2)"
                        />
                    </div>
                    <div className="bar active">
                        <Ghost size={20} strokeWidth={1.7} />
                    </div>
                </div>
            </div>
        </div>
    );
}
