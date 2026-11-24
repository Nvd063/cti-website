import Link from "next/link";
import type { ReactNode } from "react";

const services = [
  "Fire Detection & Fire Safety Equipment",
  "Door Access & Parking Barrier Systems",
  "Emergency Lighting & Exit Sign Systems",
  "Smart Home & Building Automation",
  "PA & Sound Systems",
  "CCTV & Security Surveillance",
  "Guest Room Management Systems",
  "Nurse Call Management Systems",
  "Elevator, Escalator & HVAC Systems",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Store", href: "/store" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const offices = [
  {
    city: "Islamabad",
    address:
      "A-9, 4th Floor ATS Centre, AKM Fazal UL Haq Road, A-Block, G 6/3, Blue Area",
  },
  {
    city: "Rawalpindi",
    address:
      "S-191, 2nd Floor City Centre, Bank Road, Rawalpindi",
  },
  {
    city: "Lahore",
    address:
      "59/3, Quaid-Azam Industrial Estate, Kot Lakhpat, Lahore",
  },
  {
    city: "Faisalabad",
    address:
      "Office No. 06, LG Floor, Mall of Faisalabad, 208 CHK Road, Kashmir Bridge, West Canal Road",
  },
  {
    city: "Multan",
    address:
      "Office #34, 1st Floor, Rehman Plaza, Kachri Road, Multan",
  },
];

// Icons

type IconName =
  | "arrow"
  | "external"
  | "mail"
  | "phone"
  | "clock"
  | "location";

