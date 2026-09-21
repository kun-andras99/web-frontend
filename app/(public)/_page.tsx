// "use client";

// import AppButton from "@/features/_components/button/AppButton";
// import { AUTH_ROUTES } from "@/features/auth/lib/constants";
// // import { useUsers } from "@/features/user/api/useUsers";
// import Link from "next/link";

// export default function HomeScreen() {
//     // const { data: users, isLoading, isError } = useUsers();

//     // if (isLoading) {
//     //     return <div>Loading...</div>;
//     // }

//     // if (isError) {
//     //     return <div>Failed to load users.</div>;
//     // }

//     return (
//         <>
//             {/* <section className="home-news">
//                     <NewsCarousel />
//                 </section> */}
//             <section className="main">
//                 <div className="button-group">
//                     <Link href={AUTH_ROUTES.signIn}>
//                         <AppButton>Login</AppButton>
//                     </Link>
//                     <Link href={AUTH_ROUTES.signUp}>
//                         <AppButton variant="outline">Registration</AppButton>
//                     </Link>
//                 </div>
//                 <div>
//                     <p>Whereas disregard and contempt for human rights have</p>
//                     {/* {users?.map((user) => (
//                         <div key={user.id}>{user.username}</div>
//                     ))} */}
//                 </div>
//             </section>
//         </>
//     );
// }
