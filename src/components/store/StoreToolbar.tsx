"use client";

import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";

export type StoreSort =
  | "default"
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc";

interface StoreToolbarProps {
  search: string;
  sort: StoreSort;
  resultCount: number;
  onSearchChange: (value: string) => void;
  onSortChange: (value: StoreSort) => void;
  onOpenFilters: () => void;
}

export default function StoreToolbar({
  search,
  sort,
  resultCount,
  onSearchChange,
  onSortChange,
  onOpenFilters,
}: StoreToolbarProps) {
  return (
    <div className="mb-6">

      {/* SEARCH AND FILTER TOOLBAR */}

      <div className="flex flex-col gap-3 rounded-[18px] border border-slate-200 bg-white p-3 sm:flex-row">

        {/* LIVE SEARCH */}

        <div className="relative flex min-w-0 flex-1 items-center">

          <Search
            size={19}
            className="pointer-events-none absolute left-4 text-slate-400"
          />

          <input
            type="search"
            aria-label="Search products"
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search products, brands, models..."
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-[#0b162c] outline-none transition placeholder:text-slate-400 focus:border-[#203164]/50 focus:bg-white"
          />

          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onSearchChange("")}
              className="absolute right-3 text-slate-400 transition-colors hover:text-red-600"
            >
              <X size={17} />
            </button>
          )}

        </div>

        {/* FILTER AND SORT CONTROLS */}

        <div className="flex gap-2">

          {/* MOBILE FILTER BUTTON */}

          <button
            type="button"
            onClick={onOpenFilters}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-[#203164] transition-colors hover:bg-slate-50 lg:hidden"
          >
            <SlidersHorizontal size={17} />

            Filters
          </button>

          {/* SORT PRODUCTS */}

          <div className="relative flex-1 sm:flex-none">

            <select
              aria-label="Sort products"
              value={sort}
              onChange={(event) =>
                onSortChange(event.target.value as StoreSort)
              }
              className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-9 text-xs font-semibold text-[#0b162c] outline-none transition-colors focus:border-[#203164]/50 sm:w-[180px]"
            >

              <option value="default">
                Recommended
              </option>

              <option value="name-asc">
                Name: A–Z
              </option>

              <option value="name-desc">
                Name: Z–A
              </option>

              <option value="price-asc">
                Price: Low to High
              </option>

              <option value="price-desc">
                Price: High to Low
              </option>

            </select>

            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

          </div>

        </div>

      </div>

      {/* PRODUCT RESULTS COUNT */}

      <div className="mt-4 flex items-center justify-between">

        <p
          aria-live="polite"
          className="text-xs text-slate-500 sm:text-sm"
        >
          Showing{" "}

          <span className="font-bold text-[#0b162c]">
            {resultCount}
          </span>{" "}

          {resultCount === 1 ? "product" : "products"}

        </p>

        <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-slate-400 sm:block">
          CTI Product Collection
        </span>

      </div>

    </div>
  );
}