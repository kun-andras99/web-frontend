/**
 * - blocked - favorites - friends - etc..
 * @returns
 */

import { manageUsers } from "@/features/(main-menus)/inbox/data/manage-users.data";
import ManageUsersScreen from "@/features/(main-menus)/inbox/screens/manage-users";

export default function ManageUsersPage() {
    return <ManageUsersScreen manageUsers={manageUsers} />;
}
