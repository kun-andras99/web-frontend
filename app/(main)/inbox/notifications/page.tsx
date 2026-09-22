import { getCurrentUser } from "@/features/auth/lib/session";
import NotificationsScreen from "@/features/notification/screen";
import { prisma } from "@/lib/prisma";

export default async function NotificationsPage() {
    const currentUser = await getCurrentUser();
    

    return <NotificationsScreen user={currentUser}  />;
}
