"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowDown, ChevronRight} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

export default function BlogHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#0b162c]">
      {/* Hero Background Image */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/blog/blog-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 sm:opacity-40"
        />

        {/* Navy Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b162c] via-[#0b162c]/75 to-[#0b162c]/15" />

        {/* Bottom Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/80 via-transparent to-[#0b162c]/20" />

        {/* Subtle Grid Pattern */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:45px_45px]" />

        {/* Ambient Red Glow */}

        <div className="absolute -right-24 top-0 h-full w-40 rotate-[25deg] bg-red-600/10 blur-2xl" />
      </div>

      {/* Hero Content */}

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-12 lg:pb-14 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
        >
          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-[11px] text-slate-400 sm:text-xs"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight size={12} />

            <span className="text-white">Blog</span>
          </nav>

          <div className="flex items-center justify-between gap-8">
            <div>
              {/* Section Label */}

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-red-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 sm:text-xs">
                  CTI Insights
                </span>
              </div>

              {/* Main Heading */}

              <h1 className="text-[clamp(28px,7vw,42px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[60px]">
                Engineering Knowledge.
                <span className="mt-1 block">
                  Building <span className="text-red-500">Awareness.</span>
                </span>
              </h1>

              {/* Desktop Description */}

              <p className="mt-4 hidden max-w-xl text-sm leading-relaxed text-slate-300 sm:block lg:text-base">
                Expert perspectives on safety, security, intelligent buildings
                and modern infrastructure.
              </p>

              {/* CTA Button */}

              <a
                href="#latest-articles"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-red-500 to-red-700 px-4 py-3 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(220,38,38,0.25)] transition-all hover:brightness-110 sm:mt-6 sm:px-5 sm:py-3.5"
              >
                Explore Articles
                <ArrowDown size={15} />
              </a>
            </div>

            {/* Desktop Glass Icon */}

            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
