"use client";

// import TopFilter from "@/features/_components/ui/top-filter";
// import ViewChange from "@/features/_components/ui/view-change";
import usersMock from "@/features/_lib/mock/usersMock";
import { useScreenStore } from "@/features/_store/screen.store";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

// interface NearbyUser {
//     id: string;
//     username: string;
//     email: string;
//     userData: {
//         nickname: string;
//         gender: string;
//     } | null;
// }

export default function UsersNearbyScreen() {
    const { display } = useScreenStore();

    // const [users, setUsers] = useState<NearbyUser[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     async function loadUsers() {
    //         try {
    //             const response = await fetch("/api/users/nearby?page=1");

    //             const result = await response.json();

    //             if (!response.ok) {
    //                 throw new Error(result.error);
    //             }

    //             setUsers(result.users);
    //         } catch (error) {
    //             console.error(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     loadUsers();
    // }, []);

    return (
        <div className="main">
            {/* <TopFilter>
                <ViewChange />
            </TopFilter> */}
            <div className={`screen-view ${display} `}>
                {usersMock?.map((user) => {
                    return (
                        <div key={user.id}>
                            <Link href={`/profile/${user.id}`}>
                                <Image
                                    src={`${user.userData?.avatarUrl}`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        aspectRatio: "1 / 1",
                                    }}
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </Link>
                        </div>
                    );
                })}
                {/* {Array.from({ length: 20 }).map((_, index) => (
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
                                style={{
                                    borderRadius: 10,
                                }}
                            />
                            {display === "list-grid-view" ? (
                                <div className="list-view-data">
                                    <h2 className="name">
                                        User neve{" "}
                                        <p className="data">woman, {index}</p>
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
                                        User neve{" "}
                                        <p className="data">woman, {index}</p>
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
                    ))} */}
            </div>
        </div>
    );
}

// "use client";

// import BottomPageWrapper from "@/features/_components/ui/bottom-page-wrapper";
// import LiquidGlassBox from "@/features/_components/ui/liquid-glass-box";
// import { User } from "@/lib/db";
// import Link from "next/link";

// interface UsersNearbyScreenProps {
//     users: User[];
// }

// export default function UsersNearbyScreen({ users }: UsersNearbyScreenProps) {
//     return (
//         <BottomPageWrapper>
//             <div className="grid grid-cols-3 gap-[1px]">
//                 {users.map((user) => {
//                     return (
//                         <Link
//                             key={user.id}
//                             href={`/profile/${user.id}`}
//                             className="user-item">
//                             <div
//                                 key={user.id}
//                                 className="relative aspect-square overflow-hidden">
//                                 {user.username}
//                             </div>
//                         </Link>
//                     );
//                 })}
//             </div>
//             <LiquidGlassBox />
//         </BottomPageWrapper>
//     );
// }
