import Image from "next/image";

type NavigationAvatarProps = {
    avatarUrl?: string | null;
    cls?: string | null;
};

export default function BottomNavigationIcon({
    avatarUrl,
    cls,
}: NavigationAvatarProps) {
    if (avatarUrl) {
        return (
            <Image
                src={avatarUrl}
                alt="Profile"
                width={28}
                height={28}
                className={`navigation-avatar rounded-full ${cls}`}
            />
        );
    }

    return (
        <Image
            src={avatarUrl || "/assets/images/user-blank-1.png"}
            alt="Profile"
            width={26}
            height={26}
            className={`navigation-avatar rounded-full ${cls}`}
        />
    );
}
