"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Service } from "@/types/service";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({
  service,
}: ServiceDetailHeroProps) {
  const reduceMotion = useReducedMotion();

  const whatsappLink = generateWhatsAppLink({
    service: service.title,
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#08152d] text-white">

      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#08152d] via-[#112342] to-[#203164]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:50px_50px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-[110px] sm:px-8 sm:pb-14 sm:pt-[120px] lg:px-12 lg:pb-16 lg:pt-[140px]">

        {/* BREADCRUMB */}

        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:mb-6 sm:text-xs"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <ChevronRight size={13} />

          <Link
            href="/services"
            className="hover:text-white"
          >
            Services
          </Link>

          <ChevronRight size={13} />

          <span aria-current="page" className="text-white">
            {service.name}
          </span>
        </nav>

        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">

          {/* TEXT CONTENT */}

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 25 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="mb-4 flex items-center gap-3">

              <span className="h-[3px] w-8 bg-red-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 sm:text-xs">
                {service.category || "Integrated Technology Solutions"}
              </span>

            </div>

            <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[44px] lg:text-[54px]">

              {service.heroTitle || service.title}

              <span className="text-red-600">.</span>

            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {service.heroDescription || service.description}
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm"
              >
                <MessageCircle size={17} />
                Request a Quote
                <ArrowUpRight size={15} />
              </a>

              <a
                href="#service-overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15 sm:text-sm"
              >
                Explore Solution
              </a>

            </div>

          </motion.div>

          {/* SERVICE IMAGE */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.96 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="relative"
          >

            <div className="absolute -inset-3 rounded-[30px] border border-white/10" />

            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/15 bg-[#14274b] shadow-2xl">

              <Image
                src={service.heroImage || service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08152d]/35 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-[#08152d]/70 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                CTI System & Solutions
              </div>

            </div>

            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-[25px] border-b-[3px] border-r-[3px] border-red-600" />

          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-red-600 to-transparent" />

    </section>
  );
}