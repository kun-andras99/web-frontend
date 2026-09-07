"use client";

import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import TopFilter from "@/features/_components/ui/top-filter";
import ViewChange from "@/features/_components/ui/view-change";
import { useScreenStore } from "@/features/_store/screen.store";
import { useAuth } from "@/features/auth/components/auth-provider";
import Image from "next/image";

export default function VisitorsScreen() {
    const { display } = useScreenStore();
    const user = useAuth();

    return (
        <BottomPageWrapper>
            <div className="bottom-page">
                <TopFilter>
                    <ViewChange />
                </TopFilter>
                <div className={`screen-view ${display} `}>
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div
                            key={index}
                            className={
                                display === "smal-grid-view"
                                    ? "small-view"
                                    : display === "big-grid-view"
                                      ? "big-view"
                                      : display === "list-grid-view"
                                        ? "list-view"
                                        : ""
                            }>
                            <Image
                                src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                                width={500}
                                height={500}
                                className={
                                    display === "smal-grid-view"
                                        ? "small-view-img"
                                        : display === "big-grid-view"
                                          ? "big-view-img"
                                          : display === "list-grid-view"
                                            ? "list-view-img"
                                            : ""
                                }
                                alt={`Felhasználó ${index + 1}`}
                                style={{
                                    borderRadius: 10,
                                }}
                            />
                            {display === "list-grid-view" ? (
                                <div className="list-view-data">
                                    <h2 className="name">
                                        {user?.username}{" "}
                                        <p className="data">man, {index}</p>
                                    </h2>

                                    <p className="location">
                                        Hungary, budapest
                                    </p>
                                    <div>
                                        <span>Sexuality: {index}</span>
                                        <span>Sexuality: {index}</span>
                                        <span>Sexuality: {index}</span>
                                        <span>Sexuality: {index}</span>
                                        <span>Sexuality: {index}</span>
                                        <span>Sexuality: {index}</span>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </BottomPageWrapper>
    );
}
