import Image from "next/image";

interface UserAvatarProps {
    url: string | null;
    alt: string | null;
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
        <div className={`relative shrink-0 overflow-hidden rounded-[10px]`}>
            {url ? (
                <Image
                    src={url}
                    alt={alt ?? ""}
                    width={size}
                    height={size}
                    className={`rounded-[10px] object-cover ${className}`}
                />
            ) : (
                <div
                    aria-hidden
                    className="flex h-full w-full items-center justify-center text-sm font-semibold text-white/50"></div>
            )}
        </div>
    );
}
