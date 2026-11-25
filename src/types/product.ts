export type ProductStatus = "DRAFT" | "PUBLISHED";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  sortOrder: number;
  status: ProductStatus;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;

  // Basic Information
  name: string;
  slug: string;
  description: string;
  shortDescription: string;

  // Category
  categoryId: string;

  // Product Identification
  brand?: string;
  model?: string;
  sku?: string;

  // Media
  image: string;
  gallery?: string[];

  // Optional Pricing
  price: number | null;
  showPrice: boolean;
  currency: string;

  // Product Details
  features?: string[];
  specifications?: ProductSpecification[];

  // WhatsApp Inquiry
  whatsappMessage?: string;

  // Display Settings
  featured: boolean;
  status: ProductStatus;
  sortOrder: number;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}

// Safe product data for public storefront
export interface PublicProduct extends Omit<Product, "price"> {
  price: number | null;
  category: ProductCategory;
}

export type ProductSort =
  | "featured"
  | "name-asc"
  | "name-desc"
  | "price-low"
  | "price-high";

export interface ProductFilters {
  search?: string;
  category?: string;
  featured?: boolean;
  sort?: ProductSort;
  page?: number;
  limit?: number;
}

export interface ProductQueryResult {
  products: PublicProduct[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}