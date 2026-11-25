"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  SearchX,
  ArrowDown,
} from "lucide-react";

import type {
  PublicBlogPost,
  BlogCategory,
} from "@/types/blog";

import BlogFilters from "./BlogFilters";
import BlogGrid from "./BlogGrid";

interface BlogCatalogProps {
  posts: PublicBlogPost[];
  categories: BlogCategory[];
}

const PAGE_SIZE = 6;

export default function BlogCatalog({
  posts,
  categories,
}: BlogCatalogProps) {
  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [visibleCount, setVisibleCount] =
    useState(PAGE_SIZE);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" ||
        post.categoryId === activeCategory;

      const searchableContent = [
        post.title,
        post.excerpt,
        post.category.name,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableContent.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [posts, search, activeCategory]);

  const visiblePosts = filteredPosts.slice(
    0,
    visibleCount
  );

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  }

  function resetFilters() {
    setSearch("");
    setActiveCategory("all");
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section
      id="latest-articles"
      className="scroll-mt-28 bg-[#f6f8fb] py-8 sm:py-12 lg:py-14"
    >

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="mb-5 sm:mb-7">

          <div className="mb-2 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-red-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 sm:text-xs">
              Knowledge Hub
            </span>
          </div>

          <h2 className="text-[28px] font-extrabold tracking-tight text-[#0b162c] sm:text-4xl">
            Latest{" "}
            <span className="text-red-600">
              Articles.
            </span>
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 sm:block">
            Discover technical insights, industry knowledge
            and infrastructure solutions.
          </p>

        </div>

        {/* Filters */}

        <BlogFilters
          categories={categories}
          activeCategory={activeCategory}
          search={search}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
        />

        {/* Results count */}

        <div
          aria-live="polite"
          className="mb-4 text-xs font-medium text-slate-500"
        >
          Showing {visiblePosts.length} of{" "}
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1
            ? "article"
            : "articles"}
        </div>

        {/* Articles */}

        {visiblePosts.length > 0 ? (

          <BlogGrid posts={visiblePosts} />

        ) : (

          <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-12 text-center">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#203164]">
              <SearchX size={26} />
            </div>

            <h3 className="text-lg font-bold text-[#0b162c]">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try a different search or category.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-lg bg-[#0b162c] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#203164]"
            >
              Reset Filters
            </button>

          </div>

        )}

        {/* Load more */}

        {visibleCount < filteredPosts.length && (

          <div className="mt-7 flex justify-center sm:mt-9">

            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (previous) => previous + PAGE_SIZE
                )
              }
              className="inline-flex items-center gap-2 rounded-xl border border-[#203164] bg-white px-6 py-3 text-sm font-semibold text-[#203164] transition-colors hover:bg-[#203164] hover:text-white"
            >
              Load More Articles

              <ArrowDown size={16} />
            </button>

          </div>

        )}

      </div>
    </section>
  );
}