function Icon({
  name,
  className = "h-4 w-4",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    external: (
      <>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.57 2.11L8.74 11.1a16 16 0 0 0 4.16 4.16l1.27-1.27a2 2 0 0 1 2.11-.57l3 .5A2 2 0 0 1 22 16.92z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

// Section Heading

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 text-base font-bold text-white">
      {children}
    </h3>
  );
}

// Services

function ServicesList() {
  return (
    <ul className="space-y-1.5">
      {services.map((service) => (
        <li key={service}>
          <Link
            href="/services"
            className="group flex items-start gap-2 text-[13px] leading-5 text-slate-400 transition-colors hover:text-white"
          >
            <Icon
              name="arrow"
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500 transition-transform group-hover:translate-x-1"
            />

            <span>{service}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Quick Links

function QuickLinksList() {
  return (
    <ul className="space-y-2">
      {quickLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="group flex items-center gap-2 text-[13px] leading-5 text-slate-400 transition-colors hover:text-white"
          >
            <Icon
              name="arrow"
              className="h-3.5 w-3.5 shrink-0 text-red-500 transition-transform group-hover:translate-x-1"
            />

            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Contact Information

function ContactInformation() {
  return (
    <div className="space-y-3 text-[13px] leading-5 text-slate-400">

      {/* Emails */}

      <div className="flex items-start gap-3">
        <Icon
          name="mail"
          className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
        />

        <div className="min-w-0 space-y-1">
          {[
            "info@ctit.com.pk",
            "support@ctit.com.pk",
            "aali.ashrraf@ctit.com.pk",
          ].map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="block break-all transition-colors hover:text-white"
            >
              {email}
            </a>
          ))}
        </div>
      </div>

      {/* Phone Numbers */}

      <div className="flex items-start gap-3">
        <Icon
          name="phone"
          className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
        />

        <div className="space-y-1">
          <a
            href="tel:+92512756435"
            className="block hover:text-white"
          >
            +92 51 2756435
          </a>

          <a
            href="tel:+92512756436"
            className="block hover:text-white"
          >
            +92 51 2756436
          </a>

          <p>Fax: +92 51 2756436</p>
        </div>
      </div>

      {/* Opening Hours */}

      <div className="flex items-start gap-3">
        <Icon
          name="clock"
          className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
        />

        <div>
          <p>Monday – Saturday</p>

          <p className="font-medium text-white">
            9:00 AM – 6:00 PM
          </p>

          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Hotline */}

      <a
        href="tel:+923008443454"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 transition-colors hover:border-red-500/50"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
          <Icon name="phone" className="h-4 w-4" />
        </div>

        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            Hotline
          </p>

          <p className="text-sm font-bold text-white">
            +92 300 8443454
          </p>
        </div>

        <Icon
          name="external"
          className="h-4 w-4 text-slate-400 group-hover:text-red-500"
        />
      </a>
    </div>
  );
}

// Office Cards

function OfficeCards() {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
      {offices.map((office) => (
        <div
          key={office.city}
          className="rounded-xl border border-white/10 bg-white/[0.025] p-3.5 transition-colors duration-300 hover:border-red-500/40 hover:bg-white/[0.04]"
        >
          <div className="mb-2 flex items-center gap-2">
            <Icon
              name="location"
              className="h-4 w-4 shrink-0 text-red-500"
            />

            <h3 className="text-sm font-bold text-white">
              {office.city}
            </h3>
          </div>

          <address className="text-xs not-italic leading-5 text-slate-400">
            {office.address}
          </address>
        </div>
      ))}
    </div>
  );
}

// CTI Branding

function FooterBrand() {
  return (
    <div>
      <Link
        href="/"
        aria-label="CTI System and Solutions homepage"
        className="inline-block"
      >
        <div className="text-5xl font-black italic leading-none tracking-tighter text-white">
          CT<span className="text-red-500">I</span>
        </div>

        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
          System & Solutions
        </div>
      </Link>

      <p className="mt-4 max-w-[260px] text-[13px] leading-6 text-slate-400">
        Integrated fire safety, security, building automation
        and technology solutions for commercial, industrial
        and residential environments.
      </p>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-500" />

        <span className="text-[10px] uppercase tracking-wide text-slate-300">
          Serving Across Pakistan
        </span>
      </div>
    </div>
  );
}

// Mobile Accordion

function MobileAccordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-b border-white/10">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
        {title}

        <span
          aria-hidden="true"
          className="text-xl font-light text-red-500 transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="pb-4">{children}</div>
    </details>
  );
}

// Main Footer

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f172a] text-white">

      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-900/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* CTA Section */}

        <div className="flex flex-col gap-4 border-b border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between lg:py-6">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-red-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
                Work With CTI
              </span>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[34px]">
              Let&apos;s build a{" "}
              <span className="text-red-500">
                safer future.
              </span>
            </h2>

            <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">
              Safety. Security. Integrated Technology.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-4 self-start rounded-lg bg-[#e60012] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:self-auto"
          >
            Contact Our Team

            <Icon
              name="external"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Desktop Footer */}

        <div className="hidden border-b border-white/10 py-6 lg:block">

          <div className="grid grid-cols-[1fr_1.4fr_0.65fr_1.05fr] gap-6 xl:gap-10">

            {/* Branding */}

            <FooterBrand />

            {/* Services */}

            <div>
              <FooterHeading>Our Services</FooterHeading>
              <ServicesList />
            </div>

            {/* Quick Links */}

            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <QuickLinksList />
            </div>

            {/* Contact */}

            <div>
              <FooterHeading>Get in Touch</FooterHeading>
              <ContactInformation />
            </div>

          </div>
        </div>

        {/* Desktop Office Network */}

        <div className="hidden py-5 lg:block">

          <div className="mb-3 flex items-center gap-3">

            <span className="h-[2px] w-6 bg-red-500" />

            <h2 className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Our Office Network
            </h2>

            <div className="h-px flex-1 bg-white/10" />

            <span className="shrink-0 text-xs text-slate-500">
              05 Offices
            </span>

          </div>

          <OfficeCards />
        </div>

        {/* Mobile & Tablet Footer */}

        <div className="pb-5 pt-5 lg:hidden">

          <div className="mb-3 border-b border-white/10 pb-5">
            <FooterBrand />
          </div>

          <MobileAccordion title="Our Services">
            <ServicesList />
          </MobileAccordion>

          <MobileAccordion title="Quick Links">
            <QuickLinksList />
          </MobileAccordion>

          <MobileAccordion title="Our Office Network — 05 Offices">
            <OfficeCards />
          </MobileAccordion>

          <div className="pt-5">
            <FooterHeading>Get in Touch</FooterHeading>
            <ContactInformation />
          </div>

        </div>
      </div>

      {/* Copyright Bar */}

      <div className="relative border-t border-white/10 bg-[#0b1323]">

        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-2 px-5 py-3 sm:px-8 lg:flex-row lg:px-12">

          <p className="text-center text-[11px] leading-5 text-slate-400 lg:text-left">
            © 2026 CTI System & Solutions. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-400">

            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-slate-600">|</span>

            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            <span className="text-slate-600">|</span>

            <Link
              href="/cookie-policy"
              className="transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}