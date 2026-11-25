"use client";

import { SlidersHorizontal, RotateCcw } from "lucide-react";

export type PriceFilter = "all" | "priced" | "inquiry";

interface ProductFiltersProps {
  featuredOnly: boolean;
  priceFilter: PriceFilter;
  onFeaturedChange: (value: boolean) => void;
  onPriceFilterChange: (value: PriceFilter) => void;
  onReset: () => void;
}

export default function ProductFilters({
  featuredOnly,
  priceFilter,
  onFeaturedChange,
  onPriceFilterChange,
  onReset,
}: ProductFiltersProps) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white p-5">

      <div className="mb-5 flex items-center justify-between gap-2">

        <div className="flex items-center gap-2">
          <SlidersHorizontal
            size={18}
            className="text-[#203164]"
          />

          <h3 className="text-sm font-bold text-[#0b162c]">
            Refine Results
          </h3>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1 text-[10px] font-semibold text-red-600 hover:text-red-700"
        >
          <RotateCcw size={12} />
          Reset
        </button>

      </div>

      <div className="border-b border-slate-100 pb-5">

        <h4 className="mb-3 text-xs font-bold text-[#0b162c]">
          Product Selection
        </h4>

        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="checkbox"
            checked={featuredOnly}
            onChange={(event) =>
              onFeaturedChange(event.target.checked)
            }
            className="h-4 w-4 accent-[#203164]"
          />

          <span className="text-xs text-slate-600">
            Featured Products
          </span>

        </label>

      </div>

      <div className="pt-5">

        <h4 className="mb-3 text-xs font-bold text-[#0b162c]">
          Price Availability
        </h4>

        <div className="space-y-3">

          {(
            [
              ["all", "All Products"],
              ["priced", "Price Available"],
              ["inquiry", "Price on Request"],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="radio"
                checked={priceFilter === value}
                onChange={() => onPriceFilterChange(value)}
                className="h-4 w-4 accent-[#203164]"
              />

              <span className="text-xs text-slate-600">
                {label}
              </span>
            </label>
          ))}

        </div>
      </div>
    </div>
  );
}