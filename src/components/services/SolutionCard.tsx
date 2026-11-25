"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Layers3,
  MessageCircle,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Service, Solution } from "@/types/service";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface SolutionCardProps {
  service: Service;
  solution: Solution;
  index: number;
}

export default function SolutionCard({
  service,
  solution,
  index,
}: SolutionCardProps) {
  const reduceMotion = useReducedMotion();

  const whatsappLink = generateWhatsAppLink({
    service: service.title,
    solution: solution.title,
    customMessage: solution.whatsappMessage,
  });

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : (index % 3) * 0.08,
      }}
      className="h-full min-w-0"
    >

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Inquire about ${solution.title} on WhatsApp`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-lg motion-reduce:transform-none"
      >

        {/* SOLUTION IMAGE */}

        <div className="relative aspect-[16/10] overflow-hidden bg-[#e9edf3]">

          {solution.image ? (
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transform-none"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#edf1f7] to-[#dce4ef]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white/60 shadow-sm sm:h-20 sm:w-20">

                <Layers3
                  size={32}
                  strokeWidth={1.3}
                  className="text-[#203164]"
                />

              </div>

            </div>
          )}

          {/* NUMBER */}

          <span className="absolute left-2 top-2 rounded-md bg-[#08152d]/85 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md sm:left-3 sm:top-3">

            {String(index + 1).padStart(2, "0")}

          </span>

          {/* HOVER OVERLAY */}

          <div className="absolute inset-0 flex items-center justify-center bg-[#08152d]/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">

            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl">

              <MessageCircle size={24} />

            </span>

          </div>

        </div>

        {/* SOLUTION CONTENT */}

        <div className="flex flex-1 flex-col bg-[#0b162c] p-3 text-white transition-colors duration-300 group-hover:bg-[#203164] sm:p-4">

          <h3 className="text-[11px] font-semibold leading-snug sm:text-sm">

            {solution.title}

          </h3>

          {solution.description && (
            <p className="mt-2 hidden text-xs leading-relaxed text-slate-300 sm:block">

              {solution.description}

            </p>
          )}

          <div className="mt-auto pt-4">

            <div className="flex items-center justify-between gap-1 border-t border-white/10 pt-3">

              <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#4ade80] sm:text-[11px]">

                <MessageCircle
                  size={14}
                  className="shrink-0"
                />

                <span>Inquire Now</span>

              </div>

              <ArrowUpRight
                size={15}
                className="shrink-0 text-red-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-red-600 transition-transform duration-500 group-hover:scale-x-100" />

      </a>

    </motion.article>
  );
}