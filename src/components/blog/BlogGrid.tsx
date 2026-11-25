import type { PublicBlogPost } from "@/types/blog";

import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: PublicBlogPost[];
}

export default function BlogGrid({
  posts,
}: BlogGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:gap-6">

      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          post={post}
          index={index}
        />
      ))}

    </div>
  );
}