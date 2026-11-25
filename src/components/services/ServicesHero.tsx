"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronRight, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#08152d] text-white">

      {/* BACKGROUND DESIGN */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#08152d_10%,#14274b_65%,#203164_100%)]" />

        <div className="absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="absolute -right-20 top-0 h-full w-[35%] -skew-x-12 border-l border-white/10 bg-white/[0.025]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-[110px] sm:px-8 sm:pb-16 sm:pt-[120px] lg:px-12 lg:pb-20 lg:pt-[140px]">

        {/* BREADCRUMB */}

        <motion.nav
          aria-label="Breadcrumb"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mb-5 flex items-center gap-2 text-xs text-slate-400 sm:mb-6 sm:text-sm"
        >
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <span aria-current="page" className="text-white">
            Services
          </span>
        </motion.nav>

        <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">

          {/* HERO CONTENT */}

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 25 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">

              <span className="h-[3px] w-9 bg-red-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-500 sm:text-xs">
                Our Expertise
              </span>

            </div>

            <h1 className="max-w-[850px] text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[48px] lg:text-[64px]">

              Integrated Solutions.

              <span className="mt-1 block text-slate-400">
                Engineered for
              </span>

              <span className="block text-white">
                a Safer Future<span className="text-red-600">.</span>
              </span>

            </h1>

            <p className="mt-5 max-w-[600px] text-sm leading-relaxed text-slate-300 sm:text-base">

              Discover intelligent safety, security, automation
              and infrastructure solutions designed for modern
              commercial, residential and industrial environments.

            </p>

            <a
              href="#all-services"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-700"
            >
              Explore Our Services
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

          {/* RIGHT SIDE DECORATIVE ELEMENT */}

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.95 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="relative hidden justify-self-end lg:block"
          >
            <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-white/10">

              <div className="absolute inset-5 rounded-full border border-dashed border-white/15" />

              <div className="absolute inset-12 rounded-full border border-white/10 bg-white/[0.03]" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">

                <Layers3
                  size={52}
                  strokeWidth={1.3}
                  className="text-white"
                />

              </div>

              <span className="absolute right-5 top-12 h-3 w-3 rounded-full bg-red-600 shadow-[0_0_20px_#dc2626]" />

              <span className="absolute bottom-10 left-8 h-2 w-2 rounded-full bg-white/60" />

            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-red-600 via-red-600/30 to-transparent" />

    </section>
  );
}