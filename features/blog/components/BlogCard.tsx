import { Blog } from "@/features/blog/types";
import { createBlogSlug } from "@/features/blog/utils/createBlogSlug";
import Link from "next/link";

interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    const slug = createBlogSlug(blog.title);
    return (
        <article className="blog">
            <div className="title-container">
                <Link href={`/blogs/${createBlogSlug(blog.title)}`}>
                    {" "}
                    <div className="title">{blog.title}</div>{" "}
                </Link>
                <div className="stats">
                    <span className="author">
                        {blog.author}

                        <div></div>

                        <span className="time">{blog.createdAt}</span>
                    </span>

                    {blog.readCount !== undefined && (
                        <span className="readed">{blog.readCount}</span>
                    )}
                </div>

                {blog.tags && blog.tags.length > 0 && (
                    <div className="tags">
                        {blog.tags.map((tag) => (
                            <span key={tag}>#{tag}</span>
                        ))}
                    </div>
                )}
            </div>

            <div className="content">
                <p>{blog.content}</p>
            </div>
        </article>
    );
}
