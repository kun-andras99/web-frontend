import { ManageUsers } from "@/features/inbox/types/manage-users.types";
import Image from "next/image";

interface LoadManageUsersBoxProps {
    manageUsers: ManageUsers[];
}

export default function LoadManageUsersBox({
    manageUsers,
}: LoadManageUsersBoxProps) {
    return (
        <div className="messages-list">
            {manageUsers.map((user) => (
                <div key={user.id} className="message">
                    <div>
                        <Image
                            src={user.avatar}
                            alt={``}
                            width={40}
                            height={40}
                        />
                        <div>
                            <span>{user.nickname}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
