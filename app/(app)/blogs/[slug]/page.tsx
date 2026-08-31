import BackHeader from "@/features/navigations/back-header";

export default async function BlogPage() {
    // const { slug } = await params;
    // const blog = await blogService.getBlogBySlug(slug);
    // if (!blog) {
    //     notFound();
    // }
    return (
        <>
            <BackHeader title={`title`} />

            {/* <article className="blog">
                <header className="title-container">
                    <h1 className="title">{blog.title}</h1>

                    <div className="blog-meta">
                        <span>{blog.author.nickname}</span>

                        <span>•</span>

                        <span>{blog.createdAt}</span>

                        <span>•</span>

                        <span>{blog.readCount} viewers</span>
                    </div>

                    {blog.tags && blog.tags.length > 0 && (
                        <div className="blog-tags">
                            {blog.tags.map((tag) => (
                                <span key={tag}>#{tag}</span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="blog-content">
                    <p>{blog.content}</p>
                </div>
            </article> */}
        </>
    );
}
