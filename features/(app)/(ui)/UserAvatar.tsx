import Image from "next/image";

interface UserAvatarProps {
    url: string;
    alt: string;
    size?: number;
    className?: string;
}

export default function UserAvatar({
    url,
    alt = "",
    size = 50,
    className = "",
}: UserAvatarProps) {
    return (
        <Image
            src={url}
            alt={alt}
            width={size}
            height={size}
            className={`object-cover ${className}`}
        />
    );
}
