"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Service } from "@/types/service";

interface ServiceOverviewProps {
  service: Service;
}

export default function ServiceOverview({
  service,
}: ServiceOverviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="service-overview"
      initial={
        reduceMotion ? false : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
      }}
      className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8"
    >

      <div className="mb-4 flex items-center gap-3">

        <span className="h-[3px] w-8 bg-red-600" />

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
          Service Overview
        </span>

      </div>

      <h2 className="max-w-3xl text-[25px] font-bold leading-tight tracking-tight text-[#08152d] sm:text-[32px] lg:text-[36px]">

        {service.overviewTitle || service.title}

      </h2>

      <div className="mt-5 h-[2px] w-12 bg-red-600" />

      <p className="mt-5 whitespace-pre-line text-sm leading-[1.9] text-slate-600 sm:text-[15px]">

        {service.overview || service.description}

      </p>

    </motion.section>
  );
}