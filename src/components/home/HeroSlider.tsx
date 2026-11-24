"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";
const slides = [
  {
    image: "/images/hero/1.png",
    title: "Professional Security Solutions",
    alt: "CTI professional security and surveillance solutions",
  },
  {
    image: "/images/hero/2.png",
    title: "Integrated Facility Security",
    alt: "Integrated facility security and access control systems",
  },
  {
    image: "/images/hero/3.png",
    title: "Fire & Safety Solutions",
    alt: "CTI fire protection and safety equipment",
  },
  {
    image: "/images/hero/4.png",
    title: "Intelligent Management Systems",
    alt: "Hotel, guest room and nurse call management systems",
  },
];
const SLIDE_DURATION = 6000;
const TICK_INTERVAL = 50;
export default function HeroSlider() {
  const [slider, setSlider] = useState({
    active: 0,
    progress: 0,
  });
  const [isPaused, setIsPaused] = useState(false);
  const { active, progress } = slider;
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const changeSlide = (index: number) => {
    setSlider({
      active:
        ((index % slides.length) + slides.length) %
        slides.length,
      progress: 0,
    });
  };
  const nextSlide = () => {
    setSlider((previous) => ({
      active: (previous.active + 1) % slides.length,
      progress: 0,
    }));
  };
  const prevSlide = () => {
    setSlider((previous) => ({
      active:
        (previous.active - 1 + slides.length) %
        slides.length,
      progress: 0,
    }));
  };
  /* Respect Reduced Motion Preferences */
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (media.matches) {
      setIsPaused(true);
    }
  }, []);
  /* Automatic Slideshow */
  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      if (document.hidden) return;
      setSlider((previous) => {
        const nextProgress =
          previous.progress +
          (TICK_INTERVAL / SLIDE_DURATION) * 100;
        if (nextProgress >= 100) {
          return {
            active:
              (previous.active + 1) % slides.length,
            progress: 0,
          };
        }
        return {
          ...previous,
          progress: nextProgress,
        };
      });
    }, TICK_INTERVAL);
    return () => window.clearInterval(interval);
  }, [isPaused, active]);
  return (
    <section
      aria-label="CTI featured solutions"
      aria-roledescription="carousel"
      className="
        relative flex w-full flex-col
        overflow-hidden bg-white
        lg:h-[100svh]
      "
    >
      {/* Cinematic Image Area */}
      <div
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const touch = event.changedTouches[0];
          const dx = touch.clientX - start.x;
          const dy = touch.clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx < 0) nextSlide();
            else prevSlide();
          }
        }}
        className="
          relative w-full overflow-hidden touch-pan-y
          bg-[#0b1730]
          pt-[88px] sm:pt-[100px]
          aspect-auto
          lg:pt-0
          lg:aspect-auto
          lg:min-h-0 lg:flex-1
        "
      >
        <div className="relative aspect-[32/15] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={active !== index}
            className={`
              absolute inset-0
              transition-opacity duration-700 ease-in-out
              motion-reduce:transition-none
              ${
                active === index
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }
            `}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              sizes="100vw"
              className="
                object-contain object-center
                lg:object-cover
              "
            />
          </div>
        ))}
        </div>
        {/* Minimal Navbar Contrast Layer */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 top-0
            z-20 h-24 lg:h-32
            bg-gradient-to-b
            from-[#07152d]/20 to-transparent
          "
        />
        {/* Floating Slide Indicators */}
        <div
          className="
            absolute bottom-2 left-1/2 z-30
            flex -translate-x-1/2 items-center gap-2
            rounded-full border border-white/20
            bg-[#0b1730]/45 px-3 py-1.5 lg:px-4 lg:py-3
            shadow-lg backdrop-blur-xl
            lg:bottom-6
          "
          aria-label="Choose a slide"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={
                active === index ? "true" : undefined
              }
              className="
                flex h-5 min-w-4 items-center
                justify-center rounded-full
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-white
              "
            >
              <span
                className={`
                  block h-1.5 rounded-full
                  transition-all duration-500
                  ${
                    active === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/45"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>
      {/* Cinematic Navigation Strip */}
      <div
        className="
          relative z-30 shrink-0
          border-b border-[#e5e9f0]
          bg-white
        "
      >
        <div
          className="
            mx-auto grid max-w-[1800px]
            grid-cols-2 items-center
            gap-x-4 gap-y-3
            px-4 py-3
            sm:px-8 sm:py-4
            lg:grid-cols-[1fr_1.5fr_1fr]
            lg:px-12 lg:py-4
          "
        >
          {/* Slide Counter and Progress */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span
              className="
                text-sm font-bold tabular-nums
                text-[#202f60]
              "
            >
              {String(active + 1).padStart(2, "0")}
            </span>
            <div
              aria-hidden="true"
              className="
                relative h-[3px] w-full max-w-[170px]
                overflow-hidden rounded-full
                bg-[#e2e7ef]
              "
            >
              <div
                className="
                  absolute inset-y-0 left-0
                  rounded-full bg-[#ed0026]
                "
                style={{
                  width: `${progress}%`,
                  transition:
                    progress === 0
                      ? "none"
                      : "width 50ms linear",
                }}
              />
            </div>
            <span
              className="
                text-sm font-medium tabular-nums
                text-slate-400
              "
            >
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
          {/* Current Slide Title */}
          <div
            aria-live={isPaused ? "polite" : "off"}
            className="
              order-last col-span-2
              border-t border-slate-100
              pt-3 text-center
              lg:order-none lg:col-span-1
              lg:border-0 lg:pt-0
            "
          >
            <p
              className="
                mb-1 text-[10px] font-semibold
                uppercase tracking-[0.24em]
                text-[#ed0026]
              "
            >
              CTI Solutions
            </p>
            <h2
              className="
                text-sm font-bold text-[#202f60]
                sm:text-base lg:text-lg
              "
            >
              {slides[active].title}
            </h2>
          </div>
          {/* Slider Controls */}
          <div
            className="
              flex items-center justify-end
              gap-1.5 sm:gap-3
            "
          >
            {/* Pause / Play */}
            <button
              type="button"
              onClick={() =>
                setIsPaused((previous) => !previous)
              }
              aria-label={
                isPaused
                  ? "Play slideshow"
                  : "Pause slideshow"
              }
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full text-slate-500
                transition-colors duration-300
                hover:bg-slate-100
                hover:text-[#202f60]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-[#202f60]
                sm:h-11 sm:w-11
              "
            >
              {isPaused ? (
                <Play size={17} />
              ) : (
                <Pause size={17} />
              )}
            </button>
            {/* Previous Slide */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full border border-[#dce3ed]
                bg-white text-[#202f60]
                transition-all duration-300
                hover:border-[#202f60]
                hover:bg-[#202f60] hover:text-white
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#202f60]
                sm:h-12 sm:w-12
              "
            >
              <ArrowLeft size={20} />
            </button>
            {/* Next Slide */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full bg-[#202f60] text-white
                transition-all duration-300
                hover:bg-[#ed0026]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#202f60]
                sm:h-12 sm:w-12
              "
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
