"use client";

import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import { useUsers } from "@/features/user/api/useUsers";
import Link from "next/link";

export default function HomeScreen() {
    const { data: users, isLoading, isError } = useUsers();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Failed to load users.</div>;
    }

    return (
        <>
            {/* <section className="home-news">
                    <NewsCarousel />
                </section> */}
            <section className="main">
                <div className="button-group">
                    <Link href={AUTH_ROUTES.signIn}>
                        <div className="auth-r">
                            <div className="r">Login</div>
                        </div>
                    </Link>
                    <Link href={AUTH_ROUTES.signUp}>
                        <div className="auth-r">
                            <div className="b">Register</div>
                        </div>
                    </Link>
                </div>
                <div>
                    {users?.map((user) => (
                        <div key={user.id}>{user.username}</div>
                    ))}
                </div>
            </section>
        </>
    );
}
