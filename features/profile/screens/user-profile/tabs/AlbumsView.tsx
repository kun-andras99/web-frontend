import { SubmitButton } from "@/features/auth/components/submit-button";
import ProfileTabPanel from "@/features/profile/components/profile-tab-panel";

export default function AlbumsView() {
    return (
        <ProfileTabPanel>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <p className="font-extrabold uppercase">No albums yet.</p>
                <p className="py-[15px] max-w-[80%] text-[14px] text-[#909090]">
                    Create your first album and show others what makes you, you.
                </p>
                <SubmitButton pendingText="Registrating...">
                    <div className="auth-r">
                        <div className="b">Create first album</div>
                    </div>
                </SubmitButton>
            </div>
        </ProfileTabPanel>
    );
}
