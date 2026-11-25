import type { Metadata } from "next";

import { notFound } from "next/navigation";

import BlogDetail from "@/components/blog/BlogDetail";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogCTA from "@/components/blog/BlogCTA";

import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/services/blog.service";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = "https://ctit.com.pk";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    post.seoTitle ||
    `${post.title} | CTI System & Solutions`;

  const description =
    post.seoDescription || post.excerpt;

  const articleUrl =
    `${SITE_URL}/blog/${post.slug}`;

  const imageUrl =
    new URL(post.image, SITE_URL).toString();

  return {
    title,
    description,

    keywords: post.tags,

    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title,
      description,

      url: articleUrl,

      type: "article",

      publishedTime: new Date(
        post.publishedAt
      ).toISOString(),

      modifiedTime: new Date(
        post.updatedAt
      ).toISOString(),

      authors: [post.author.name],

      images: [
        {
          url: imageUrl,
          alt: post.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogPosts(
    post.slug,
    post.categoryId
  );

  const structuredData = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: post.title,

    description: post.excerpt,

    image: new URL(
      post.image,
      SITE_URL
    ).toString(),

    datePublished: new Date(
      post.publishedAt
    ).toISOString(),

    dateModified: new Date(
      post.updatedAt
    ).toISOString(),

    author: {
      "@type": "Organization",
      name: post.author.name,
    },

    publisher: {
      "@type": "Organization",
      name: "CTI System & Solutions",
      url: SITE_URL,
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": `${SITE_URL}/blog/${post.slug}`,
    },

    articleSection: post.category.name,

    keywords: post.tags.join(", "),
  };

  return (
    <main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      <BlogDetail post={post} />

      <RelatedPosts posts={relatedPosts} />

      <BlogCTA />

    </main>
  );
}