"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface StorePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function StorePagination({
  currentPage,
  totalPages,
  onPageChange,
}: StorePaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  ).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      Math.abs(page - currentPage) <= 1
  );

  return (
    <nav
      aria-label="Product pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >

      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#203164] transition hover:border-[#203164] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={19} />
      </button>

      {pages.map((page, index) => (
        <div key={page} className="flex items-center gap-2">

          {index > 0 && page - pages[index - 1] > 1 && (
            <span className="px-1 text-sm text-slate-400">
              ...
            </span>
          )}

          <button
            type="button"
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            onClick={() => onPageChange(page)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition ${
              currentPage === page
                ? "border-[#203164] bg-[#203164] text-white shadow-md"
                : "border-slate-200 bg-white text-[#203164] hover:border-[#203164]"
            }`}
          >
            {page}
          </button>

        </div>
      ))}

      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#203164] transition hover:border-[#203164] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={19} />
      </button>

    </nav>
  );
}