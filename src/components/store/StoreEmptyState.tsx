"use client";

import { SearchX, RotateCcw } from "lucide-react";

interface StoreEmptyStateProps {
  onReset: () => void;
}

export default function StoreEmptyState({
  onReset,
}: StoreEmptyStateProps) {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-12 text-center">

      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#203164]/5">

        <SearchX
          size={36}
          strokeWidth={1.5}
          className="text-[#203164]"
        />

      </div>

      <h3 className="text-xl font-bold text-[#0b162c]">
        No Products Found
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
        We could not find products matching your current
        search or filters. Try another search or explore
        our complete product collection.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#203164] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#0b162c]"
      >
        <RotateCcw size={16} />
        Reset Filters
      </button>

    </div>
  );
}