import UserAvatar from "@/features/(app)/(ui)/UserAvatar";

interface DrawerImageButtonProps {
    avatarUrl: string | null;
    nickname: string | null;
}

export default function DrawerImageButton({
    avatarUrl,
    nickname,
}: DrawerImageButtonProps) {
    return (
        <div>
            <UserAvatar
                url={avatarUrl ?? "/assets/images/user-blank-1.png"}
                size={50}
                alt={nickname ?? ""}
                className="classname"
            />
            <div className="menu-circle">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
