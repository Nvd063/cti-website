
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    image: "/images/hero/slide 1.webp",
    alt: "CTI Fire Safety and Protection Equipment",
  },
  {
    image: "/images/hero/slide 2.webp",
    alt: "CTI Smart Building and Room Automation Solutions",
  },
  {
    image: "/images/hero/slide 3.webp",
    alt: "CTI Integrated Technology Solutions",
  },
  {
    image: "/images/hero/slide 4.webp",
    alt: "CTI Security and Surveillance Solutions",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Automatic slideshow
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  // Next slide
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setActive(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      aria-label="CTI Featured Solutions"
      className="relative w-full overflow-hidden bg-[#08152d]"
    >
      {/* Slider Images */}
      <div className="relative aspect-[8/5] w-full overflow-hidden lg:aspect-auto lg:h-[calc(100dvh-80px)]">

        {slides.map((slide, index) => (
          <div
            key={slide.image}
            aria-hidden={active !== index}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              active === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              preload={index === 0}
              className="object-contain lg:object-fill"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-white hover:text-black md:left-6 md:h-12 md:w-12"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition hover:bg-white hover:text-black md:right-6 md:h-12 md:w-12"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/50 px-3 backdrop-blur-sm md:bottom-5 md:gap-2">

        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index}
            className="flex h-8 min-w-5 cursor-pointer items-center justify-center md:h-10"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 md:h-2 ${
                active === index
                  ? "w-5 bg-white md:w-8"
                  : "w-1.5 bg-white/50 md:w-2"
              }`}
            />
          </button>
        ))}

        {/* Play / Pause */}
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="flex h-8 w-8 cursor-pointer items-center justify-center text-white md:h-10"
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
    </section>
  );
}
