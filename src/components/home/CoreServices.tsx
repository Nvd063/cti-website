"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowUpRight,
  ArrowRight,
  Flame,
  BatteryCharging,
  Building2,
  AudioLines,
  ShieldCheck,
  Cctv,
  BedDouble,
  HeartPulse,
  Zap,
} from "lucide-react";

const services = [
  {
    name: "Fire & Safety",
    title: "Fire Detection & Fire Safety Equipment Systems",
    description:
      "Integrated fire detection and protection systems for early alerts, rapid response and improved facility safety.",
    image: "/images/services/fire-detection-safety (1) (1).webp",
    slug: "fire-safety",
    icon: Flame,
  },
  {
    name: "Emergency Lighting",
    title: "Central Battery Emergency Lighting & Exit Sign Systems",
    description:
      "Reliable emergency lighting and exit sign solutions for safe evacuation during power failures.",
    image: "/images/services/central-battery-emergency-lighting (1) (1).webp",
    slug: "emergency-lighting",
    icon: BatteryCharging,
  },
  {
    name: "Building Automation",
    title: "Smart Home & Building Automation Control Systems",
    description:
      "Intelligent automation solutions for enhanced comfort, energy efficiency and centralized building control.",
    image: "/images/services/smart-home-building-automation (1) (1).webp",
    slug: "building-automation",
    icon: Building2,
  },
  {
    name: "PA & Sound Systems",
    title: "PA Sound & Queue Management Systems",
    description:
      "Professional audio and queue management solutions for clear communication and efficient visitor flow.",
    image: "/images/services/pa-sound-queue-management (1) (1).webp",
    slug: "sound-system",
    icon: AudioLines,
  },
  {
    name: "Access Control",
    title: "Door Access with Parking Barrier System",
    description:
      "Integrated access control and parking barrier systems for secure entry, exit and vehicle management.",
    image: "/images/services/door-access-parking-barrier (1) (1).webp",
    slug: "access-control",
    icon: ShieldCheck,
  },
  {
    name: "CCTV & Surveillance",
    title: "CCTV & Security Surveillance Equipment",
    description:
      "Professional surveillance solutions for effective monitoring, recording and facility security.",
    image: "/images/services/cctv-security (1) (1).webp",
    slug: "cctv-security",
    icon: Cctv,
  },
  {
    name: "Guest Room Management",
    title: "Guest Room Management System Solutions",
    description:
      "Intelligent hospitality technology for guest comfort, room automation and energy management.",
    image: "/images/services/guest-room-management (1) (1).webp",
    slug: "guest-room",
    icon: BedDouble,
  },
  {
    name: "Nurse Call Systems",
    title: "Nurse Call Management System Solutions",
    description:
      "Connected healthcare communication systems supporting patient assistance and efficient staff response.",
    image: "/images/services/nurse-call-management (1) (1).webp",
    slug: "nurse-call",
    icon: HeartPulse,
  },
  {
    name: "Industrial UPS & Solar",
    title: "Industrial UPS and Professional Solar System",
    description:
      "Reliable industrial backup power and solar energy solutions for modern infrastructure.",
    image: "/images/services/industrial-ups-solar (1) (1).webp",
    slug: "ups-solar",
    icon: Zap,
  },
];

