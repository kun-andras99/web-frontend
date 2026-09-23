"use client";

import { SessionUserProps } from "@/lib/utils/props";
import { Notification } from "../../../prisma/generated/prisma";

// function formatNotificationTime(date: Date) {
//     const now = new Date();

//     const diff = now.getTime() - date.getTime();

//     const minutes = Math.floor(diff / (1000 * 60));
//     const hours = Math.floor(diff / (1000 * 60 * 60));

//     if (minutes < 1) {
//         return "épp most";
//     }

//     if (minutes < 60) {
//         return `${minutes} perce`;
//     }

//     if (hours < 24 && isSameDay(date, now)) {
//         return `${hours} órája`;
//     }

//     if (isYesterday(date, now)) {
//         return "ma";
//     }

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));

//     if (days < 7) {
//         return `${days} napja`;
//     }

//     if (days < 30) {
//         return `${Math.floor(days / 7)} hete`;
//     }

//     if (days < 365) {
//         return `${Math.floor(days / 30)} hónapja`;
//     }

//     return `${Math.floor(days / 365)} éve`;
// }

// function isSameDay(date1: Date, date2: Date) {
//     return (
//         date1.getFullYear() === date2.getFullYear() &&
//         date1.getMonth() === date2.getMonth() &&
//         date1.getDate() === date2.getDate()
//     );
// }

// function isYesterday(date: Date, now: Date) {
//     const yesterday = new Date(now);

//     yesterday.setDate(yesterday.getDate() - 1);

//     return isSameDay(date, yesterday);
// }

// function getNotificationGroup(createdAt: Date) {
//     const now = new Date();
//     const yesterday = new Date();

//     yesterday.setDate(now.getDate() - 1);

//     if (isSameDay(createdAt, now)) {
//         return "new";
//     }

//     if (isSameDay(createdAt, yesterday)) {
//         return "today";
//     }

//     return "older";
// }

// function NotificationItem({
//     notification,
// }: {
//     notification: (typeof notificationsMock)[number];
// }) {
//     const unread = !notification.readAt;

//     return (
//         <div
//             className={`notifications__item ${
//                 unread ? "unread-notification" : ""
//             }`}>
//             {notification.actor ? (
//                 <Image
//                     src={notification.actor.avatar}
//                     width={82}
//                     height={82}
//                     alt={notification.actor.username}
//                 />
//             ) : (
//                 <div className="notifications__system-avatar">🔔</div>
//             )}

//             <div className="content">
//                 <div className="data">
//                     <h3>
//                         {notification.actor?.username ?? "Kamaftu"} -{" "}
//                         {notification.title}
//                     </h3>
//                     <p>{formatNotificationTime(notification.createdAt)}- </p>
//                     <p>{notification.message}</p>
//                     {/* <p>{notification.type}</p> */}
//                 </div>

//                 <div className="actions">X</div>
//             </div>
//         </div>
//     );
// }

interface MessageScreenProps {
    notifications?: Notification[];
}

export default function NotificationsScreen({
    user,
}: MessageScreenProps & SessionUserProps) {
    // console.log("currentUser:", user);

    // const groups = {
    //     new: notificationsMock
    //         .filter(
    //             (notification) =>
    //                 getNotificationGroup(notification.createdAt) === "new",
    //         )
    //         .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    //         .slice(0, 3),

    //     today: notificationsMock.filter(
    //         (notification) =>
    //             getNotificationGroup(notification.createdAt) === "today",
    //     ),

    //     older: notificationsMock.filter(
    //         (notification) =>
    //             getNotificationGroup(notification.createdAt) === "older",
    //     ),
    // };

    return (
        <div className="page-with-bottom">
            <div className="notifications">
                {/* {notifications?.map((notification) => (
                    <div key={notification.id}>{notification.title}</div>
                ))} */}
                {/* {groups.new.length > 0 && (
                    <>
                        <h2>Új</h2>

                        {groups.new.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                notification={notification}
                            />
                        ))}
                    </>
                )}

                {groups.today.length > 0 && (
                    <>
                        <h2>Ma</h2>

                        {groups.today.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                notification={notification}
                            />
                        ))}
                    </>
                )}

                {groups.older.length > 0 && (
                    <>
                        <h2>Régebbiek</h2>

                        {groups.older.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                notification={notification}
                            />
                        ))}
                    </>
                )} */}
            </div>
        </div>
    );
}
