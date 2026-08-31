import { BlogWithAuthor } from "@/features/blog/types";
import { BlogRepository } from "../../../lib/db/repositories/blog.rep";
import { UserRepository } from "../../../lib/db/repositories/user.rep";

export class BlogService {
    constructor(
        private readonly blogRepository: BlogRepository,
        private readonly userRepository: UserRepository,
    ) {}
    async getBlogBySlug(slug: string): Promise<BlogWithAuthor | null> {
        const blog = await this.blogRepository.findBySlug(slug);
        if (!blog) {
            return null;
        }
        const author = await this.userRepository.findById(blog.authorId);
        if (!author) {
            return null;
        }
        return { ...blog, author };
    }
    async getBlogsByAuthor(authorId: number): Promise<BlogWithAuthor[]> {
        const author = await this.userRepository.findById(authorId);
        if (!author) {
            return [];
        }
        const blogs = await this.blogRepository.findByAuthorId(authorId);
        return blogs.map((blog) => ({ ...blog, author }));
    }
}
