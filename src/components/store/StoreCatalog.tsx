"use client";

import { useEffect, useMemo, useState, useRef } from "react";

import { MessageCircle, ArrowUpRight, Phone, X } from "lucide-react";

import type { PublicProduct, ProductCategory } from "@/types/product";

import { generateWhatsAppLink } from "@/lib/whatsapp";

import StoreToolbar, { type StoreSort } from "./StoreToolbar";

import ProductCategories from "./ProductCategories";

import ProductFilters, { type PriceFilter } from "./ProductFilters";

import ProductGrid from "./ProductGrid";
import StoreEmptyState from "./StoreEmptyState";
import StorePagination from "./StorePagination";

interface StoreCatalogProps {
  products: PublicProduct[];
  categories: ProductCategory[];
}

const PRODUCTS_PER_PAGE = 12;

function hasPublicPrice(product: PublicProduct) {
  return (
    product.showPrice &&
    typeof product.price === "number" &&
    Number.isFinite(product.price) &&
    product.price >= 0
  );
}

export default function StoreCatalog({
  products,
  categories,
}: StoreCatalogProps) {
  // Store state

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [sort, setSort] = useState<StoreSort>("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filterDialogRef = useRef<HTMLDialogElement>(null);

  // Category names

  const categoryMap = useMemo(() => {
    return new Map(categories.map((category) => [category.id, category.name]));
  }, [categories]);

  // Category product counts

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    products.forEach((product) => {
      counts[product.categoryId] = (counts[product.categoryId] || 0) + 1;
    });

    return counts;
  }, [products]);

  // Search, filtering and sorting

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;

      const searchableText = [
        product.name,
        product.description,
        product.shortDescription,
        product.brand,
        product.model,
        product.sku,
        categoryMap.get(product.categoryId),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      const matchesFeatured = !featuredOnly || product.featured;

      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "priced" && hasPublicPrice(product)) ||
        (priceFilter === "inquiry" && !hasPublicPrice(product));

      return (
        matchesCategory && matchesSearch && matchesFeatured && matchesPrice
      );
    });

    return result.sort((a, b) => {
      switch (sort) {
        case "name-asc":
          return a.name.localeCompare(b.name);

        case "name-desc":
          return b.name.localeCompare(a.name);

        case "price-asc":
        case "price-desc": {
          const aPriced = hasPublicPrice(a);
          const bPriced = hasPublicPrice(b);

          if (!aPriced && !bPriced) return 0;
          if (!aPriced) return 1;
          if (!bPriced) return -1;

          return sort === "price-asc"
            ? Number(a.price) - Number(b.price)
            : Number(b.price) - Number(a.price);
        }

        default:
          return (
            Number(b.featured) - Number(a.featured) || a.sortOrder - b.sortOrder
          );
      }
    });
  }, [
    products,
    search,
    selectedCategory,
    featuredOnly,
    priceFilter,
    sort,
    categoryMap,
  ]);

  // Pagination

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );

  const activePage = Math.min(currentPage, totalPages);

  const visibleProducts = useMemo(() => {
    const start = (activePage - 1) * PRODUCTS_PER_PAGE;

    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, activePage]);

  // Accessible mobile filter drawer

  useEffect(() => {
    const dialog = filterDialogRef.current;

    if (!dialog) return;

    if (mobileFiltersOpen && !dialog.open) {
      dialog.showModal();
    } else if (!mobileFiltersOpen && dialog.open) {
      dialog.close();
    }
  }, [mobileFiltersOpen]);

  useEffect(() => {
    if (!mobileFiltersOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileFiltersOpen]);

  // Event handlers

  function handleSearchChange(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(value: string) {
    setSelectedCategory(value);
    setCurrentPage(1);
  }

  function handleFeaturedChange(value: boolean) {
    setFeaturedOnly(value);
    setCurrentPage(1);
  }

  function handlePriceFilterChange(value: PriceFilter) {
    setPriceFilter(value);
    setCurrentPage(1);
  }

  function handleSortChange(value: StoreSort) {
    setSort(value);
    setCurrentPage(1);
  }

  function resetFilters() {
    setSearch("");
    setSelectedCategory("all");
    setFeaturedOnly(false);
    setPriceFilter("all");
    setSort("default");
    setCurrentPage(1);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);

    document.getElementById("product-catalog")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }

  const whatsappLink = generateWhatsAppLink({
    customMessage:
      "Hello CTI System & Solutions, I need assistance with your product catalog.",
  });

  // Reusable sidebar content

  const sidebarContent = (
    <div className="space-y-4">
      <ProductCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        counts={categoryCounts}
        totalProducts={products.length}
      />

      <ProductFilters
        featuredOnly={featuredOnly}
        priceFilter={priceFilter}
        onFeaturedChange={handleFeaturedChange}
        onPriceFilterChange={handlePriceFilterChange}
        onReset={resetFilters}
      />

      <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#08152d] to-[#203164] p-5 text-white">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10">
          <Phone size={19} className="text-red-500" />
        </div>

        <h3 className="text-lg font-bold">Need Assistance?</h3>

        <p className="mt-2 text-xs leading-relaxed text-slate-300">
          Our team can help you select the right products for your project
          requirements.
        </p>

        <p className="mt-4 text-sm font-bold">+92 300 8443454</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-between gap-2 rounded-xl bg-red-600 px-3 py-3 text-xs font-semibold transition hover:bg-red-700"
        >
          <MessageCircle size={17} />
          Chat With Our Team
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="product-catalog"
      className="scroll-mt-32 bg-[#f5f7fa] pb-6 pt-24 sm:pb-10 sm:pt-32 lg:pt-36"
    >
      <div className="mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-10">
        {/* Catalog heading */}

        {/* Catalog Heading */}

        <div className="mb-4 flex items-end justify-between gap-3 sm:mb-7">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-red-600" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-600 sm:text-[10px]">
                CTI Product Collection
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-[#0b162c] sm:text-4xl">
              Explore Products
              <span className="text-red-600">.</span>
            </h1>

            <p className="mt-2 hidden max-w-xl text-sm text-slate-500 sm:block">
              Professional safety, security and integrated technology products
              for your infrastructure.
            </p>
          </div>

          <div className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <p className="text-xs font-bold text-[#203164] sm:text-sm">
              {products.length} Products
            </p>
          </div>
        </div>

        {/* Catalog layout */}

        <div className="grid items-start gap-3 sm:gap-5 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)]">
          {/* Desktop sidebar */}

          <aside className="hidden lg:block">{sidebarContent}</aside>

          {/* Product content */}

          <div className="min-w-0">
            <StoreToolbar
              search={search}
              sort={sort}
              resultCount={filteredProducts.length}
              onSearchChange={handleSearchChange}
              onSortChange={handleSortChange}
              onOpenFilters={() => setMobileFiltersOpen(true)}
            />

            {selectedCategory !== "all" && (
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500">
                  Selected Category:
                </span>

                <button
                  type="button"
                  onClick={() => handleCategoryChange("all")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#203164]/10 px-3 py-2 text-xs font-semibold text-[#203164]"
                >
                  {categoryMap.get(selectedCategory) || "Category"}
                  <X size={13} />
                </button>
              </div>
            )}

            {visibleProducts.length > 0 ? (
              <>
                <ProductGrid
                  products={visibleProducts}
                  categories={categories}
                />

                <StorePagination
                  currentPage={activePage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <StoreEmptyState onReset={resetFilters} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}

      <dialog
        ref={filterDialogRef}
        aria-labelledby="mobile-filter-title"
        onClose={() => setMobileFiltersOpen(false)}
        onCancel={() => setMobileFiltersOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setMobileFiltersOpen(false);
          }
        }}
        className="fixed inset-y-0 left-0 m-0 h-dvh max-h-none w-[88%] max-w-[380px] overflow-hidden bg-white p-0 text-[#0b162c] shadow-2xl backdrop:bg-[#08152d]/60"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">
                Product Catalog
              </p>

              <h3 id="mobile-filter-title" className="mt-1 text-lg font-bold">
                Browse & Filter
              </h3>
            </div>

            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setMobileFiltersOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#203164]"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#f5f7fa] p-4">
            {mobileFiltersOpen && sidebarContent}
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full rounded-xl bg-[#203164] px-5 py-3.5 text-sm font-semibold text-white"
            >
              Show {filteredProducts.length} Products
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
