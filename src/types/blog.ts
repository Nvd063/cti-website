export type BlogStatus = "DRAFT" | "PUBLISHED";

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
}

export interface BlogAuthor {
  name: string;
  designation?: string;
  image?: string;
}

export interface BlogContentBlock {
  id: string;
  type: "heading" | "paragraph" | "list" | "quote" | "image";
  text?: string;
  items?: string[];
  image?: string;
  imageAlt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;

  excerpt: string;
  content: BlogContentBlock[];

  image: string;
  imageAlt: string;

  categoryId: string;
  author: BlogAuthor;

  tags: string[];

  featured: boolean;
  status: BlogStatus;

  publishedAt: string;
  updatedAt: string;

  sortOrder: number;

  seoTitle?: string;
  seoDescription?: string;
}

export interface PublicBlogPost extends BlogPost {
  category: BlogCategory;
  readingTime: number;
}