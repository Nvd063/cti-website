
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Phone,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

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

  const isHome = pathname === "/";
  const isGlass = isHome && !scrolled && !menuOpen;

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

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(`${href}/`);

  return (
    <header
      className={`
        z-50 w-full
        px-3 sm:px-6 lg:px-10
        transition-all duration-500
        ${
          isHome
            ? "sticky top-0 lg:fixed lg:inset-x-0 lg:top-0"
            : "sticky top-0"
        }
        ${scrolled ? "py-2" : "py-3 lg:py-4"}
      `}
    >
      <div
        className={`
          relative mx-auto max-w-[1600px]
          rounded-[22px] lg:rounded-[28px]
          border
          backdrop-blur-2xl backdrop-saturate-150
          transition-all duration-500
          ${
            isGlass
              ? `
                border-white/60
                bg-white/65
                shadow-[0_8px_32px_rgba(0,15,45,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)]
              `
              : `
                border-white/80
                bg-white/95
                shadow-[0_8px_30px_rgba(15,23,42,0.10)]
              `
          }
        `}
      >
        {/* Liquid Glass Reflection */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-8 top-0
            h-px bg-gradient-to-r
            from-transparent via-white to-transparent
          "
        />

        <div
          className="
            relative flex items-center justify-between
            gap-3 px-3 py-2.5
            sm:px-5
            lg:px-6 lg:py-3
            xl:px-8
          "
        >
          {/* Original CTI Logo */}

          <Link
            href="/"
            aria-label="CTI System and Solutions Home"
            onClick={() => setMenuOpen(false)}
            className="
              flex shrink-0 items-center justify-center
              rounded-2xl border border-white/60
              bg-white/90 px-2 py-1
              shadow-sm
            "
          >
            <Image
              src="/images/logo/cti-logo.jpg"
              alt="CTI System & Solutions"
              width={120}
              height={75}
              priority
              className="
                h-[40px] w-auto object-contain
                sm:h-[48px]
                lg:h-[54px]
              "
            />
          </Link>

          {/* Desktop Navigation */}

          <nav
            aria-label="Main navigation"
            className="
              hidden items-center gap-1
              rounded-full border border-white/60
              bg-white/35 p-1.5
              shadow-[inset_0_1px_3px_rgba(15,23,42,0.05)]
              backdrop-blur-lg
              lg:flex
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  isActive(link.href) ? "page" : undefined
                }
                className={`
                  relative whitespace-nowrap
                  rounded-full px-4 py-3
                  text-sm font-semibold
                  transition-all duration-300
                  xl:px-6
                  ${
                    isActive(link.href)
                      ? `
                        bg-[#202f60] text-white
                        shadow-[0_4px_12px_rgba(32,47,96,0.25)]
                      `
                      : `
                        text-[#334155]
                        hover:bg-white/70
                        hover:text-[#202f60]
                      `
                  }
                `}
              >
                {link.name}

                {isActive(link.href) && (
                  <span
                    className="
                      absolute -bottom-1 left-1/2
                      h-[3px] w-5 -translate-x-1/2
                      rounded-full bg-[#ed0026]
                    "
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            {/* Hotline */}

            <a
              href="tel:+923008443454"
              aria-label="Call CTI hotline"
              title="+92 300 8443454"
              className="
                hidden h-12 w-12 items-center justify-center
                rounded-full border border-white/70
                bg-white/40 text-[#202f60]
                backdrop-blur-lg
                transition-all duration-300
                hover:bg-[#202f60] hover:text-white
                xl:flex
              "
            >
              <Phone size={19} strokeWidth={1.8} />
            </a>

            {/* Contact Button */}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                group flex items-center gap-2
                rounded-full border border-white/20
                bg-[#e60019] px-3.5 py-3
                text-xs font-semibold text-white
                shadow-[0_5px_18px_rgba(230,0,25,0.22)]
                transition-all duration-300
                hover:bg-[#202f60]
                sm:px-6 sm:py-3.5 sm:text-sm
              "
            >
              <span className="sm:hidden">Contact</span>

              <span className="hidden sm:inline">
                Contact Our Team
              </span>

              <ArrowUpRight
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen((previous) => !previous)
              }
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-white/70
                bg-white/70 text-[#202f60]
                transition-all duration-300
                hover:bg-white
                lg:hidden
              "
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}

        <div
          id="mobile-navigation"
          inert={!menuOpen}
          className={`
            grid transition-all duration-300 lg:hidden
            ${
              menuOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div className="mx-4 border-t border-slate-200/70 pb-4 pt-3">

              <p
                className="
                  mb-3 px-3 text-[10px] font-bold
                  tracking-[0.2em] text-slate-400
                "
              >
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
                    className={`
                      flex items-center justify-between
                      rounded-xl px-4 py-3.5
                      text-sm font-semibold
                      transition-all duration-300
                      ${
                        isActive(link.href)
                          ? "bg-[#202f60] text-white"
                          : "bg-white/60 text-slate-700 hover:bg-white"
                      }
                    `}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`
                          text-[10px]
                          ${
                            isActive(link.href)
                              ? "text-red-400"
                              : "text-slate-400"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {link.name}
                    </span>

                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </nav>

              {/* Mobile Hotline */}

              <a
                href="tel:+923008443454"
                className="
                  mt-4 flex items-center justify-between
                  rounded-xl border border-white/80
                  bg-white/70 px-4 py-3
                "
              >
                <div>
                  <p
                    className="
                      text-[10px] font-semibold
                      tracking-wider text-slate-400
                    "
                  >
                    CTI HOTLINE
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#202f60]">
                    +92 300 8443454
                  </p>
                </div>

                <span className="flex items-center gap-2 text-sm font-semibold text-[#e60019]">
                  Call Now
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
