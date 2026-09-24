"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { useCreateBlog } from "@/features/blogs/hooks/useCreateBlog";

type BlogVisibility = "PUBLIC" | "PRIVATE";

export default function CreateBlogForm() {
    const router = useRouter();

    const { mutateAsync: createBlog, isPending } = useCreateBlog();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tagsInput, setTagsInput] = useState("");
    const [visibility, setVisibility] = useState<BlogVisibility>("PUBLIC");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedContent = content.trim();

        if (!trimmedTitle) {
            return;
        }

        if (!trimmedContent) {
            return;
        }

        const tags = tagsInput
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);

        try {
            const blog = await createBlog({
                title: trimmedTitle,
                content: trimmedContent,
                visibility,
                tags,
            });

            // router.push(`/blog/${blog.id}`);
            router.push(`/community/blogs`);
        } catch (error) {}
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-3xl flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium">
                    Cím
                </label>

                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="A blog címe..."
                    maxLength={150}
                    disabled={isPending}
                    className="h-12 rounded-xl border border-border bg-background px-4 outline-none transition focus:border-primary"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-sm font-medium">
                    Tartalom
                </label>

                <textarea
                    id="content"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Írd le, amit meg szeretnél osztani..."
                    rows={12}
                    disabled={isPending}
                    className="resize-y rounded-xl border border-border bg-background p-4 outline-none transition focus:border-primary"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="tags" className="text-sm font-medium">
                    Tagek
                </label>

                <input
                    id="tags"
                    type="text"
                    value={tagsInput}
                    onChange={(event) => setTagsInput(event.target.value)}
                    placeholder="szerelem, randi, kapcsolat"
                    disabled={isPending}
                    className="h-12 rounded-xl border border-border bg-background px-4 outline-none transition focus:border-primary"
                />

                <p className="text-xs text-muted-foreground">
                    A tageket vesszővel válaszd el.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">Láthatóság</span>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={() => setVisibility("PUBLIC")}
                        className={`rounded-xl border p-4 text-left transition ${
                            visibility === "PUBLIC"
                                ? "border-primary bg-primary/10"
                                : "border-border hover:bg-muted"
                        }`}>
                        <div className="font-medium">Publikus</div>

                        <div className="mt-1 text-sm text-muted-foreground">
                            Mindenki láthatja a blogot.
                        </div>
                    </button>

                    <button
                        type="button"
                        disabled={isPending}
                        onClick={() => setVisibility("PRIVATE")}
                        className={`rounded-xl border p-4 text-left transition ${
                            visibility === "PRIVATE"
                                ? "border-primary bg-primary/10"
                                : "border-border hover:bg-muted"
                        }`}>
                        <div className="font-medium">Privát</div>

                        <div className="mt-1 text-sm text-muted-foreground">
                            Csak te láthatod a blogot.
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex justify-end gap-3">
                <button
                    type="button"
                    disabled={isPending}
                    onClick={() => router.back()}
                    className="rounded-xl border border-border px-5 py-3 text-sm font-medium transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50">
                    Mégse
                </button>

                <button
                    type="submit"
                    disabled={isPending}
                    className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
                    {isPending ? "Létrehozás..." : "Blog létrehozása"}
                </button>
            </div>
        </form>
    );
}
