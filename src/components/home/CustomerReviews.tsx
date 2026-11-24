
"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CustomerReviews() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container) return;

    const script = document.createElement("script");

    script.src =
      "https://cdn.trustindex.io/loader.js?da75bd7860885007669618331f3";

    script.async = true;
    script.defer = true;

    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <section
      id="customer-reviews"
      aria-labelledby="reviews-heading"
      className="relative w-full overflow-hidden bg-white py-8 md:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-5 text-center md:mb-7">

          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 bg-red-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 md:text-xs">
              Customer Satisfaction
            </span>

            <span className="h-[2px] w-6 bg-red-600" />
          </div>

          <h2
            id="reviews-heading"
            className="text-2xl font-bold tracking-tight text-[#203164] sm:text-3xl lg:text-4xl"
          >
            Trusted by Our{" "}
            <span className="text-red-600">
              Customers.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-500 sm:text-sm md:text-base">
            Discover what our customers say about our
            security, safety and integrated technology solutions.
          </p>

        </div>

        {/* Trustindex Reviews */}
        <div
          ref={widgetRef}
          className="relative w-full min-w-0"
        />

        {/* Google Reviews Button */}
        <div className="mt-4 flex justify-center md:mt-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=CTI+System+and+Solutions+Fire+Safety+Company+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#203164] px-5 py-2.5 text-xs font-semibold text-[#203164] transition-colors hover:bg-[#203164] hover:text-white md:text-sm"
          >
            Find Us on Google

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
