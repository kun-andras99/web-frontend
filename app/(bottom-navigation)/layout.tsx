import BottomLayout from "@/features/_components/ui/bottom-layout";
import { ReactNode } from "react";
export default function BottomTabLayout({ children }: { children: ReactNode }) {
    return <BottomLayout>{children}</BottomLayout>;
}
