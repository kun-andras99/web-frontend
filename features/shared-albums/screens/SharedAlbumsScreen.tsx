"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import Image from "next/image";

export default function SharedAlbumsScreen() {
    return (
        <BottomPageWrapper>
            <p>shared albums</p>
            {/* <h2>UPDATES</h2>
            <div className="first-shared-row">
                <div className="shared-box box-inactive">
                    <p>+</p>
                    <span>update your album</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-1.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-2.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-3.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-4.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-5.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-1.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-2.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-3.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-4.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
                <div className="shared-box ">
                    <Image
                        className="image"
                        src="/assets/images/user-blank-5.png"
                        alt="Profile"
                        width={100}
                        height={100}
                    />
                    <span>username</span>
                </div>
            </div> */}
            <h2>ALL ALBUMS</h2>
            <div className="second-shared-row">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div className="shared-box" key={index}>
                        <Image
                            className="image"
                            src={`https://i.pravatar.cc/400?img=${index}`}
                            alt="Profile"
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </div>
        </BottomPageWrapper>
    );
}
