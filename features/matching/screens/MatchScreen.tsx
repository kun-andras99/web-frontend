// "use client";

// import {
//     getMatchCandidates,
//     sendMatchAction,
// } from "@/features/matching/api/matching.api";
// import { MatchCandidate } from "@/features/matching/types/matching.types";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";

// function calculateAge(birth: string | Date | null): number | null {
//     if (!birth) {
//         return null;
//     }

//     const birthDate = new Date(birth);
//     const today = new Date();

//     let age = today.getFullYear() - birthDate.getFullYear();

//     const hasBirthdayPassed =
//         today.getMonth() > birthDate.getMonth() ||
//         (today.getMonth() === birthDate.getMonth() &&
//             today.getDate() >= birthDate.getDate());

//     if (!hasBirthdayPassed) {
//         age--;
//     }

//     return age;
// }

// export default function MatchScreen() {
//     const [users, setUsers] = useState<MatchCandidate[]>([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const [loading, setLoading] = useState(true);
//     const [processing, setProcessing] = useState(false);

//     const currentUser = users[currentIndex];

//     const loadUsers = useCallback(async () => {
//         try {
//             setLoading(true);

//             const data = await getMatchCandidates();

//             setUsers(data);
//             setCurrentIndex(0);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         void loadUsers();
//     }, [loadUsers]);

//     const handleAction = async (type: "LIKE" | "PASS") => {
//         if (!currentUser || processing) {
//             return;
//         }

//         try {
//             setProcessing(true);

//             const result = await sendMatchAction(currentUser.id, type);

//             if (result.matched) {
//                 console.log("MATCH!", result);
//             }

//             setCurrentIndex((previous) => previous + 1);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setProcessing(false);
//         }
//     };

//     if (loading) {
//         return (
//             <div className="flex min-h-[calc(100dvh-51px)] items-center justify-center">
//                 <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#1eb1eb]" />
//             </div>
//         );
//     }

//     if (!currentUser) {
//         return (
//             <div className="flex min-h-[calc(100dvh-51px)] flex-col items-center justify-center px-6 text-center">
//                 <div className="mb-4 text-5xl">❤️</div>

//                 <h2 className="text-xl font-bold text-white">
//                     Nincs több felhasználó
//                 </h2>

//                 <p className="mt-2 max-w-sm text-sm text-white/50">
//                     Jelenleg minden elérhető profilt megnézted.
//                 </p>

//                 <button
//                     type="button"
//                     onClick={loadUsers}
//                     className="mt-6 rounded-xl bg-[#1eb1eb] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
//                     Újratöltés
//                 </button>
//             </div>
//         );
//     }

//     const age = calculateAge(currentUser.userData?.birth ?? null);

//     return (
//         <div className="flex min-h-[calc(100dvh-51px)] flex-col px-3 py-4">
//             <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
//                 <div className="mb-3 text-center">
//                     <h1 className="text-xl font-bold text-white">
//                         Fedezz fel új embereket
//                     </h1>

//                     <p className="mt-1 text-xs text-white/40">
//                         Dönts jobbra szívvel, vagy lépj tovább X-szel.
//                     </p>
//                 </div>

//                 <div className="relative flex flex-1 items-center justify-center">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={currentUser.id}
//                             initial={{
//                                 opacity: 0,
//                                 scale: 0.96,
//                                 x: 40,
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 scale: 1,
//                                 x: 0,
//                             }}
//                             exit={{
//                                 opacity: 0,
//                                 scale: 0.96,
//                                 x: -40,
//                             }}
//                             transition={{
//                                 duration: 0.25,
//                             }}
//                             className="relative aspect-[0.72] w-full max-w-[420px] overflow-hidden rounded-[28px] bg-neutral-900 shadow-2xl">
//                             {currentUser.userData?.avatarUrl ? (
//                                 <Image
//                                     src={currentUser.userData.avatarUrl}
//                                     alt={
//                                         currentUser.userData.nickname ??
//                                         currentUser.username
//                                     }
//                                     fill
//                                     priority
//                                     sizes="(max-width: 768px) 95vw, 420px"
//                                     className="object-cover"
//                                 />
//                             ) : (
//                                 <div className="flex h-full items-center justify-center bg-neutral-800 text-sm text-white/40">
//                                     Nincs profilkép
//                                 </div>
//                             )}

//                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//                             <div className="absolute inset-x-0 bottom-0 p-6">
//                                 <div className="flex items-end justify-between gap-3">
//                                     <div className="min-w-0">
//                                         <h2 className="truncate text-2xl font-bold text-white">
//                                             {currentUser.userData?.nickname ??
//                                                 currentUser.username}

//                                             {age !== null && (
//                                                 <span className="ml-2 font-normal text-white/70">
//                                                     {age}
//                                                 </span>
//                                             )}
//                                         </h2>

//                                         {currentUser.userData?.gender && (
//                                             <p className="mt-1 text-sm text-white/60">
//                                                 {currentUser.userData.gender}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {currentUser.userData?.description && (
//                                     <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
//                                         {currentUser.userData.description}
//                                     </p>
//                                 )}
//                             </div>

//                             {processing && (
//                                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
//                                     <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
//                                 </div>
//                             )}
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 <div className="flex items-center justify-center gap-6 py-5">
//                     <button
//                         type="button"
//                         disabled={processing}
//                         onClick={() => void handleAction("PASS")}
//                         className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-2xl text-white/70 shadow-xl transition hover:scale-105 hover:border-red-400/30 hover:text-red-400 disabled:opacity-40"
//                         aria-label="Tovább">
//                         ×
//                     </button>

//                     <button
//                         type="button"
//                         disabled={processing}
//                         onClick={() => void handleAction("LIKE")}
//                         className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1eb1eb] text-3xl text-white shadow-[0_0_40px_rgba(30,177,235,0.25)] transition hover:scale-105 hover:shadow-[0_0_50px_rgba(30,177,235,0.4)] disabled:opacity-40"
//                         aria-label="Like">
//                         ♥
//                     </button>
//                 </div>

//                 <div className="pb-2 text-center text-[11px] text-white/30">
//                     {currentIndex + 1} / {users.length}
//                 </div>
//             </div>
//         </div>
//     );
// }
