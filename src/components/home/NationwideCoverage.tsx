
import Image from "next/image";
import { MapPin, Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cities = [
  "Rawalpindi",
  "Islamabad",
  "Lahore",
  "Karachi",
  "Peshawar",
  "Multan",
  "Faisalabad",
];

export default function NationwideCoverage() {
  return (
    <section
      aria-labelledby="coverage-heading"
      className="relative w-full overflow-hidden border-y border-slate-100 bg-[#f8fafc] py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* Heading and Description */}
          <div className="order-1 text-center lg:col-start-1 lg:row-start-1 lg:text-left">

            <div className="mb-5 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-red-600" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-600 md:text-xs">
                Our National Presence
              </span>
            </div>

            <h2
              id="coverage-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-[#203164] sm:text-4xl lg:text-5xl"
            >
              Connecting Pakistan.
              <span className="mt-1 block text-red-600">
                Delivering Solutions.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-600 md:text-base lg:mx-0">
              Delivering integrated safety, security and automation
              solutions across Pakistan, serving businesses,
              institutions and residential developments.
            </p>

          </div>

          {/* Pakistan Map */}
          <div className="relative order-2 flex items-center justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1">

            <div className="absolute inset-8 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[540px]">

              <Image
                src="/images/coverage/pakistan-map.webp"
                alt="CTI System and Solutions nationwide service coverage across Pakistan"
                fill
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 540px"
                className="object-contain"
              />

            </div>

            {/* Coverage Label */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm md:bottom-5">

              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs font-semibold text-[#203164] md:text-sm">
                Serving 7 Major Cities
              </span>

            </div>

          </div>

          {/* Cities and Actions */}
          <div className="order-3 lg:col-start-1 lg:row-start-2">

            {/* Cities Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">

              {cities.map((city, index) => (
                <div
                  key={city}
                  className={`group flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 transition-colors duration-300 hover:border-red-200 hover:bg-red-50/40 md:gap-3 md:px-4 md:py-4 ${
                    index === cities.length - 1
                      ? "col-span-2 sm:col-span-1"
                      : ""
                  }`}
                >

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-red-100 md:h-9 md:w-9">

                    <MapPin
                      aria-hidden="true"
                      className="h-4 w-4 text-[#203164] transition-colors group-hover:text-red-600 md:h-5 md:w-5"
                    />

                  </div>

                  <span className="text-xs font-semibold text-[#203164] sm:text-sm">
                    {city}
                  </span>

                </div>
              ))}

            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href="/documents/company-profile.pdf"
                download
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#203164] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                <Download size={18} />
                Company Profile
              </a>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#203164]/20 bg-white px-5 py-3 text-sm font-semibold text-[#203164] transition-colors hover:border-[#203164] hover:bg-slate-100"
              >
                Contact Our Team
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
