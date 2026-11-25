import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import type { PublicBlogPost } from "@/types/blog";

import BlogGrid from "./BlogGrid";

interface RelatedPostsProps {
  posts: PublicBlogPost[];
}

export default function RelatedPosts({
  posts,
}: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="bg-[#f6f8fb] py-8 sm:py-12">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        <div className="mb-5 flex items-end justify-between gap-3 sm:mb-7">

          <div>

            <div className="mb-2 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-red-600" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                Continue Reading
              </span>

            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-[#0b162c] sm:text-4xl">
              Related{" "}
              <span className="text-red-600">
                Insights.
              </span>
            </h2>

          </div>

          <Link
            href="/blog"
            className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#203164] hover:text-red-600 sm:text-sm"
          >
            View All

            <ArrowUpRight size={15} />
          </Link>

        </div>

        <BlogGrid posts={posts} />

      </div>
    </section>
  );
}