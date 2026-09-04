/**
 * - blocked - favorites - friends - etc..
 * @returns
 */

import ManageUsersScreen from "@/features/(main-menus)/inbox/screens/manage-users";

import { manageUsers } from "@/features/(main-menus)/inbox/data/manage-users.data";
// import ManageUsersScreen from "@/features/(main-menus)/inbox/screens/manage-users";

export default function ManageUsersPage() {
    return <ManageUsersScreen manageUsers={manageUsers} />;
}
