import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarImage,
} from "@/features/_components/ui/avatar";

export default function ImageAvatarGroup() {
    return (
        <div className="more-than">
            <AvatarGroup>
                <Avatar className="size-[44px]">
                    <AvatarImage
                        src="./assets/images/user-blank-1.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
                <Avatar className="size-[44px]">
                    <AvatarImage
                        src="./assets/images/user-blank-2.png"
                        alt="@maxleiter"
                    />
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
                <Avatar className="size-[44px]">
                    <AvatarImage
                        src="./assets/images/user-blank-3.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
                <Avatar className="size-[44px]">
                    <AvatarImage
                        src="./assets/images/user-blank-4.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
            </AvatarGroup>
            <div className="text">
                Több mint 150.000{" "}
                <p>
                    <span>aktív</span> felhasználó vár rád!
                </p>
            </div>
        </div>
    );
}
