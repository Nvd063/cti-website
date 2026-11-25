"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { Service } from "@/types/service";

/* =========================================
   COMPONENT PROPS
========================================= */

interface CoreServicesProps {
  services: Service[];
}

/* =========================================
   CORE SERVICES COMPONENT
========================================= */

export default function CoreServices({
  services,
}: CoreServicesProps) {
  const reduceMotion = useReducedMotion();

  if (!services.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="rounded-[24px] bg-[#f1f3f6] p-4 sm:p-6 lg:p-8">

          {/* =========================================
              SECTION HEADER
          ========================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
            }}
            className="mb-6 grid items-center gap-4 lg:grid-cols-[1.5fr_1fr]"
          >
            <div>

              {/* EYEBROW */}

              <div className="mb-3 flex items-center gap-3">

                <span className="h-[3px] w-8 bg-red-600" />

                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-600">
                  Our Expertise
                </span>

              </div>

              {/* MAIN HEADING */}

              <h2
                id="services-heading"
                className="text-[27px] font-bold leading-[1.12] tracking-tight text-[#08152d] sm:text-[34px] lg:text-[40px]"
              >
                Intelligent Solutions.
                <br />
                Safer Environments.
              </h2>

            </div>

            {/* HEADER DESCRIPTION */}

            <div className="lg:justify-self-end">

              <p className="max-w-[340px] text-sm leading-relaxed text-slate-500 lg:text-[15px]">
                Integrated technology solutions for modern
                infrastructure.
              </p>

            </div>

          </motion.div>

          {/* =========================================
              DYNAMIC SERVICES GRID
          ========================================= */}

          <div className="grid auto-rows-fr grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">

            {services.map((service, index) => (

              <motion.div
                key={service.id}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion
                    ? 0
                    : (index % 4) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full min-w-0"
              >

                {/* =================================
                    DYNAMIC SERVICE LINK
                ================================= */}

                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Explore ${service.title}`}
                  className="
                    group relative flex h-full min-w-0
                    flex-col overflow-hidden
                    rounded-xl bg-[#0b162c]
                    ring-1 ring-black/5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(8,21,45,0.15)]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-red-600
                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >

                  {/* =================================
                      SERVICE IMAGE
                  ================================= */}

                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-200">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1023px) 45vw, 25vw"
                      className="
                        object-cover object-center
                        transition-transform duration-700
                        ease-out
                        group-hover:scale-110
                        motion-reduce:transform-none
                        motion-reduce:transition-none
                      "
                    />

                    {/* IMAGE GRADIENT */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-t
                        from-[#08152d]/20
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* SERVICE NUMBER */}

                    <span
                      aria-hidden="true"
                      className="
                        absolute left-3 top-3 z-20
                        rounded-md
                        border border-white/15
                        bg-[#08152d]/70
                        px-2.5 py-1.5
                        text-[11px] font-bold
                        tracking-wide text-white
                        backdrop-blur-md
                        transition-colors duration-300
                        group-hover:bg-red-600
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* HOVER DESCRIPTION OVERLAY */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-0
                        flex items-end
                        bg-gradient-to-t
                        from-[#08152d]/95
                        via-[#08152d]/40
                        to-transparent
                        p-4 opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                        group-focus-visible:opacity-100
                      "
                    >

                      <p
                        className="
                          translate-y-3
                          text-xs leading-relaxed
                          text-white
                          transition-transform duration-300
                          group-hover:translate-y-0
                          group-focus-visible:translate-y-0
                          motion-reduce:transform-none
                        "
                      >
                        {service.description}
                      </p>

                    </div>

                  </div>

                  {/* =================================
                      SERVICE TITLE PANEL
                  ================================= */}

                  <div
                    className="
                      relative z-10
                      flex min-h-[64px] flex-1
                      items-center justify-between
                      gap-2 bg-[#0b162c]
                      px-2 py-2 sm:px-4 sm:py-3
                      transition-colors duration-300
                      group-hover:bg-[#203164]
                    "
                  >

                    {/* SERVICE NAME */}

                    <h3 className="text-[11px] font-bold leading-snug text-white sm:text-[14px] lg:text-[15px]">
                      {service.name}
                    </h3>

                    {/* ARROW ICON */}

                    <span
                      className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-full text-red-500
                        transition-all duration-300
                        group-hover:bg-red-600
                        group-hover:text-white
                      "
                    >

                      <ArrowUpRight
                        size={19}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="
                          transition-transform duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          motion-reduce:transform-none
                        "
                      />

                    </span>

                    {/* ANIMATED BOTTOM BORDER */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute bottom-0 left-0
                        h-[3px] w-full
                        origin-left scale-x-0
                        bg-red-600
                        transition-transform duration-500
                        group-hover:scale-x-100
                        group-focus-visible:scale-x-100
                        motion-reduce:transition-none
                      "
                    />

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}