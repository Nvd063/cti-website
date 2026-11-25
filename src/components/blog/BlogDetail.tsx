import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  CalendarDays,
  Clock3,
  UserRound,
  Quote,
} from "lucide-react";

import type { PublicBlogPost } from "@/types/blog";

interface BlogDetailProps {
  post: PublicBlogPost;
}

export default function BlogDetail({
  post,
}: BlogDetailProps) {
  const formattedDate = new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }
  ).format(new Date(post.publishedAt));

  const headings = post.content.filter(
    (block) => block.type === "heading"
  );

  return (
    <article className="bg-white">

      {/* Article hero */}

      <section className="relative isolate overflow-hidden bg-[#0b162c]">

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:45px_45px]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#203164]/70 blur-[100px]"
        />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:pb-20 lg:pt-36">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400"
          >

            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <ChevronRight size={12} />

            <Link
              href="/blog"
              className="hover:text-white"
            >
              Blog
            </Link>

            <ChevronRight size={12} />

            <span className="text-white">
              {post.category.name}
            </span>

          </nav>

          <div className="mb-4 flex items-center gap-3">

            <span className="h-[2px] w-8 bg-red-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-500 sm:text-xs">
              {post.category.name}
            </span>

          </div>

          <h1 className="max-w-4xl text-[30px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
            {post.title}
          </h1>

          <p className="mt-5 hidden max-w-3xl text-base leading-relaxed text-slate-300 sm:block">
            {post.excerpt}
          </p>

          {/* Metadata */}

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-slate-300 sm:text-sm">

            <span className="flex items-center gap-2">
              <UserRound
                size={15}
                className="text-red-400"
              />

              {post.author.name}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays
                size={15}
                className="text-red-400"
              />

              <time dateTime={post.publishedAt}>
                {formattedDate}
              </time>
            </span>

            <span className="flex items-center gap-2">
              <Clock3
                size={15}
                className="text-red-400"
              />

              {post.readingTime} min read
            </span>

          </div>

        </div>
      </section>

      {/* Cover image */}

      <div className="relative z-10 mx-auto -mt-4 max-w-[1200px] px-4 sm:-mt-7 sm:px-8 lg:-mt-10">

        <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-slate-200 bg-slate-100 shadow-lg sm:aspect-[21/9] sm:rounded-[24px]">

          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />

        </div>

      </div>

      {/* Article body */}

      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-12">

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">

          <div className="min-w-0">

            {post.content.map((block) => {
              switch (block.type) {

                case "heading":
                  return (
                    <h2
                      key={block.id}
                      id={`section-${block.id}`}
                      className="mb-4 mt-8 scroll-mt-28 text-2xl font-bold tracking-tight text-[#0b162c] sm:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );

                case "paragraph":
                  return (
                    <p
                      key={block.id}
                      className="mb-5 text-[15px] leading-[1.85] text-slate-600 sm:text-[17px]"
                    >
                      {block.text}
                    </p>
                  );

                case "list":
                  return (
                    <ul
                      key={block.id}
                      className="mb-6 list-disc space-y-3 pl-6 text-[15px] leading-relaxed text-slate-600 marker:text-red-600 sm:text-base"
                    >
                      {block.items?.map((item, index) => (
                        <li key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                case "quote":
                  return (
                    <blockquote
                      key={block.id}
                      className="my-7 rounded-r-xl border-l-4 border-red-600 bg-[#f6f8fb] p-5 sm:p-7"
                    >

                      <Quote
                        size={25}
                        className="mb-3 text-red-600"
                      />

                      <p className="text-lg font-medium leading-relaxed text-[#203164]">
                        {block.text}
                      </p>

                    </blockquote>
                  );

                case "image":
                  return block.image ? (
                    <figure
                      key={block.id}
                      className="my-7"
                    >

                      <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">

                        <Image
                          src={block.image}
                          alt={block.imageAlt || ""}
                          fill
                          sizes="(max-width: 1024px) 100vw, 800px"
                          className="object-cover"
                        />

                      </div>

                      {block.text && (
                        <figcaption className="mt-2 text-center text-xs text-slate-500">
                          {block.text}
                        </figcaption>
                      )}

                    </figure>
                  ) : null;

                default:
                  return null;
              }
            })}

            {/* Tags */}

            {post.tags.length > 0 && (

              <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-200 pt-6">

                {post.tags.map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-[#203164]"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            )}

            {/* Author */}

            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#f6f8fb] p-4 sm:p-6">

              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#203164] text-white">

                {post.author.image ? (

                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />

                ) : (

                  <UserRound size={25} />

                )}

              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                  Written By
                </p>

                <h3 className="mt-1 text-base font-bold text-[#0b162c]">
                  {post.author.name}
                </h3>

                {post.author.designation && (
                  <p className="mt-1 text-xs text-slate-500">
                    {post.author.designation}
                  </p>
                )}

              </div>

            </div>

            <Link
              href="/blog"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#203164] transition-colors hover:text-red-600"
            >
              <ArrowLeft size={17} />

              Back to All Articles
            </Link>

          </div>

          {/* Desktop article sidebar */}

          <aside className="hidden space-y-5 lg:sticky lg:top-28 lg:block">

            {headings.length > 0 && (

              <div className="rounded-2xl border border-slate-200 bg-[#f6f8fb] p-5">

                <h2 className="mb-4 border-b border-slate-200 pb-3 text-base font-bold text-[#0b162c]">
                  In This Article
                </h2>

                <nav aria-label="Article contents">
                  <ul className="space-y-3">

                    {headings.map((heading) => (

                      <li key={heading.id}>

                        <a
                          href={`#section-${heading.id}`}
                          className="block text-sm leading-relaxed text-slate-600 transition-colors hover:text-red-600"
                        >
                          {heading.text}
                        </a>

                      </li>

                    ))}

                  </ul>
                </nav>

              </div>

            )}

            <div className="rounded-2xl bg-[#0b162c] p-5 text-white">

              <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-red-400">
                CTI System & Solutions
              </p>

              <h3 className="text-xl font-bold">
                Need Expert Guidance?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Discuss your technical requirements with
                our professional team.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-red-700"
              >
                Contact Our Team

                <ArrowUpRight size={15} />
              </Link>

            </div>

          </aside>

        </div>

      </div>

    </article>
  );
}