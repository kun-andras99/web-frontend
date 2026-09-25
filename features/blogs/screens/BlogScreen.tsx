import { getBlogById } from "@/features/blogs/api/getBlog";
import { notFound } from "next/navigation";

interface BlogScreenProps {
    blogId: string;
}

export default async function BlogScreen({ blogId }: BlogScreenProps) {
    const blog = await getBlogById(blogId);

    if (!blog) {
        notFound();
    }

    const authorName = blog.author.nickname?.trim() || blog.author.username;

    const createdAt = new Intl.DateTimeFormat("hu-HU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(blog.createdAt));

    return (
        <section className="blog-screen">
            <article className="blog-screen__article">
                <header className="blog-screen__header">
                    <div className="blog-screen__author">
                        <div className="blog-screen__author-avatar">
                            {/* {blog.author.avatarUrl ? (
                                <Image
                                    src={blog.author.avatarUrl}
                                    alt={authorName}
                                />
                            ) : (
                                <img
                                    src="/assets/images/user-blank-1.png"
                                    alt={authorName}
                                />
                            )} */}
                        </div>

                        <div className="blog-screen__author-info">
                            <span className="blog-screen__author-name">
                                {authorName}
                            </span>

                            <span className="blog-screen__date">
                                {createdAt}
                            </span>
                        </div>
                    </div>

                    <h1 className="blog-screen__title">{blog.title}</h1>

                    {blog.tags.length > 0 && (
                        <div className="blog-screen__tags">
                            {blog.tags.map((tag) => (
                                <span key={tag.id} className="blog-screen__tag">
                                    #{tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="blog-screen__content">{blog.content}</div>

                <footer className="blog-screen__footer">
                    <button type="button" className="blog-screen__like">
                        ♡<span>{blog.likeCount}</span>
                    </button>
                </footer>
            </article>
        </section>
    );
}
