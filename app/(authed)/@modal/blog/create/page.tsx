import CreateBlogForm from "@/features/blogs/composnents/CreateBlogForm";

export default function CreateBlogPage() {
    return (
        <main className="px-4 py-8">
            <div className="mx-auto mb-8 w-full max-w-3xl">
                <h1 className="text-3xl font-semibold">Új blog</h1>

                <p className="mt-2 text-muted-foreground">
                    Írd meg és oszd meg a gondolataidat a közösséggel.
                </p>
            </div>

            <CreateBlogForm />
        </main>
    );
}
