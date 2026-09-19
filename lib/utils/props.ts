import { SessionUser } from "@/features/auth/types/auth-index";
import { ReactNode } from "react";
import { Prisma } from "../../prisma/generated/prisma";

export interface SessionUserProps {
    user: SessionUser | null;
}

export type CurrentUser = Prisma.UsersGetPayload<{
    include: {
        id: true;
        email: true;
        username: true;
        emailVerified: true;
        userData: true;
        userPreference: true;
    };
}>;

export interface ChildrenProp {
    children: ReactNode;
}
