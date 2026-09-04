"use client";

import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import TopFilter from "@/features/_components/ui/top-filter";

export default function BlogsScreen() {
    return (
        <BottomPageWrapper>
            <TopFilter>
                <div className="filters">
                    <div className="filter">.</div>
                    <div className="filter">Near</div>
                    <div className="filter">Country</div>
                    <div className="filter">Category</div>
                    <div className="filter active">Tags</div>
                    <div className="filter">Blocked</div>
                </div>
            </TopFilter>

            <div>
                <h2 className="small-title">Blogok</h2>
            </div>
        </BottomPageWrapper>
    );
}
