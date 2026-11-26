import "server-only";

import { cacheLife } from "next/cache";

import {
  blogPosts,
  blogCategories,
} from "@/data/blogs";

import type {
  BlogPost,
  BlogCategory,
  PublicBlogPost,
} from "@/types/blog";

function calculateReadingTime(post: BlogPost): number {
  const content = post.content
    .map((block) =>
      [
        block.text || "",
        ...(block.items || []),
      ].join(" ")
    )
    .join(" ");

  const wordCount = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 200));
}

function toPublicPost(
  post: BlogPost
): PublicBlogPost | null {
  const category = blogCategories.find(
    (item) => item.id === post.categoryId
  );

  if (!category) return null;

  return {
    ...post,
    category,
    readingTime: calculateReadingTime(post),
  };
}

export async function getBlogCategories(): Promise<
  BlogCategory[]
> {
  return [...blogCategories].sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
}

export async function getAllBlogPosts(): Promise<
  PublicBlogPost[]
> {
  "use cache";

  cacheLife("minutes");

  const currentTime = Date.now();

  return blogPosts
    .filter(
      (post) =>
        post.status === "PUBLISHED" &&
        new Date(post.publishedAt).getTime() <= currentTime
    )
    .map(toPublicPost)
    .filter(
      (post): post is PublicBlogPost => post !== null
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );
}

export async function getFeaturedBlogPosts(): Promise<
  PublicBlogPost[]
> {
  const posts = await getAllBlogPosts();

  return posts
    .filter((post) => post.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .slice(0, 3);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<PublicBlogPost | null> {
  const posts = await getAllBlogPosts();

  return posts.find((post) => post.slug === slug) || null;
}

export async function getRelatedBlogPosts(
  slug: string,
  categoryId: string,
  limit = 3
): Promise<PublicBlogPost[]> {
  const posts = await getAllBlogPosts();

  const available = posts.filter(
    (post) => post.slug !== slug
  );

  const sameCategory = available.filter(
    (post) => post.categoryId === categoryId
  );

  const otherCategories = available.filter(
    (post) => post.categoryId !== categoryId
  );

  return [
    ...sameCategory,
    ...otherCategories,
  ].slice(0, limit);
}