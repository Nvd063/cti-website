import type { Metadata } from "next";

import BlogHero from "@/components/blog/BlogHero";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import BlogCatalog from "@/components/blog/BlogCatalog";
import BlogCTA from "@/components/blog/BlogCTA";

import {
  getAllBlogPosts,
  getBlogCategories,
  getFeaturedBlogPosts,
} from "@/services/blog.service";

export const metadata: Metadata = {
  title: "Blog & Technical Insights | CTI System & Solutions",

  description:
    "Explore technical insights, industry knowledge and expert perspectives on fire safety, security, building automation and infrastructure solutions.",

  alternates: {
    canonical: "https://ctit.com.pk/blog",
  },

  openGraph: {
    title: "CTI Insights | CTI System & Solutions",

    description:
      "Discover industry insights on safety, security and intelligent infrastructure.",

    url: "https://ctit.com.pk/blog",

    type: "website",
  },
};

export default async function BlogPage() {
  const [
    posts,
    categories,
    featuredPosts,
  ] = await Promise.all([
    getAllBlogPosts(),
    getBlogCategories(),
    getFeaturedBlogPosts(),
  ]);

  return (
    <main>

      <BlogHero />

      <FeaturedPosts posts={featuredPosts} />

      <BlogCatalog
        posts={posts}
        categories={categories}
      />

      <BlogCTA />

    </main>
  );
}