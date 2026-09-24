"use client";

import { useScreenStore } from "@/features/_store/screen.store";
import Image from "next/image";

export default function VisitedScreen() {
    const { display } = useScreenStore();

    return (
        <div className="page-with-bottom">
            {/* <TopFilter>
                <ViewChange />
            </TopFilter> */}
            <div className={`screen-view`}>
                {/* <div className={`screen-view ${display} `}> */}
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        key={index}
                        // className={
                        //     display === "smal-grid-view"
                        //         ? "small-view"
                        //         : display === "big-grid-view"
                        //           ? "big-view"
                        //           : display === "list-grid-view"
                        //             ? "list-view"
                        //             : ""
                        // }
                    >
                        <Image
                            src={`https://randomuser.me/api/portraits/women/${index}.jpg`}
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
                        />
                        {/* {display === "list-grid-view" ? (
                            <div className="list-view-data">
                                <h2 className="name">
                                    User neve{" "}
                                    <p className="data">woman, {index}</p>
                                </h2>

                                <p className="location">Hungary, budapest</p>
                                <div>
                                    <span>Sexuality: {index}</span>
                                    <span>Sexuality: {index}</span>
                                    <span>Sexuality: {index}</span>
                                    <span>Sexuality: {index}</span>
                                    <span>Sexuality: {index}</span>
                                    <span>Sexuality: {index}</span>
                                </div>
                            </div>
                        ) : null} */}
                    </div>
                ))}
            </div>
        </div>
    );
}
