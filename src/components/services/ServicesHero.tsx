"use client";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#08152d] text-white">

      {/* BACKGROUND DESIGN */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >

        {/* Base Navy Background */}

        <div className="absolute inset-0 bg-[linear-gradient(115deg,#08152d_10%,#14274b_65%,#203164_100%)]" />

        {/* Hero Background Image */}

        <Image
          src="/images/services/services-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 sm:opacity-50"
        />

        {/* Navy Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#08152d] via-[#08152d]/65 to-[#08152d]/10" />

        {/* Bottom Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#08152d]/70 via-transparent to-[#08152d]/10" />

        {/* Subtle Grid Pattern */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Ambient Glow */}

        <div className="absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[100px]" />

      </div>

      {/* HERO CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-12 pt-[110px] sm:px-8 sm:pb-16 sm:pt-[120px] lg:px-12 lg:pb-20 lg:pt-[140px]">

        {/* BREADCRUMB */}

        <motion.nav
          aria-label="Breadcrumb"
          initial={
            reduceMotion ? false : { opacity: 0 }
          }
          animate={{ opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
          }}
          className="mb-5 flex items-center gap-2 text-xs text-slate-400 sm:mb-6 sm:text-sm"
        >

          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <span
            aria-current="page"
            className="text-white"
          >
            Services
          </span>

        </motion.nav>

        {/* MAIN CONTENT */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[850px]"
        >

          {/* SECTION LABEL */}

          <div className="mb-5 flex items-center gap-3">

            <span className="h-[3px] w-9 bg-red-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-500 sm:text-xs">
              Our Expertise
            </span>

          </div>

          {/* MAIN HEADING */}

          <h1 className="text-[clamp(28px,8vw,36px)] font-bold leading-[1.08] tracking-tight sm:text-[48px] lg:text-[64px]">

            Integrated Solutions.

            <span className="mt-1 block text-slate-400">
              Engineered for
            </span>

            <span className="block text-white">
              a Safer Future
              <span className="text-red-600">.</span>
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="mt-5 max-w-[600px] text-sm leading-relaxed text-slate-300 sm:text-base">

            Discover intelligent safety, security, automation and
            infrastructure solutions designed for modern commercial,
            residential and industrial environments.

          </p>

          {/* CTA BUTTON */}

          <a
            href="#all-services"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-red-700 sm:px-6 sm:py-3.5 sm:text-sm"
          >

            Explore Our Services

            <ArrowUpRight size={18} />

          </a>

        </motion.div>

      </div>

      {/* BOTTOM ACCENT LINE */}

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-red-600 via-red-600/30 to-transparent" />

    </section>
  );
}