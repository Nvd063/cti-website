
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    name: "Fire & Safety",
    title: "Fire Detection & Fire Safety Equipment Systems",
    description:
      "Integrated fire detection and protection systems for early alerts, rapid response and improved facility safety.",
    image: "/images/services/fire-detection-safety (1) (1).webp",
    slug: "fire-safety",
  },
  {
    name: "Emergency Lighting",
    title: "Central Battery Emergency Lighting & Exit Sign Systems",
    description:
      "Reliable emergency lighting and exit sign solutions for safe evacuation during power failures.",
    image: "/images/services/central-battery-emergency-lighting (1) (1).webp",
    slug: "emergency-lighting",
  },
  {
    name: "Building Automation",
    title: "Smart Home & Building Automation Control Systems",
    description:
      "Intelligent automation solutions for enhanced comfort, energy efficiency and centralized building control.",
    image: "/images/services/smart-home-building-automation (1) (1).webp",
    slug: "building-automation",
  },
  {
    name: "PA & Sound Systems",
    title: "PA Sound & Queue Management Systems",
    description:
      "Professional audio and queue management solutions for clear communication and efficient visitor flow.",
    image: "/images/services/pa-sound-queue-management (1) (1).webp",
    slug: "sound-system",
  },
  {
    name: "Access Control",
    title: "Door Access with Parking Barrier System",
    description:
      "Integrated access control and parking barrier systems for secure entry, exit and vehicle management.",
    image: "/images/services/door-access-parking-barrier (1) (1).webp",
    slug: "access-control",
  },
  {
    name: "CCTV & Surveillance",
    title: "CCTV & Security Surveillance Equipment",
    description:
      "Professional surveillance solutions for effective monitoring, recording and facility security.",
    image: "/images/services/cctv-security (1) (1).webp",
    slug: "cctv-security",
  },
  {
    name: "Guest Room Management",
    title: "Guest Room Management System Solutions",
    description:
      "Intelligent hospitality technology for guest comfort, room automation and energy management.",
    image: "/images/services/guest-room-management (1) (1).webp",
    slug: "guest-room",
  },
  {
    name: "Nurse Call Systems",
    title: "Nurse Call Management System Solutions",
    description:
      "Connected healthcare communication systems supporting patient assistance and efficient staff response.",
    image: "/images/services/nurse-call-management (1) (1).webp",
    slug: "nurse-call",
  },
  {
    name: "Industrial UPS & Solar",
    title: "Industrial UPS and Professional Solar System",
    description:
      "Reliable industrial backup power and solar energy solutions for modern infrastructure.",
    image: "/images/services/industrial-ups-solar (1) (1).webp",
    slug: "ups-solar",
  },
];

export default function CoreServices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION CONTAINER
        ========================== */}

        <div className="rounded-[24px] bg-[#f3f5f8] p-4 sm:p-6 lg:p-9">

          {/* =========================
              SECTION HEADER
          ========================== */}

          <div className="mb-7 grid items-center gap-5 lg:mb-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">

            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[4px] w-8 bg-red-600" />

                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-600">
                  Our Expertise
                </span>
              </div>

              <h2
                id="services-heading"
                className="text-[28px] font-bold leading-[1.12] tracking-tight text-[#08152d] sm:text-[34px] lg:text-[42px]"
              >
                Intelligent Solutions.
                <br />
                Safer Environments.
              </h2>
            </div>

            <div className="lg:pl-6">
              <p className="max-w-[320px] text-sm leading-relaxed text-slate-500 lg:text-[15px]">
                Integrated technology solutions
                for modern infrastructure.
              </p>
            </div>

          </div>

          {/* =========================
              RESPONSIVE BENTO GRID
          ========================== */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">

            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-label={`Explore ${service.title}`}
                className={`
                  group relative flex min-w-0 flex-col
                  overflow-hidden rounded-xl
                  bg-[#0b162c]
                  ring-1 ring-black/5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-red-600
                  motion-reduce:transform-none
                  motion-reduce:transition-none

                  ${
                    index === 0
                      ? "sm:col-span-2 lg:col-span-6"
                      : index < 3
                        ? "lg:col-span-3"
                        : "lg:col-span-4"
                  }
                `}
              >

                {/* =========================
                    SERVICE IMAGE
                ========================== */}

                <div
                  className={`
                    relative w-full overflow-hidden
                    bg-slate-200

                    ${
                      index < 3
                        ? "h-[210px] sm:h-[230px] lg:h-[245px]"
                        : "h-[210px] sm:h-[190px] lg:h-[180px]"
                    }
                  `}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 1023px) 100vw, 50vw"
                        : index < 3
                          ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                          : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    }
                    className="
                      object-cover object-center
                      transition-transform duration-700
                      ease-out
                      group-hover:scale-105
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  />

                  {/* Subtle Image Overlay */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-transparent"
                  />

                  {/* Service Number */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute left-3 top-3
                      rounded-md bg-[#08152d]/65
                      px-2.5 py-1.5
                      text-[11px] font-semibold
                      tracking-wide text-white
                      backdrop-blur-sm
                      sm:left-4 sm:top-4
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* =========================
                    BOTTOM TITLE PANEL
                ========================== */}

                <div
                  className="
                    relative z-10 -mt-2
                    flex min-h-[64px] flex-1
                    items-center justify-between
                    gap-3 rounded-t-xl
                    bg-[#0b162c]
                    px-4 py-4
                    transition-colors duration-300
                    group-hover:bg-[#203164]
                    sm:px-5
                  "
                >

                  <h3
                    className={`
                      font-bold leading-snug text-white

                      ${
                        index === 0
                          ? "text-[15px] sm:text-base lg:text-[18px]"
                          : "text-[14px] sm:text-[15px]"
                      }
                    `}
                  >
                    {service.name}
                  </h3>

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
                    />
                  </span>

                </div>

                {/* Accessible Service Description */}

                <span className="sr-only">
                  {service.description}
                </span>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