export default function CoreServices() {
  const [active, setActive] = useState(0);

  const service = services[active];
  const ActiveIcon = service.icon;

  const totalServices = String(services.length).padStart(2, "0");

  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="mb-7 grid items-end gap-5 lg:mb-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">

          {/* Heading */}

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-red-600" />

              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-600">
                Our Expertise
              </span>
            </div>

            <h2
              id="services-heading"
              className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#08152d] sm:text-4xl lg:text-[40px]"
            >
              Technology that protects.

              <br />

              <span className="text-[#203164]">
                Innovation that connects.
              </span>
            </h2>
          </div>

          {/* Description and Link */}

          <div className="lg:border-l lg:border-slate-200 lg:pl-7">

            <p className="max-w-md text-sm leading-relaxed text-slate-500 md:text-[15px]">
              Explore our integrated safety, security,
              automation and energy solutions for modern
              infrastructure.
            </p>

            <Link
              href="/services"
              className="group mt-3 inline-flex w-fit items-center gap-3 border-b-2 border-red-600 pb-1.5 text-sm font-semibold text-[#203164] transition-colors hover:text-red-600"
            >
              View All Services

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>
        </div>

        {/* =========================
            MOBILE & TABLET GRID
        ========================== */}

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#203164]/30 hover:shadow-lg"
              >

                {/* Image */}

                <div className="relative aspect-[8/5] w-full overflow-hidden bg-slate-100">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 639px) 50vw, 45vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-2 top-2 rounded-md bg-[#08152d]/90 px-2 py-1 text-[10px] font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-3 sm:p-4">

                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#203164]/5 text-[#203164] sm:h-10 sm:w-10">

                    <Icon size={18} strokeWidth={1.7} />

                  </div>

                  <h3 className="mb-3 text-[13px] font-bold leading-snug text-[#08152d] sm:text-lg">
                    {item.name}
                  </h3>

                  <div className="mt-auto flex items-center justify-between gap-1 border-t border-slate-100 pt-2.5">

                    <span className="text-[11px] font-semibold text-[#203164] sm:text-sm">
                      Explore Service
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#203164] text-white transition-colors group-hover:bg-red-600 sm:h-8 sm:w-8">

                      <ArrowUpRight size={14} />

                    </span>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* =========================
            DESKTOP SERVICES EXPLORER
        ========================== */}

        <div className="hidden items-stretch gap-6 lg:grid lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">

          {/* =========================
              LEFT SIDE NAVIGATION
          ========================== */}

          <div className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-[#f7f8fa] p-3">

            {/* Navigation Header */}

            <div className="flex items-center justify-between px-3 pb-3 pt-2">

              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                Explore Solutions
              </span>

              <span className="text-xs font-semibold text-red-600">
                {totalServices}
              </span>

            </div>

            {/* Services List */}

            <div
              role="group"
              aria-label="Select a service"
              className="grid flex-1 grid-rows-9 gap-1.5"
            >

              {services.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    aria-controls="service-preview"
                    className={`group flex min-h-[52px] w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
                      isActive
                        ? "bg-[#203164] text-white shadow-md"
                        : "text-slate-700 hover:bg-white hover:text-[#203164]"
                    }`}
                  >

                    {/* Icon */}

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-white text-[#203164]"
                      }`}
                    >

                      <Icon size={19} strokeWidth={1.7} />

                    </div>

                    {/* Service Name */}

                    <span className="flex-1 text-[13px] font-semibold leading-snug">
                      {item.name}
                    </span>

                    {/* Active Indicator */}

                    {isActive ? (
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-white"
                      />
                    ) : (
                      <span className="text-[11px] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}

                  </button>
                );
              })}

            </div>

          </div>

          {/* =========================
              RIGHT SIDE SERVICE PREVIEW
          ========================== */}

          <div
            id="service-preview"
            aria-live="polite"
            className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl bg-[#08152d] text-white"
          >

            {/* Service Image */}

            <div className="relative h-[240px] w-full shrink-0 overflow-hidden bg-slate-100 xl:h-[260px]">

              <Image
                key={service.image}
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1279px) 65vw, 800px"
                className="object-cover"
              />

              {/* Image Overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08152d]/15 to-transparent" />

              {/* CTI Label */}

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#08152d]/90 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-widest text-white">

                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                CTI Solutions

              </div>

              {/* Counter */}

              <div className="absolute bottom-4 right-4 rounded-lg bg-[#08152d]/90 px-3.5 py-2 text-xs font-semibold">

                {String(active + 1).padStart(2, "0")}

                <span className="text-white/50">
                  {" / "}{totalServices}
                </span>

              </div>

            </div>

            {/* =========================
                SERVICE INFORMATION
            ========================== */}

            <div className="relative flex flex-1 flex-col overflow-hidden p-6 xl:p-7">

              {/* Decorative Number */}

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -right-3 select-none text-[180px] font-black leading-none text-white/[0.035]"
              >
                {String(active + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-1 flex-col">

                {/* Service Category */}

                <div className="mb-3 flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5">

                    <ActiveIcon size={21} strokeWidth={1.6} />

                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
                    {service.name}
                  </span>

                </div>

                {/* Service Title */}

                <h3 className="max-w-2xl text-[25px] font-bold leading-tight xl:text-[28px]">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mb-5 mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>

                {/* =========================
                    BOTTOM ACTION BAR
                ========================== */}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">

                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-3 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-700"
                  >

                    Explore Solution

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </Link>

                  {/* Progress Indicators */}

                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1.5"
                  >

                    {services.map((item, index) => (
                      <span
                        key={item.slug}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          active === index
                            ? "w-6 bg-red-500"
                            : "w-2 bg-white/20"
                        }`}
                      />
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}