"use client";

import Image from "next/image";

import {
  ArrowUpRight,
  MessageCircle,
  Package,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";
import type { PublicProduct } from "@/types/product";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  product: PublicProduct;
  categoryName?: string;
  index?: number;
}

export default function ProductCard({
  product,
  categoryName,
  index = 0,
}: ProductCardProps) {
  const reduceMotion = useReducedMotion();

  const whatsappLink = generateWhatsAppLink({
    product: product.name,
    category: categoryName,
    model: product.model,
    sku: product.sku,
    customMessage: product.whatsappMessage,
  });

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Inquire about ${product.name} on WhatsApp`}
      initial={
        reduceMotion ? false : { opacity: 0, y: 10 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        delay: reduceMotion ? 0 : Math.min(index, 8) * 0.035,
      }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:border-[#203164]/30 hover:shadow-lg sm:rounded-2xl"
    >
      {/* Product Image */}

      <div className="relative aspect-[7/5] overflow-hidden bg-[#edf1f6] sm:aspect-[4/3]">

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 767px) 50vw, (max-width: 1535px) 33vw, 25vw"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 sm:p-4"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Package
              size={32}
              strokeWidth={1.3}
              className="text-slate-400"
            />
          </div>
        )}

        {product.featured && (
          <span className="absolute left-2 top-2 rounded bg-[#203164] px-1.5 py-1 text-[8px] font-semibold uppercase tracking-wide text-white sm:px-2 sm:text-[9px]">
            Featured
          </span>
        )}

        <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#203164] shadow-sm transition-colors group-hover:bg-red-600 group-hover:text-white sm:h-9 sm:w-9">
          <ArrowUpRight
            size={14}
            className="sm:h-[17px] sm:w-[17px]"
          />
        </div>

      </div>

      {/* Product Information */}

      <div className="flex flex-1 flex-col p-2.5 sm:p-4">

        <p className="mb-1 truncate text-[9px] font-bold uppercase tracking-wide text-red-600 sm:text-[10px]">
          {categoryName || "CTI Products"}
        </p>

        <h3 className="line-clamp-2 min-h-[2.5em] text-[13px] font-bold leading-tight text-[#0b162c] transition-colors group-hover:text-[#203164] sm:text-base">
          {product.name}
        </h3>

        {/* Brand and Model — Desktop */}

        {(product.brand || product.model) && (
          <div className="mt-1.5 hidden flex-wrap gap-2 text-xs text-slate-500 sm:flex">

            {product.brand && (
              <span>{product.brand}</span>
            )}

            {product.model && (
              <span className="rounded bg-slate-100 px-1.5 py-0.5">
                {product.model}
              </span>
            )}

          </div>
        )}

        {/* Description — Desktop Only */}

        <p className="mt-2 hidden text-xs leading-relaxed text-slate-500 sm:line-clamp-2">
          {product.shortDescription || product.description}
        </p>

        {/* Price and Inquiry */}

        <div className="mt-auto pt-2.5 sm:pt-4">

          <div className="border-t border-slate-100 pt-2 sm:pt-3">

            <ProductPrice
              price={product.price}
              showPrice={product.showPrice}
              currency={product.currency}
            />

          </div>

          <div className="mt-2.5 flex min-h-10 items-center justify-between gap-1 rounded-lg bg-[#0b162c] px-2 py-2 text-white transition-colors group-hover:bg-[#203164] sm:mt-3 sm:px-3 sm:py-3">

            <div className="flex min-w-0 items-center gap-1.5">

              <MessageCircle
                size={15}
                className="shrink-0 text-green-400"
              />

              <span className="whitespace-nowrap text-[10px] font-semibold sm:text-xs">
                Inquire Now
              </span>

            </div>

            <ArrowUpRight
              size={12}
              className="shrink-0 text-red-400"
            />

          </div>

        </div>

      </div>

    </motion.a>
  );
}