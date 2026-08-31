import { Blog } from "@/features/blog/types";
import BlogCard from "./BlogCard";

interface BlogListProps {
    blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
    return (
        <div className="blogs-container">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}
