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

interface FeaturedPostsProps {
  posts: PublicBlogPost[];
}

export default function FeaturedPosts({
  posts,
}: FeaturedPostsProps) {
  const reduceMotion = useReducedMotion();

  if (!posts.length) return null;

  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);

  return (
    <section className="bg-white py-7 sm:py-10 lg:py-12">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        {/* Heading */}

        <div className="mb-5 sm:mb-7">

          <div className="mb-2 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-red-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 sm:text-xs">
              Editor&apos;s Selection
            </span>
          </div>

          <h2 className="text-[26px] font-extrabold tracking-tight text-[#0b162c] sm:text-4xl">
            Featured{" "}
            <span className="text-red-600">
              Insights.
            </span>
          </h2>

        </div>

        <div
          className={`grid gap-3 sm:gap-4 ${
            secondaryPosts.length
              ? "lg:grid-cols-[1.5fr_1fr]"
              : ""
          }`}
        >

          {/* Main featured article */}

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
            }}
            className="h-full"
          >

            <Link
              href={`/blog/${mainPost.slug}`}
              className="group relative flex min-h-[300px] h-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#0b162c] sm:min-h-[380px] lg:min-h-[430px]"
            >

              <Image
                src={mainPost.image}
                alt={mainPost.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/60 to-transparent" />

              <div className="absolute left-4 top-4 rounded-md bg-red-600 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white sm:left-6 sm:top-6">
                Featured Article
              </div>

              <div className="relative p-5 text-white sm:p-7 lg:p-8">

                <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] sm:text-xs">

                  <span className="font-bold uppercase tracking-wider text-red-400">
                    {mainPost.category.name}
                  </span>

                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock3 size={13} />

                    {mainPost.readingTime} min read
                  </span>

                </div>

                <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                  {mainPost.title}
                </h3>

                <p className="mt-3 hidden max-w-lg text-sm leading-relaxed text-slate-300 sm:line-clamp-2">
                  {mainPost.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold sm:mt-5 sm:text-sm">
                  Read Article

                  <ArrowUpRight
                    size={17}
                    className="text-red-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

              </div>

            </Link>

          </motion.div>

          {/* Secondary featured articles */}

          {secondaryPosts.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">

              {secondaryPosts.map((post) => (

                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative flex min-h-[190px] flex-col justify-end overflow-hidden rounded-[16px] bg-[#0b162c] sm:min-h-[230px] lg:min-h-[205px]"
                >

                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/50 to-transparent" />

                  <div className="relative p-3 text-white sm:p-5">

                    <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-red-400 sm:text-[10px]">
                      {post.category.name}
                    </p>

                    <h3 className="text-sm font-bold leading-snug sm:text-xl lg:text-2xl">
                      {post.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between gap-2">

                      <span className="text-[10px] text-slate-300 sm:text-xs">
                        {post.readingTime} min read
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </div>

                </Link>

              ))}

            </div>
          )}

        </div>
      </div>
    </section>
  );
}