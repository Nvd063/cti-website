"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 25 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full min-w-0"
    >
      <Link
        href={`/services/${service.slug}`}
        aria-label={`Explore ${service.title}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-xl motion-reduce:transform-none"
      >

        {/* IMAGE */}

        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">

          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 767px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transform-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#08152d]/40 to-transparent" />

          <span className="absolute left-3 top-3 rounded-md border border-white/20 bg-[#08152d]/75 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>

        {/* CONTENT */}

        <div className="flex flex-1 flex-col p-3 sm:p-5">

          <div className="mb-2 text-[9px] font-bold uppercase tracking-widest text-red-600 sm:text-[10px]">
            Integrated Solutions
          </div>

          <h2 className="text-[13px] font-bold leading-snug text-[#08152d] sm:text-lg">
            {service.name}
          </h2>

          <p className="mt-2 hidden text-sm leading-relaxed text-slate-500 sm:block">
            {service.description}
          </p>

          <div className="mt-auto pt-4">

            <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">

              <span className="text-[10px] font-semibold text-[#203164] sm:text-xs">
                Explore Service
              </span>

              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white sm:h-9 sm:w-9">

                <ArrowUpRight size={16} />

              </span>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-red-600 transition-transform duration-500 group-hover:scale-x-100" />

      </Link>
    </motion.article>
  );
}