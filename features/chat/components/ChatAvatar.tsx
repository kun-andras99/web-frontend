import Image from "next/image";

export default function ChatAvatar({
    name,
    src,
    className = "h-[64px] w-[64px]",
}: {
    name: string | null;
    src: string | null;
    className?: string;
}) {
    return (
        <div
            className={`relative shrink-0 overflow-hidden rounded-full bg-white/10 ${className}`}>
            {src ? (
                <Image
                    src={src}
                    alt={name ?? "Profilkép"}
                    fill
                    sizes="62px"
                    className="object-cover"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center font-semibold text-white/50">
                    {name?.charAt(0).toUpperCase() ?? "?"}
                </div>
            )}
        </div>
    );
}
