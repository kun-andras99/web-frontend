import { SessionUser } from "@/features/auth/types/auth-index";
import { ReactNode } from "react";

export interface SessionUserProps {
    user: SessionUser | null;
}

export interface ChildrenProp {
    children: ReactNode;
}
