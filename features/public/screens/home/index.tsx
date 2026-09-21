"use client";

import AppButton from "@/features/_components/button/AppButton";
import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarImage,
} from "@/features/_components/ui/avatar";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import Link from "next/link";

export default function HomeScreen() {
    return (
        <section className="center-main">
            <div className="top">
                <span className="logo-text">
                    {/* Next<span>Love</span> */}
                    Next<span>Love</span>
                </span>
                <div className="drawer-button">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="container">
                <span className="main-text uppercase">
                    Valódi emberek. <span>Valódi kapcsolatok.</span>
                </span>
                <h1>
                    Találd meg <span>a hozzád illő</span>{" "}
                    <span className="partner">partnert.</span>
                </h1>
                <span className="main-white">
                    Legyen szó egy új ismeretségről, barátságról vagy komoly
                    kapcsolatról - itt megtalálhatod azt, akivel igazán
                    összhangban vagy.
                </span>
                <div className="starter-auth-button-group">
                    <Link href={AUTH_ROUTES.signUp}>
                        <AppButton width="180px" starter>
                            Bejelentkezés
                        </AppButton>
                    </Link>
                    <p>Még nincs fiókod?</p>
                    <Link href={AUTH_ROUTES.signUp}>
                        <AppButton variant="outline" width="180px" starter>
                            Regisztráció
                        </AppButton>
                    </Link>
                </div>
                <div className="more-than">
                    <AvatarGroup>
                        <Avatar className="size-[44px]">
                            <AvatarImage
                                src="./assets/images/user-blank-1.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>IMG</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-[44px]">
                            <AvatarImage
                                src="./assets/images/user-blank-2.png"
                                alt="@maxleiter"
                            />
                            <AvatarFallback>IMG</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-[44px]">
                            <AvatarImage
                                src="./assets/images/user-blank-3.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>IMG</AvatarFallback>
                        </Avatar>
                        <Avatar className="size-[44px]">
                            <AvatarImage
                                src="./assets/images/user-blank-4.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>IMG</AvatarFallback>
                        </Avatar>
                        {/* <AvatarGroupCount>+3</AvatarGroupCount> */}
                    </AvatarGroup>
                    <div className="text">
                        Több mint 150.000{" "}
                        <span>aktív felhasználó vár rád!</span>
                    </div>
                </div>
            </div>
            <div className="bg-img-1"></div>
            <div className="bg-img-2"></div>
        </section>
        // <motion.section
        //     className="center-main"
        //     initial="hidden"
        //     animate="visible"
        //     variants={containerVariants}>
        //     <motion.h1 variants={headingVariants}>
        //         This is where
        //         <span>connection begins.</span>
        //     </motion.h1>

        //     <motion.div
        //         className="floating-text"
        //         variants={floatingContainerVariants}>
        //         <motion.span
        //             variants={topRightVariants}
        //             transition={{
        //                 duration: 2.5,
        //                 ease: "easeInOut",
        //             }}>
        //             New <span>conversations.</span>
        //         </motion.span>

        //         <motion.span
        //             variants={centerVariants}
        //             transition={{
        //                 duration: 1.5,
        //                 ease: "easeInOut",
        //             }}>
        //             New <span>people.</span>
        //         </motion.span>

        //         <motion.span
        //             variants={bottomLeftVariants}
        //             transition={{
        //                 duration: 3.5,
        //                 ease: "easeInOut",
        //             }}>
        //             New <span>connections.</span>
        //         </motion.span>
        //     </motion.div>

        //     <motion.p variants={fadeUpVariants}>
        //         A place where curiosity can spark a conversation, and a
        //         conversation can grow into something real.
        //     </motion.p>

        //     <motion.div
        //         className="starter-auth-button-group"
        //         variants={fadeUpVariants}>
        //         <Link href={AUTH_ROUTES.signIn}>
        //             <AppButton width="260px" starter>
        //                 Login
        //             </AppButton>
        //         </Link>

        //         <p>Don’t have an account?</p>

        //         <Link href={AUTH_ROUTES.signUp}>
        //             <AppButton width="260px" variant="outline" starter>
        //                 Registration
        //             </AppButton>
        //         </Link>
        //     </motion.div>
        // </motion.section>
    );
}
