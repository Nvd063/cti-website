import {
  ArrowUpRight,
  Headset,
} from "lucide-react";

import { generateWhatsAppLink } from "@/lib/whatsapp";

import type { AboutCTAData } from "@/types/about";

interface AboutCTAProps {
  data: AboutCTAData;
}

export default function AboutCTA({
  data,
}: AboutCTAProps) {
  const whatsappLink = generateWhatsAppLink({
    customMessage: data.whatsappMessage,
  });

  return (
    <section className="bg-white pb-10 pt-3 sm:pb-14 sm:pt-5">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        <div className="relative isolate overflow-hidden rounded-[20px] border border-white/15 bg-gradient-to-r from-[#0b162c] via-[#172442] to-[#203164] px-5 py-6 shadow-[0_8px_30px_rgba(11,22,44,0.15)] sm:px-8 lg:px-10">

          {/* Decorative red glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -top-20 h-40 w-40 rounded-full bg-red-600/35 blur-[55px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-red-600/40 blur-[55px]"
          />

          {/* Glass reflection */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-400/70 via-white/30 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:35px_35px]"
          />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* CTA content */}

            <div className="flex items-center gap-4 sm:gap-6">

              {/* Liquid glass icon */}

              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/10 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_5px_15px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:h-16 sm:w-16">

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent"
                />

                <Headset
                  size={30}
                  strokeWidth={1.8}
                  className="relative"
                  aria-hidden="true"
                />

              </div>

              <div className="min-w-0 sm:border-l sm:border-white/20 sm:pl-6">

                <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl xl:text-3xl">
                  {data.title}
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {data.description}
                </p>

              </div>
            </div>

            {/* WhatsApp CTA button */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl border border-red-400/30 bg-gradient-to-b from-red-500 to-red-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_5px_25px_rgba(220,38,38,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(220,38,38,0.45)] sm:w-fit"
            >
              {data.buttonLabel}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </a>

          </div>
        </div>
      </div>
    </section>
  );
}