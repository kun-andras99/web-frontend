import BlogScreen from "@/features/blogs/screens/BlogScreen";

interface BlogPageProps {
    params: Promise<{
        blogId: string;
    }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { blogId } = await params;

    return <BlogScreen blogId={blogId} />;
}
