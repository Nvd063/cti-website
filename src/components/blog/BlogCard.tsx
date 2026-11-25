"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { PublicBlogPost } from "@/types/blog";

interface BlogCardProps {
  post: PublicBlogPost;
  index?: number;
}

export default function BlogCard({
  post,
  index = 0,
}: BlogCardProps) {
  const reduceMotion = useReducedMotion();

  const formattedDate = new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }
  ).format(new Date(post.publishedAt));

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 12 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        delay: reduceMotion
          ? 0
          : Math.min(index, 6) * 0.04,
      }}
      className="h-full"
    >

      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-sm transition-shadow hover:border-[#203164]/30 hover:shadow-lg sm:rounded-[20px]"
      >

        {/* Article image */}

        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-[16/10]">

          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 767px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#203164] shadow-sm transition-colors group-hover:bg-red-600 group-hover:text-white sm:right-3 sm:top-3 sm:h-10 sm:w-10">
            <ArrowUpRight size={16} />
          </div>

        </div>

        {/* Article content */}

        <div className="flex flex-1 flex-col p-3 sm:p-5">

          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-red-600 sm:text-[10px]">
            {post.category.name}
          </p>

          <h3 className="text-sm font-bold leading-snug text-[#0b162c] transition-colors group-hover:text-[#203164] sm:text-xl">
            {post.title}
          </h3>

          <p className="mt-3 hidden text-sm leading-relaxed text-slate-500 sm:line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-4">

            <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500 sm:text-xs">

              <time
                dateTime={post.publishedAt}
                className="hidden sm:inline"
              >
                {formattedDate}
              </time>

              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

              <span className="flex items-center gap-1">
                <Clock3 size={12} />

                {post.readingTime} min read
              </span>

            </div>

            <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">

              <span className="text-[11px] font-bold text-[#203164] sm:text-sm">
                Read Article
              </span>

              <ArrowUpRight
                size={15}
                className="shrink-0 text-red-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </div>

          </div>

        </div>

      </Link>

    </motion.article>
  );
}