import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";

export default function SharedAlbumsPage() {
    return (
        <BottomPageWrapper>
            <div className="page-top-filter">
                <div className="blur-pic-container">
                    <div className="blur-btn">b</div>
                    <div className="blur-btn active">n</div>
                </div>
                <div className="separator"></div>
                <div className="filters">
                    <div className="filter">x</div>
                    <div className="filter active">Online</div>
                    <div className="filter">Video</div>
                </div>
            </div>
            <h2 className="small-title">UPDATES</h2>
            <div className="first-shared-row">
                <div className="shared-box box-inactive">
                    <p>+</p>
                    <span>update your album</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
            </div>
            <h2 className="small-title">ALL ALBUMS</h2>
            <div className="second-shared-row">
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <span>username</span>
                </div>
            </div>
        </BottomPageWrapper>
    );
}
