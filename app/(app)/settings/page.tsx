// app/settings/page.tsx

import BackHeader from "@/features/(app)/navigations/back-header";
import Link from "next/link";

export default function SettingsPage() {
    return (
        <div>
            <BackHeader title="Beállítások" />
            {/* tartalom */}
            <Link href="/settings/user">User beállítások</Link>
        </div>
    );
}
