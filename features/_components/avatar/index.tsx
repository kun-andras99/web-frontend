import Image from "next/image";

interface UserAvatarProps {
    avatar: string;
    alt: string;
    size?: number;
    className?: string;
}

export default function UserAvatar({
    avatar,
    alt = "avatar alt",
    size = 40,
    className = "",
}: UserAvatarProps) {
    return (
        <div
            className={`relative ${className}`}
            style={{
                width: size,
                height: size,
            }}>
            <Image
                src={avatar}
                alt={alt}
                fill
                sizes={`${size}px`}
                className="object-cover"
            />
        </div>
    );
}
