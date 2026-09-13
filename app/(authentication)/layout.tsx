import AuthLayout from "@/features/_components/layout/AuthLayout";
import { getCurrentUser } from "@/features/auth/lib/session";
import { ChildrenProp } from "@/lib/utils/props";
import Link from "next/link";

export default async function AuthenticationLayout({ children }: ChildrenProp) {
        const user = await getCurrentUser();
    
    return (
        <AuthLayout user={user}>
            <Link href={`/`}>Vissza a kezdőlapra</Link>
            {children}
        </AuthLayout>
    );
}
