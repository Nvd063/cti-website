"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  ChevronRight,
  Phone,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { ContactPageData } from "@/types/contact";

interface ContactHeroProps {
  hero: ContactPageData["hero"];
}

export default function ContactHero({
  hero,
}: ContactHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#0b162c] text-white">

      {/* Background Image */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b162c] via-[#0b162c]/75 to-[#0b162c]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b162c]/70 to-transparent" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Hero Content */}

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-[110px] sm:px-8 sm:pb-20 sm:pt-[125px] lg:px-12 lg:pb-24 lg:pt-[145px]">

        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs text-slate-300 sm:text-sm"
        >
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <span aria-current="page" className="text-white">
            Contact Us
          </span>
        </nav>

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[850px]"
        >

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-9 bg-red-600" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-red-500">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="text-[34px] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[64px]">
            {hero.title}

            <span className="mt-1 block text-red-500">
              {hero.highlight}
            </span>
          </h1>

          <p className="mt-5 max-w-[620px] text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-red-500 to-red-700 px-5 py-3.5 text-xs font-semibold text-white shadow-lg shadow-red-600/20 transition hover:brightness-110 sm:px-7 sm:text-sm"
            >
              Send an Inquiry
              <ArrowUpRight size={17} />
            </a>

            <a
              href="tel:+923008443454"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-xs font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 sm:px-7 sm:text-sm"
            >
              <Phone size={16} />
              Call Our Team
            </a>

          </div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-red-600 via-red-600/30 to-transparent" />

    </section>
  );
}