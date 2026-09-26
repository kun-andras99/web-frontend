"use client";

import { useCurrentUserFull } from "@/features/auth/hooks/useCurrentUserFull";
import { useUserHeaderDatas } from "@/features/user/hooks/useUserHeaderDatas";
import Image from "next/image";
type UserProfileProps = {
    userId: string;
};

type FormatDateOptions = {
    showDay?: boolean;
    showMonth?: boolean;
    showYear?: boolean;
};

export function formatDate(
    date: Date | string | null,
    options: FormatDateOptions = {},
): string {
    const { showDay = true, showMonth = true, showYear = true } = options;

    if (!date) {
        return "";
    }

    const parsedDate = date instanceof Date ? date : new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }

    return new Intl.DateTimeFormat("hu-HU", {
        day: showDay ? "numeric" : undefined,
        month: showMonth ? "long" : undefined,
        year: showYear ? "numeric" : undefined,
    }).format(parsedDate);
}

export default function MeUserHeader({ userId }: UserProfileProps) {
    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useUserHeaderDatas(userId);
    const { data: fulluser } = useCurrentUserFull();
    console.log(fulluser);
    if (isLoading) {
        return <div>Betöltés...</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <div>
            <Image
                src={user.avatarUrl ?? "/assets/images/user-blank-1.png"}
                alt={"van"}
                width={70}
                height={70}
                loading="eager"
            />
            <p>{user.nickname}</p>
            <p>{user.gender}</p>
            <p>
                {formatDate(user.birth, {
                    showDay: false,
                })}
            </p>
            <p>{user.sexuality}</p>
            <p>{user.bio}</p>
            <p>{user.appCity}</p>
            <p>{user.countryCode}</p>
            <p>{user.region}</p>
            <p>{user.city}</p>
            <p>profilt létrehozta: {formatDate(fulluser.createdAt)}</p>
        </div>
    );
}
