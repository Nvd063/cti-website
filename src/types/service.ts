export interface Solution {
  id: string;
  title: string;
  slug: string;
  image?: string;
  description?: string;
  whatsappMessage?: string;
}

export interface Service {
  id: string;

  // Basic information
  name: string;
  title: string;
  slug: string;
  description: string;
  image: string;

  // Detail page content
  category?: string;
  heroTitle?: string;
  heroImage?: string;
  heroDescription?: string;
  overviewTitle?: string;
  overview?: string;

  // Sub-services
  solutions: Solution[];

  // Display settings
  featured: boolean;
  status: "DRAFT" | "PUBLISHED";
  sortOrder: number;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}