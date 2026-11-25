"use client";

import {
  ChevronRight,
  LayoutGrid,
  Layers3,
} from "lucide-react";

import type { ProductCategory } from "@/types/product";

interface ProductCategoriesProps {
  categories: ProductCategory[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  counts: Record<string, number>;
  totalProducts: number;
}

export default function ProductCategories({
  categories,
  selectedCategory,
  onCategoryChange,
  counts,
  totalProducts,
}: ProductCategoriesProps) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white p-4 sm:p-5">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#203164]/10 text-[#203164]">
          <Layers3 size={20} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-red-600">
            Browse Catalog
          </p>

          <h3 className="text-base font-bold text-[#0b162c]">
            Categories
          </h3>
        </div>

      </div>

      <div className="space-y-2">

        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          aria-pressed={selectedCategory === "all"}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-semibold transition ${
            selectedCategory === "all"
              ? "bg-[#203164] text-white shadow-md"
              : "bg-slate-50 text-[#0b162c] hover:bg-slate-100"
          }`}
        >
          <LayoutGrid size={16} />

          <span className="flex-1">
            All Products
          </span>

          <span className="opacity-70">
            {totalProducts}
          </span>
        </button>

        {categories.map((category) => {
          const active = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(category.id)}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-3 text-left text-xs font-semibold transition ${
                active
                  ? "bg-[#203164] text-white shadow-md"
                  : "bg-slate-50 text-[#0b162c] hover:bg-slate-100"
              }`}
            >
              <span className="flex-1">
                {category.name}
              </span>

              <span className="text-[10px] opacity-60">
                {counts[category.id] || 0}
              </span>

              <ChevronRight
                size={14}
                className={active ? "text-white" : "text-red-600"}
              />
            </button>
          );
        })}

      </div>
    </div>
  );
}