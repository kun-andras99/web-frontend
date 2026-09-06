"use client";

import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
import TopFilter from "@/features/_components/ui/top-filter";
import { useScreenStore } from "@/features/_store/screen.store";
import Image from "next/image";

export default function VisitorsScreen() {
    const { display, setDisplay } = useScreenStore();

    return (
        <BottomPageWrapper>
            <div className="bottom-page">
                <TopFilter>
                    <button onClick={() => setDisplay("small-grid-view")}>
                        1
                    </button>
                    <button onClick={() => setDisplay("big-grid-view")}>
                        2
                    </button>
                    <button onClick={() => setDisplay("list-grid-view")}>
                        3
                    </button>
                </TopFilter>
                <div className={`screen-view ${display} `}>
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div
                            key={index}
                            className={`${display === "list-grid-view" ? "list-view" : null}`}>
                            <Image
                                src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                                width={100}
                                height={100}
                                className={`list-view-img`}
                                alt={`Felhasználó ${index + 1}`}
                            />
                            {display === "list-grid-view" ? (
                                <div className="list-view-data">
                                    <h2 className="name">
                                        User neve{" "}
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
