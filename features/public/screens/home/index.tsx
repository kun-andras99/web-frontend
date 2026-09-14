import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export default function HomeScreen() {
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
            </section>
        </>
    );
}
