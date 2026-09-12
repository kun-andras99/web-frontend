"use client";

import { useAuth } from "@/features/auth/components/auth-provider";
import Image from "next/image";
import Link from "next/link";

export default function UserProfileBox() {
    const user = useAuth();

    return (
        <Link href={``}>
            <div className="user-profile-box">
                <Image
                    className="rounded-full "
                    src={`/assets/images/user-blank-1.png`}
                    width={52}
                    height={52}
                    alt={``}
                />
                <div className="data">
                    <span className="username">{user?.username}</span>
                </div>
            </div>
        </Link>
    );
}
