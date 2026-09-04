import TopLayout from "@/features/_components/ui/top-layout";
import { ReactNode } from "react";

export default function InboxLayout({ children }: { children: ReactNode }) {
    return <TopLayout>{children}</TopLayout>;
}
