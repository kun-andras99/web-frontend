"use client";

import type { ProfileTab, ProfileWithRelations } from "../types/profile.types";

import Image from "next/image";
import ProfileTabPanel from "./profile-tab-panel";

interface ProfileTabContentProps {
    tab: ProfileTab;
    user: ProfileWithRelations;
}

export default function ProfileTabContent({
    tab,
    user,
}: ProfileTabContentProps) {
    switch (tab) {
        case "about":
            return (
                <ProfileTabPanel>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold">About</h2>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                bio
                            </p>
                        </div>

                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className={`relative aspect-square overflow-hidden`}>
                                <Image
                                    src={`https://randomuser.me/api/portraits/women/${index}.jpg`}
                                    fill
                                    sizes="33vw"
                                    className="object-cover"

                                    alt={`Felhasználó ${index + 1}`}
                                    style={{
                                        borderRadius: 10,
                                    }}
                                />
                            </div>
                        ))}
                        {/* {user.location && (
                            <div>
                                <h3 className="text-sm font-medium">
                                    Location
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {user.location}
                                </p>
                            </div>
                        )} */}
                    </div>
                </ProfileTabPanel>
            );

        case "photos":
            return (
                <ProfileTabPanel>
                    <div className="grid grid-cols-3 gap-1">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className={`relative aspect-square overflow-hidden`}>
                                <Image
                                    src={`https://randomuser.me/api/portraits/women/${index}.jpg`}
                                    fill
                                    sizes="33vw"
                                    className="object-cover"

                                    alt={`Felhasználó ${index + 1}`}
                                    style={{
                                        borderRadius: 10,
                                    }}
                                />
                            </div>
                        ))}
                        {/* {(user.photos ?? []).map((photo, index) => (
                            <div
                                key={`${photo}-${index}`}
                                className="relative aspect-square overflow-hidden">
                                <Image
                                    src={photo}
                                    alt=""
                                    fill
                                    sizes="33vw"
                                    className="object-cover"
                                />
                            </div>
                        ))} */}
                    </div>
                </ProfileTabPanel>
            );

        case "interests":
            return (
                <ProfileTabPanel>
                    <div className="min-h-[80%]">
                        <h2 className="text-lg font-semibold">Interests</h2>

                        {/* {(user.interests ?? []).map((interest) => (
                                <span
                                    key={interest}
                                    className="
                                            rounded-full
                                            border
                                            px-4 py-2
                                            text-sm
                                        ">
                                    {interest}
                                </span>
                            ))} */}
                    </div>
                </ProfileTabPanel>
            );

        case "looking-for":
            return (
                <ProfileTabPanel>
                    <div>
                        <h2 className="text-lg font-semibold">Looking for</h2>

                        <div className="mt-4 space-y-2">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`relative aspect-square overflow-hidden`}>
                                    <Image
                                        src={`https://randomuser.me/api/portraits/women/${index}.jpg`}
                                        fill
                                        sizes="33vw"
                                        className="object-cover"

                                        alt={`Felhasználó ${index + 1}`}
                                        style={{
                                            borderRadius: 10,
                                        }}
                                    />
                                </div>
                            ))}
                            {/* {(user.lookingFor ?? []).map((value) => (
                                <div
                                    key={value}
                                    className="
                                            rounded-2xl
                                            border
                                            p-4
                                        ">
                                    {value}
                                </div>
                            ))} */}
                        </div>
                    </div>
                </ProfileTabPanel>
            );

        case "activity":
            return (
                <ProfileTabPanel>
                    <div>
                        <h2 className="text-lg font-semibold">Activity</h2>

                        <div className="mt-4 space-y-4">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`relative aspect-square overflow-hidden`}>
                                    <Image
                                        src={`https://randomuser.me/api/portraits/women/${index}.jpg`}
                                        fill
                                        sizes="33vw"
                                        className="object-cover"

                                        alt={`Felhasználó ${index + 1}`}
                                        style={{
                                            borderRadius: 10,
                                        }}
                                    />
                                </div>
                            ))}
                            {/* {(user.activity ?? []).map((item, index) => (
                                <article
                                    key={index}
                                    className="
                                            rounded-2xl
                                            border
                                            p-4
                                        ">
                                    <h3 className="font-medium">
                                        {item.title}
                                    </h3>

                                    {item.description && (
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    )}
                                </article>
                            ))} */}
                        </div>
                    </div>
                </ProfileTabPanel>
            );

        default:
            return null;
    }
}
