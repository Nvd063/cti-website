"use client";

import {
  Search,
  X,
} from "lucide-react";

import type { BlogCategory } from "@/types/blog";

interface BlogFiltersProps {
  categories: BlogCategory[];

  activeCategory: string;
  search: string;

  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
}

export default function BlogFilters({
  categories,
  activeCategory,
  search,
  onCategoryChange,
  onSearchChange,
}: BlogFiltersProps) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:mb-7">

      {/* Categories */}

      <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        <button
          type="button"
          aria-pressed={activeCategory === "all"}
          onClick={() => onCategoryChange("all")}
          className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors ${
            activeCategory === "all"
              ? "border-[#0b162c] bg-[#0b162c] text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-[#203164]"
          }`}
        >
          All Articles
        </button>

        {categories.map((category) => (

          <button
            key={category.id}
            type="button"
            aria-pressed={activeCategory === category.id}
            onClick={() =>
              onCategoryChange(category.id)
            }
            className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors ${
              activeCategory === category.id
                ? "border-[#0b162c] bg-[#0b162c] text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#203164]"
            }`}
          >
            {category.name}
          </button>

        ))}

      </div>

      {/* Search */}

      <div className="relative w-full sm:max-w-md">

        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="search"
          aria-label="Search blog articles"
          value={search}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search articles..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-11 text-sm text-[#0b162c] outline-none transition focus:border-[#203164] focus:ring-2 focus:ring-[#203164]/10 [&::-webkit-search-cancel-button]:hidden"
        />

        {search && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-red-600"
          >
            <X size={17} />
          </button>
        )}

      </div>

    </div>
  );
}