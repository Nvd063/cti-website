import "server-only";

import {
  products,
  productCategories,
} from "@/data/products";

import type {
  Product,
  ProductCategory,
  PublicProduct,
  ProductFilters,
  ProductQueryResult,
} from "@/types/product";

// ========================================
// PUBLIC CATEGORIES
// ========================================

export async function getProductCategories(): Promise<
  ProductCategory[]
> {
  return productCategories
    .filter(
      (category) => category.status === "PUBLISHED"
    )
    .sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
}

// ========================================
// SAFE PUBLIC PRODUCT
// ========================================

function toPublicProduct(
  product: Product
): PublicProduct | null {
  const category = productCategories.find(
    (item) =>
      item.id === product.categoryId &&
      item.status === "PUBLISHED"
  );

  if (
    !category ||
    product.status !== "PUBLISHED"
  ) {
    return null;
  }

  const visiblePrice =
    product.showPrice &&
    product.price !== null &&
    Number.isFinite(product.price) &&
    product.price >= 0;

  return {
    ...product,
    category,
    showPrice: visiblePrice,
    price: visiblePrice ? product.price : null,
  };
}

// ========================================
// GET ALL PUBLIC PRODUCTS
// ========================================

export async function getAllProducts(): Promise<
  PublicProduct[]
> {
  return products
    .map(toPublicProduct)
    .filter(
      (product): product is PublicProduct =>
        product !== null
    )
    .sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
}

// ========================================
// GET FEATURED PRODUCTS
// ========================================

export async function getFeaturedProducts(
  limit = 8
): Promise<PublicProduct[]> {
  const allProducts = await getAllProducts();

  return allProducts
    .filter((product) => product.featured)
    .slice(0, Math.max(0, limit));
}

// ========================================
// GET PRODUCT BY SLUG
// ========================================

export async function getProductBySlug(
  slug: string
): Promise<PublicProduct | null> {
  const allProducts = await getAllProducts();

  return (
    allProducts.find(
      (product) => product.slug === slug
    ) ?? null
  );
}

// ========================================
// GET PRODUCTS BY CATEGORY
// ========================================

export async function getProductsByCategory(
  categorySlug: string
): Promise<PublicProduct[]> {
  const allProducts = await getAllProducts();

  return allProducts.filter(
    (product) =>
      product.category.slug === categorySlug
  );
}

// ========================================
// SEARCH, FILTER, SORT & PAGINATION
// ========================================

export async function getFilteredProducts(
  filters: ProductFilters = {}
): Promise<ProductQueryResult> {
  let result = await getAllProducts();

  const search =
    filters.search?.trim().toLowerCase() ?? "";

  // Search
  if (search) {
    result = result.filter((product) => {
      const searchableText = [
        product.name,
        product.description,
        product.shortDescription,
        product.category.name,
        product.brand,
        product.model,
        product.sku,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  }

  // Category Filter
  if (
    filters.category &&
    filters.category !== "all"
  ) {
    result = result.filter(
      (product) =>
        product.category.slug === filters.category
    );
  }

  // Featured Filter
  if (filters.featured !== undefined) {
    result = result.filter(
      (product) =>
        product.featured === filters.featured
    );
  }

  // Sorting
  switch (filters.sort) {
    case "name-asc":
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    case "name-desc":
      result.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      break;

    case "price-low":
      result.sort((a, b) => {
        if (a.price === null) {
          return b.price === null ? 0 : 1;
        }

        if (b.price === null) return -1;

        return a.price - b.price;
      });
      break;

    case "price-high":
      result.sort((a, b) => {
        if (a.price === null) {
          return b.price === null ? 0 : 1;
        }

        if (b.price === null) return -1;

        return b.price - a.price;
      });
      break;

    case "featured":
    default:
      result.sort(
        (a, b) =>
          Number(b.featured) -
            Number(a.featured) ||
          a.sortOrder - b.sortOrder
      );
      break;
  }

  // Pagination
  const total = result.length;

  const requestedLimit = filters.limit ?? 12;

  const limit = Number.isFinite(requestedLimit)
    ? Math.min(
        100,
        Math.max(1, Math.floor(requestedLimit))
      )
    : 12;

  const totalPages = Math.max(
    1,
    Math.ceil(total / limit)
  );

  const requestedPage = filters.page ?? 1;

  const page = Number.isFinite(requestedPage)
    ? Math.min(
        totalPages,
        Math.max(1, Math.floor(requestedPage))
      )
    : 1;

  const startIndex = (page - 1) * limit;

  return {
    products: result.slice(
      startIndex,
      startIndex + limit
    ),
    total,
    page,
    limit,
    totalPages,
  };
}