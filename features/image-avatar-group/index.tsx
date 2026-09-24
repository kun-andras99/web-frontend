import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarImage,
} from "@/features/(app)/(ui)/shadcn/ui/avatar";

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
                <p>
                    More than 150,000 <span>active</span>
                </p>
                <p>users are waiting for you!</p>
            </div>
        </div>
    );
}
