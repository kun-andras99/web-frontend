/**
 * - blocked - favorites - friends - etc..
 * @returns
 */

import { manageUsers } from "@/features/inbox/data/manage-users.data";
import ManageUsersScreen from "@/features/inbox/screens/manage-users";

export default function ManageUsersPage() {
    return <ManageUsersScreen manageUsers={manageUsers} />;
}
