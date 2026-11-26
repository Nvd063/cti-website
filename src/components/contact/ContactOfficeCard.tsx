"use client";

import {
  MapPin,
  ArrowUpRight,
  Building2,
  Phone,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { ContactOffice } from "@/types/contact";

interface ContactOfficeCardProps {
  office: ContactOffice;
  index: number;
}

export default function ContactOfficeCard({
  office,
  index,
}: ContactOfficeCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#203164]/25 hover:shadow-xl sm:p-6"
    >

      <div className="flex items-center justify-between gap-2">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b162c] text-white sm:h-12 sm:w-12">
          <Building2
            size={22}
            strokeWidth={1.7}
          />
        </div>

        {office.isHeadOffice && (
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-semibold text-red-600">
            Head Office
          </span>
        )}

      </div>

      <h3 className="mt-4 text-lg font-extrabold tracking-tight text-[#0b162c] sm:text-xl">
        {office.city}
      </h3>

      <div className="mt-3 flex items-start gap-2">

        <MapPin
          size={16}
          className="mt-0.5 shrink-0 text-red-600"
        />

        <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
          {office.address}
        </p>

      </div>

      {office.phone && (
        <a
          href={`tel:${office.phone.replace(/\s/g, "")}`}
          className="mt-3 flex items-center gap-2 text-xs text-[#203164] sm:text-sm"
        >
          <Phone size={15} />
          {office.phone}
        </a>
      )}

      <div className="mt-auto pt-5">

        <div className="border-t border-slate-100 pt-4">

          {office.mapUrl ? (
            <a
              href={office.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#203164] transition-colors hover:text-red-600 sm:text-sm"
            >
              Get Directions
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#203164] transition-colors hover:text-red-600 sm:text-sm"
            >
              Contact Office
              <ArrowUpRight size={15} />
            </a>
          )}

        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#203164] to-red-600" />

    </motion.article>
  );
}