import { SubmitButton } from "@/features/auth/components/submit-button";
import { TabContentProps } from "@/features/profile/(pages)/user-profile/tabs/StatisticsTabView";

export default function AlbumsView({ user }: TabContentProps) {
    return (
        <div className="">
            <p className="font-extrabold uppercase">No albums yet.</p>
            <p className="">
                Create your first album and show others what makes you, you.
            </p>
            <SubmitButton pendingText="Registrating...">
                <div className="auth-r">
                    <div className="b">Create first album</div>
                </div>
            </SubmitButton>
        </div>
    );
}
