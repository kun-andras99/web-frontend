import QuickLoginForm from "@/features/(app)/navigations/body-sidebar/components/QuickLoginForm";

import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import ImageAvatarGroup from "@/features/image-avatar-group";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="main-container">
            <span className="logo-text">
                <h1>KAMAFTU</h1>
                <span>People. Places. Connections.</span>
            </span>
            <QuickLoginForm />
            <div className="not-registered">
                <p>Do not have an account?</p>
                <Link href={AUTH_ROUTES.signUp}>Click here to register</Link>
            </div>
            <ImageAvatarGroup />
        </div>
    );
}
