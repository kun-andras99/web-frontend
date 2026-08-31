import UserAvatar from "@/features/_components/user/avatar";
import { ManageUsersRelation } from "@/features/inbox/types/manage-users-filter.types";
import { ManageUsers } from "@/features/inbox/types/manage-users.types";

interface LoadManageUsersBoxProps {
    manageUsers: ManageUsers[];
}

const relationConfig = {
    [ManageUsersRelation.FAVORITES]: {
        label: "Favorites",
    },
    [ManageUsersRelation.FRIENDS]: {
        label: "Friends",
    },
    [ManageUsersRelation.BLOCKED]: {
        label: "Blocked",
    },
};

export default function LoadManageUsersBox({
    manageUsers,
}: LoadManageUsersBoxProps) {
    return (
        <div className="manage-users-list">
            {manageUsers.map((user) => (
                <div key={user.id} className="user">
                    <UserAvatar avatar={user.avatar} alt={``} size={56} />
                    <div className="content">
                        <span>{user.nickname}</span>
                        <div>
                            {user.relations.map((relation) => {
                                return (
                                    <span key={relation}>
                                        {relationConfig[relation].label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
