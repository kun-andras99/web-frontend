import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export default function HomeScreen() {
    return (
        <>
            {/* <section className="home-news">
                    <NewsCarousel />
                </section> */}
            <section className="main">
                <p>main here</p>
                <p>
                    <Link href={AUTH_ROUTES.signIn}>Login here</Link>
                </p>
                <p>
                    <Link href={AUTH_ROUTES.signUp}>Register</Link>
                </p>
            </section>
        </>
    );
}
