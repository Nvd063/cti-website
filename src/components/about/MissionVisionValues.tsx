"use client";

import {
  Target,
  Lightbulb,
  Gem,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { CompanyPrinciple } from "@/types/about";

interface MissionVisionValuesProps {
  principles: CompanyPrinciple[];
}

const principleIcons = {
  target: Target,
  lightbulb: Lightbulb,
  gem: Gem,
};

export default function MissionVisionValues({
  principles,
}: MissionVisionValuesProps) {
  const reduceMotion = useReducedMotion();

  if (!principles.length) return null;

  return (
    <section
      aria-label="Our mission, vision and values"
      className="bg-white py-5 sm:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">

          {principles.map((principle, index) => {
            const Icon = principleIcons[principle.icon];

            return (
              <motion.article
                key={principle.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion
                    ? 0
                    : Math.min(index, 4) * 0.1,
                }}
                className={`group relative isolate overflow-hidden rounded-[18px] border border-slate-200 border-b-[3px] bg-gradient-to-br from-white to-slate-50/80 p-5 shadow-[0_5px_20px_rgba(11,22,44,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(11,22,44,0.10)] sm:p-6 ${
                  index % 2 === 0
                    ? "border-b-red-600"
                    : "border-b-[#203164]"
                }`}
              >

                {/* Background decoration */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#203164]/[0.025]"
                />

                {/* Heading and icon */}

                <div className="relative mb-3 flex items-center gap-3 sm:mb-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white sm:h-12 sm:w-12">

                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                  </div>

                  <h2 className="text-xl font-extrabold tracking-tight text-[#0b162c] lg:text-2xl">
                    {principle.title}
                  </h2>

                </div>

                {/* Description */}

                <p className="relative text-[13px] leading-relaxed text-slate-600 sm:text-sm lg:leading-[1.8]">
                  {principle.description}
                </p>

              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}