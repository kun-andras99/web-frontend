"use client";

import AppButton from "@/features/_components/button/AppButton";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.6, 1, 0.3, 1],
        },
    },
};

const headingVariants: Variants = {
    hidden: {
        opacity: 0.1,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 3,
            ease: [0.1, 1, 0.15, 1],
        },
    },
};

const floatingContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.25,
        },
    },
};

const topRightVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 150,
        y: 0,
        scale: 0.75,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.15,
            delay: 0.9,
            ease: [0.5, 1, 1, 1],
        },
    },
};

const centerVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.15,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: 0.1,
            ease: [0.25, 1, 1, 1],
        },
    },
};

const bottomLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -150,
        y: 0,
        scale: 0.75,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.15,
            delay: 0.5,
            ease: [0.5, 1, 1, 1],
        },
    },
};

export default function HomeScreen() {
    return (
        <motion.section
            className="center-main"
            initial="hidden"
            animate="visible"
            variants={containerVariants}>
            <motion.h1 variants={headingVariants}>
                This is where
                <span>connection begins.</span>
            </motion.h1>

            <motion.div
                className="floating-text"
                variants={floatingContainerVariants}>
                <motion.span
                    variants={topRightVariants}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                    }}>
                    New <span>conversations.</span>
                </motion.span>

                <motion.span
                    variants={centerVariants}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}>
                    New <span>people.</span>
                </motion.span>

                <motion.span
                    variants={bottomLeftVariants}
                    transition={{
                        duration: 3.5,
                        ease: "easeInOut",
                    }}>
                    New <span>connections.</span>
                </motion.span>
            </motion.div>

            <motion.p variants={fadeUpVariants}>
                A place where curiosity can spark a conversation, and a
                conversation can grow into something real.
            </motion.p>

            <motion.div
                className="starter-auth-button-group"
                variants={fadeUpVariants}>
                <Link href={AUTH_ROUTES.signIn}>
                    <AppButton width="260px" starter>
                        Login
                    </AppButton>
                </Link>

                <p>Don’t have an account?</p>

                <Link href={AUTH_ROUTES.signUp}>
                    <AppButton width="260px" variant="outline" starter>
                        Registration
                    </AppButton>
                </Link>
            </motion.div>
        </motion.section>
    );
}
