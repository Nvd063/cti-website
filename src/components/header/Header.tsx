"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-3 transition-all duration-300 sm:px-6 lg:px-10 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`relative mx-auto max-w-[1600px] rounded-[20px] border border-white/80 bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "shadow-[0_8px_35px_rgba(15,23,42,0.12)]"
            : "shadow-[0_5px_25px_rgba(15,23,42,0.07)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6 xl:px-8">

          {/* CTI Original Logo */}
          <Link
            href="/"
            aria-label="CTI System and Solutions Home"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center justify-center rounded-xl bg-white px-2 py-1"
          >
            <Image
              src="/images/logo/cti-logo.jpg"
              alt="CTI System & Solutions"
              width={120}
              height={75}
              priority
              className="h-[48px] w-auto object-contain sm:h-[58px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-slate-100/80 p-1.5 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  isActive(link.href) ? "page" : undefined
                }
                className={`relative whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 xl:px-6 ${
                  isActive(link.href)
                    ? "bg-[#202f60] text-white shadow-md"
                    : "text-slate-600 hover:bg-white hover:text-[#202f60]"
                }`}
              >
                {link.name}

                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-[#ef172b]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            {/* Hotline Button */}
            <a
              href="tel:+923008443454"
              aria-label="Call CTI hotline"
              title="+92 300 8443454"
              className="group hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#202f60] transition-all duration-300 hover:border-[#202f60] hover:bg-[#202f60] hover:text-white xl:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.69A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            {/* Contact Button */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#e60019] px-4 py-3 text-xs font-semibold text-white shadow-[0_5px_15px_rgba(230,0,25,0.18)] transition-all duration-300 hover:bg-[#202f60] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <span className="sm:hidden">Contact</span>

              <span className="hidden sm:inline">
                Contact Our Team
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#202f60] lg:hidden"
            >
              <span className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-1 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "translate-y-[5px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen
                      ? "-translate-y-[5px] -rotate-45"
                      : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          inert={!menuOpen}
          className={`grid transition-all duration-300 lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-4 border-t border-slate-200 pb-4 pt-3">

              <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.2em] text-slate-400">
                EXPLORE CTI
              </p>

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1.5"
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={
                      isActive(link.href)
                        ? "page"
                        : undefined
                    }
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      isActive(link.href)
                        ? "bg-[#202f60] text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`text-[10px] ${
                          isActive(link.href)
                            ? "text-red-400"
                            : "text-slate-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {link.name}
                    </span>

                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </nav>

              {/* Mobile Hotline */}
              <a
                href="tel:+923008443454"
                className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400">
                    CTI HOTLINE
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#202f60]">
                    +92 300 8443454
                  </p>
                </div>

                <span className="text-sm font-semibold text-[#e60019]">
                  Call Now ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}