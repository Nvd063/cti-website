"use client";

import { useEffect, useRef, useState } from "react";

import {
  HardHat,
  Layers3,
  UsersRound,
  MapPin,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

import type { CompanyStat } from "@/types/about";

interface CompanyStatsProps {
  stats: CompanyStat[];
  overlapHero?: boolean;
}

const statIcons = {
  projects: HardHat,
  industries: Layers3,
  clients: UsersRound,
  cities: MapPin,
};

interface AnimatedCounterProps {
  value: number;
  suffix: string;
}

function AnimatedCounter({
  value,
  suffix,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const reduceMotion = useReducedMotion();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const duration = 1300;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, reduceMotion]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {reduceMotion ? value : count}
        {suffix}
      </span>

      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}

export default function CompanyStats({
  stats,
  overlapHero = true,
}: CompanyStatsProps) {
  const reduceMotion = useReducedMotion();

  if (!stats.length) return null;

  return (
    <section
      aria-label="Company performance statistics"
      className={`relative z-20 mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 ${
        overlapHero
          ? "-mt-8 md:-mt-12"
          : "pt-6"
      }`}
    >
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 15 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.55,
          ease: "easeOut",
        }}
        className="relative isolate overflow-hidden rounded-[22px] border border-white/40 bg-[#142943]/60 shadow-[0_12px_35px_rgba(11,22,44,0.22),inset_0_1px_2px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(255,255,255,0.15)] backdrop-blur-2xl backdrop-saturate-150 sm:rounded-[26px]"
      >
        {/* Main liquid glass reflection */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-white/15"
        />

        {/* Reflective top edge */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
        />

        {/* Reflective bottom edge */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Soft glass lighting */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-24 h-52 w-52 rounded-full bg-white/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl"
        />

        {/* Glass surface reflection */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"
        />

        {/* Statistics grid */}

        <div className="relative grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = statIcons[stat.icon];

            return (
              <div
                key={stat.id}
                className="group relative flex min-w-0 items-center gap-2.5 px-3 py-4 transition-colors duration-300 hover:bg-white/5 sm:gap-4 sm:px-5 sm:py-5 lg:px-7 lg:py-6"
              >
                {/* Desktop separator */}

                {index % 4 !== 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 left-0 top-5 hidden w-px bg-gradient-to-b from-transparent via-white/40 to-transparent md:block"
                  />
                )}

                {/* Mobile vertical separator */}

                {index % 2 !== 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 left-0 top-3 w-px bg-white/20 md:hidden"
                  />
                )}

                {/* Mobile horizontal separator */}

                {index >= 2 && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 top-0 h-px bg-white/20 md:hidden"
                  />
                )}

                {/* Liquid glass icon container */}

                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.08)] transition-colors duration-300 group-hover:bg-white/20 sm:h-12 sm:w-12 lg:h-14 lg:w-14 lg:rounded-2xl">

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  />

                  <Icon
                    aria-hidden="true"
                    size={25}
                    strokeWidth={1.8}
                    className="relative h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                  />

                </div>

                {/* Animated statistics */}

                <div className="min-w-0">
                  <p className="text-[25px] font-extrabold leading-none tracking-tight text-white drop-shadow-sm sm:text-3xl lg:text-[36px]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  <p className="mt-1.5 text-[10px] font-medium leading-snug text-slate-100 sm:text-xs lg:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}