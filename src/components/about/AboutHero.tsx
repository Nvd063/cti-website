"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { AboutHeroData } from "@/types/about";

interface AboutHeroProps {
  data: AboutHeroData;
}

export default function AboutHero({ data }: AboutHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#0b162c]"
    >
      {/* Desktop background image */}

      <div className="absolute inset-0 hidden md:block">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#0b162c]/95 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/60 via-transparent to-[#071326]/20" />
      </div>

      {/* Decorative background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#203164]/40 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:45px_45px]" />

        <div className="absolute left-[51%] top-[-20%] hidden h-[150%] w-12 rotate-[18deg] bg-[#203164]/40 md:block" />

        <div className="absolute left-[55%] top-[-20%] hidden h-[150%] w-5 rotate-[18deg] bg-red-600/70 shadow-[0_0_40px_rgba(220,38,38,0.35)] md:block" />

        <div className="absolute left-[57%] top-[-20%] hidden h-[150%] w-1 rotate-[18deg] bg-red-400/70 md:block" />
      </div>

      {/* Hero content */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-8 pt-28 sm:px-8 sm:pt-32 md:flex md:min-h-[500px] md:items-center md:pb-24 md:pt-36 lg:px-12 lg:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="max-w-[650px] md:w-[54%]"
        >
          {/* Section label */}

          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[2px] w-9 bg-red-500 sm:w-12" />

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-500 sm:text-xs">
              {data.eyebrow}
            </span>
          </div>

          {/* Main heading */}

          <h1
            id="about-heading"
            className="text-[clamp(28px,8.2vw,44px)] font-extrabold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px] xl:text-[72px]"
          >
            {data.title}

            <span className="mt-1 block">
              {data.highlightedTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-red-500">
                {data.highlightedTitle.split(" ").slice(-1)[0]}
              </span>
            </span>
          </h1>

          {/* Description - desktop and tablet only */}

          <p className="mt-5 hidden max-w-[490px] text-sm leading-relaxed text-slate-300 sm:text-base md:block lg:text-[17px]">
            {data.description}
          </p>

          {/* Desktop and tablet actions */}

          <div className="mt-8 hidden flex-wrap items-center gap-6 md:flex">
            <Link
              href={data.primaryButton.href}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/30 bg-gradient-to-b from-red-500 to-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_25px_rgba(220,38,38,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)]"
            >
              {data.primaryButton.label}

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href={data.secondaryButton.href}
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/5 transition-colors group-hover:border-red-500 group-hover:bg-red-600">
                <ArrowDown size={16} />
              </span>

              {data.secondaryButton.label}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile buttons and hero image */}

      <div className="relative mx-4 mb-12 sm:mx-8 md:hidden">
        {/* Mobile action buttons */}

        <div className="mb-5 grid grid-cols-2 gap-3">
          <Link
            href={data.primaryButton.href}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-3 text-center text-xs font-semibold text-white transition-colors hover:bg-red-700"
          >
            {data.primaryButton.label}

            <ArrowUpRight size={16} className="shrink-0" />
          </Link>

          <Link
            href={data.secondaryButton.href}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/40 px-3 py-3 text-center text-xs font-semibold text-white transition-colors hover:border-white"
          >
            <ArrowDown size={16} className="shrink-0" />

            {data.secondaryButton.label}
          </Link>
        </div>

        {/* Mobile hero image */}

        <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-white/15">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/30 to-transparent" />

          <div className="absolute bottom-0 left-0 h-[3px] w-24 bg-red-600" />
        </div>
      </div>
    </section>
  );
}
