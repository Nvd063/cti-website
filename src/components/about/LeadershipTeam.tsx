"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { TeamMember } from "@/types/about";

import TeamMemberCard from "./TeamMemberCard";

interface LeadershipTeamProps {
  team: TeamMember[];
}

export default function LeadershipTeam({
  team,
}: LeadershipTeamProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(false);

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 5);

    setCanScrollRight(
      slider.scrollLeft + slider.clientWidth <
        slider.scrollWidth - 5
    );
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    updateScrollState();

    slider.addEventListener(
      "scroll",
      updateScrollState,
      { passive: true }
    );

    const observer = new ResizeObserver(
      updateScrollState
    );

    observer.observe(slider);

    return () => {
      slider.removeEventListener(
        "scroll",
        updateScrollState
      );

      observer.disconnect();
    };
  }, [updateScrollState, team.length]);

  function scrollTeam(
    direction: "left" | "right"
  ) {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left:
        direction === "left"
          ? -slider.clientWidth
          : slider.clientWidth,

      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  if (!team.length) return null;

  return (
    <section
      aria-labelledby="leadership-heading"
      className="bg-white py-7 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">

        {/* Section heading */}

        <div className="mb-5 flex items-end justify-between gap-3 sm:mb-7">

          <div className="min-w-0">

            <div className="mb-3 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-red-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-600 sm:text-xs">
                Our Leadership
              </span>

            </div>

            <h2
              id="leadership-heading"
              className="text-[26px] font-extrabold leading-tight tracking-[-0.035em] text-[#0b162c] sm:text-4xl lg:text-[42px]"
            >
              Meet The Team Behind{" "}

              <span className="text-red-600">
                CTI.
              </span>

            </h2>

          </div>

          {/* Navigation arrows - hidden on mobile */}

          <div className="hidden shrink-0 items-center gap-2 md:flex">

            <button
              type="button"
              onClick={() => scrollTeam("left")}
              disabled={!canScrollLeft}
              aria-label="Previous team members"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#203164] transition-colors hover:border-[#203164] hover:bg-slate-50 disabled:cursor-default disabled:opacity-40"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollTeam("right")}
              disabled={!canScrollRight}
              aria-label="Next team members"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600 text-white shadow-sm transition-colors hover:bg-red-700 disabled:cursor-default disabled:opacity-40"
            >
              <ArrowRight size={18} />
            </button>

          </div>
        </div>

        {/* 
          Mobile: Static 2-column grid
          Tablet: 3-member slider
          Desktop: 6-member slider
        */}

        <div
          ref={sliderRef}
          className="
            grid
            grid-cols-2
            gap-x-3
            gap-y-5
            overflow-visible
            pb-2

            md:grid-cols-none
            md:grid-flow-col
            md:auto-cols-[calc((100%-32px)/3)]
            md:snap-x
            md:snap-mandatory
            md:gap-4
            md:overflow-x-auto
            md:overscroll-x-contain
            md:[scrollbar-width:none]
            md:[&::-webkit-scrollbar]:hidden

            lg:auto-cols-[calc((100%-60px)/6)]
            lg:gap-3

            xl:auto-cols-[calc((100%-80px)/6)]
            xl:gap-4
          "
        >

          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion
                  ? 0
                  : Math.min(index, 5) * 0.06,
              }}
              className="min-w-0 md:snap-start"
            >

              <TeamMemberCard member={member} />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}