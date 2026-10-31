"use client";

// import MessageComposer from "@/features/love-wall/components/LoveWall/MessageComposer";
// import MessageList from "@/features/love-wall/components/LoveWall/MessageList";
// import { useLoveWall } from "@/features/love-wall/hooks/useLoveWall";
import type { LoveMessage } from "@/features/love-wall/types";
import { MessageCircleHeart, Send, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
    /** Szerveroldalon előtöltött első oldal (opcionális) */
    initialMessages?: LoveMessage[];
    initialCursor?: string | null;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export default function LoveWall({
    initialMessages,
    initialCursor,
    isOpen,
    onOpen,
    onClose,
}: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [message, setMessage] = useState("");
    // const wall = useLoveWall({ initialMessages, initialCursor });
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target as Node;

            if (!document.getElementById("right-sidebar")?.contains(target)) {
                onClose();
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [isOpen, onClose]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!message.trim()) {
            return;
        }

        console.log("POST:", message);

        setMessage("");
    }

    const handleButtonClick = () => {
        if (!isOpen) {
            console.log("LOVE WALL: OPEN");
            onOpen();
            return;
        }

        console.log("LOVE WALL: POST");
    };

    return (
        <>
            <div className="message-container opacity-hover" ref={containerRef}>
                {isOpen && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="love-wall-close ">
                        <X size={18} />
                    </button>
                )}
                <div className="message-list">
                    {Array.from({ length: 30 }, (_, index) => (
                        <article className="message" key={index}>
                            <Image
                                src={`https://i.pravatar.cc/400?img=${
                                    index + 1
                                }`}
                                alt=""
                                width={38}
                                height={38}
                            />

                            <div className="message-content">
                                <div className="message-meta">
                                    <strong>Username {index + 1}</strong>

                                    <time>
                                        17:{index.toString().padStart(2, "0")}
                                    </time>
                                </div>

                                <p>Ez egy teszt üzenet a Love Wallon.</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <form
                className={`form-container ${isOpen ? "is-open" : ""}`}
                onSubmit={handleSubmit}>
                {isOpen && (
                    <input
                        type="text"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Írj valamit..."
                    />
                )}

                <button
                    type={isOpen ? "submit" : "button"}
                    className="post-button"
                    aria-label={
                        isOpen ? "Üzenet küldése" : "Love Wall megnyitása"
                    }
                    onClick={() => {
                        if (!isOpen) {
                            console.log("LOVE WALL: OPEN");
                            onOpen();
                            return;
                        }

                        console.log("LOVE WALL: POST BUTTON");
                    }}>
                    {isOpen ? (
                        <Send size={20} color="var(--card)" strokeWidth={2} />
                    ) : (
                        <MessageCircleHeart
                            size={20}
                            color="var(--card)"
                            strokeWidth={2}
                        />
                    )}
                </button>
            </form>
            {/* <aside className="right-sidebar">
                <section className="love-wall-container">
                    <div className="messages">
                        {Array.from({ length: 20 }, (_, index) => (
                            <div className="message" key={index}>
                                <span>kep</span>

                                <div className="wrapper">
                                    <div className="data">
                                        <span>nev</span>
                                        <span>ido</span>
                                    </div>

                                    <div className="content">
                                        itt az üzenet tartalma
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="love-wall-actions">
                        <input type="text" name="" id="" />
                        <button type="submit">S</button>
                    </div>
                </section>
            </aside> */}
        </>
    );
}
