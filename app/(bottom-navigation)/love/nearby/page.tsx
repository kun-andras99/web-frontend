import UsersNearbyScreen from "@/features/(main-menus)/love/screens/users-nearby";
import { getAllUsers } from "@/features/user/user-api";

export default async function ExploreNearbyPage() {
    const users = await getAllUsers();
    console.info(users);
    return <UsersNearbyScreen users={users} />;
}
