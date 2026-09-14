"use client";

import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import TopFilter from "@/features/_components/ui/top-filter";
import groupsMock from "@/features/_lib/mock/groupsMock";
import usersMock from "@/features/_lib/mock/usersMock";
import Image from "next/image";

export default function GroupsScreen() {
    return (
        <BottomPageWrapper>
            <TopFilter>
                <div className="filters">
                    <div className="filter">.</div>
                    <div className="filter">Near</div>
                    <div className="filter">Country</div>
                    <div className="filter">Category</div>
                    <div className="filter active">Tags</div>
                    <div className="filter">Gender</div>
                </div>
            </TopFilter>
            <div>
                <h2 className="small-title">Csoportok</h2>
                <div className="groups-list">
                    {groupsMock.map((group) => {
                        const admin = usersMock.find(
                            (user) => user.id === group.ownerId,
                        );

                        const memberCount = group.members.length;

                        return (
                            <article key={group.id} className="group-card">
                                <div className="group-card-image">
                                    <Image
                                        src={
                                            admin?.userData?.avatarUrl ??
                                            "/assets/images/user-blank-1.png"
                                        }
                                        alt={group.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <div className="group-card-content">
                                    <h3>{group.name}</h3>

                                    <p>{group.description}</p>

                                    <div className="group-card-meta">
                                        <span>
                                            {memberCount}{" "}
                                            {memberCount === 1 ? "tag" : "tag"}
                                        </span>

                                        <span>
                                            Admin:{" "}
                                            {admin?.userData?.nickname ??
                                                admin?.username ??
                                                "Ismeretlen"}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </BottomPageWrapper>
    );
}
